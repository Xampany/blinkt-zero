import { Injectable } from "@nestjs/common";
import { BinaryValue, Gpio } from "onoff";
import { interval, Observable, of, Subject } from "rxjs";
import { map, take, takeUntil } from "rxjs/operators";
import tinycolor from "tinycolor2";

@Injectable()
export class BlinktService {
  private static DAT: number = 23;
  private static CLK: number = 24;
  private static PIXELS: number = 8;
  private static BLACK: string[] = Array(BlinktService.PIXELS).fill("black");

  private colors = Array.from(Array(BlinktService.PIXELS), () =>
    tinycolor.random().toRgbString(),
  );

  private readonly dat = new Gpio(BlinktService.DAT, "out");
  private readonly clk = new Gpio(BlinktService.CLK, "out");

  private readonly flash$ = new Subject<void>();
  private readonly strip$ = new Subject<void>();

  /**
   *
   */
  constructor() {
    this.writePixels(this.colors);
  }

  /**
   *
   */
  getColors(): Observable<string[]> {
    return of(this.colors);
  }

  /**
   *
   * @param index
   */
  getColor(index: number): Observable<string> {
    return this.getColors().pipe(map(colors => colors[index]));
  }

  /**
   *
   * @param color
   */
  setColors(color: string): Observable<string[]> {
    this.colors = this.colors.map(() => tinycolor(color).toRgbString());
    this.writePixels(this.colors);
    return this.getColors();
  }

  /**
   *
   * @param index
   * @param color
   */
  setColor(index: number, color: string) {
    this.colors[index] = tinycolor(color).toRgbString();
    this.writePixels(this.colors);
    return this.getColor(index);
  }

  /**
   *
   * @param frequency
   * @param duration
   */
  startFlash(frequency = 1, duration = 1e4) {
    const factor = 2;
    const period = 1e3 / frequency / factor;
    const count = duration / period;
    const isEven = (x: number): boolean => x % 2 === 0; // true = even / false = uneven

    interval(period)
      .pipe(
        take(count),
        map(isEven),
        takeUntil(this.flash$),
      )
      .subscribe({
        next: phase =>
          phase
            ? this.writePixels(BlinktService.BLACK)
            : this.writePixels(this.colors),
        complete: () => this.sendUpdate(),
      });
    return true;
  }

  /**
   *
   */
  stopFlash(): boolean {
    this.flash$.next();
    return true;
  }

  /**
   * Starts a light strip for all the pixels with the current color setup.
   * @param {Number} duration The duration of one cycle of the color strip [ms]
   * @param {Number} repeat The number of times to repeat the strip
   */
  startStrip(duration: number = 1e3, repeat: number = 1) {
    const period: number = Math.round(duration / BlinktService.PIXELS);
    const count: number = repeat * BlinktService.PIXELS;

    interval(period)
      .pipe(
        take(count),
        map(v => v % BlinktService.PIXELS),
        takeUntil(this.strip$),
      )
      .subscribe({
        next: (show: number) => {
          const colors: string[] = this.colors.map(
            (color: string, index: number) => {
              return index === show ? color : "black";
            },
          );
          this.writePixels(colors);
        },
        complete: () => this.sendUpdate(),
      });
  }

  /**
   * Stops the light strip for the current pixels
   * @return {Boolean} true, if the strip was stopped successfully, false otherwise
   */
  stopStrip(): boolean {
    this.strip$.next();
    return true;
  }

  /**
   * Sends the current pixel settings to the Blinkt! device. Once you
   * have set each pixel RGB and brightness, you MUST call this for the
   * pixels to change on the Blinkt! device.
   */
  private sendUpdate() {
    this.writePixels(this.colors);
  }

  /**
   * Writes the given colors to the Blinkt! device.
   * @param colors The color values to write.
   */
  private writePixels(colors: string[]): void {
    // send four zeros
    Array(4)
      .fill(0)
      .forEach(value => this.writeByte(value));
    // send each color
    colors.forEach(color => {
      const { a, b, g, r } = tinycolor(color).toRgb();
      // Brightness
      // tslint:disable-next-line: no-bitwise
      this.writeByte(0b11100000 | a);
      // Blue
      this.writeByte(b);
      // Green
      this.writeByte(g);
      // Red
      this.writeByte(r);
    });
    // finalize
    this.writeByte(0xff);
  }

  /**
   * Writes byte data to the GPIO pins.
   * @param {Number} byte The byte value to write.
   * @private
   */
  private writeByte(byte: number): void {
    for (let index: number = 0; index < 8; index++) {
      const bit: BinaryValue =
        // tslint:disable-next-line: no-bitwise
        (byte & (1 << (7 - index))) > 0 === true ? Gpio.HIGH : Gpio.LOW;
      this.dat.writeSync(bit);
      this.clk.writeSync(Gpio.HIGH);
      this.clk.writeSync(Gpio.LOW);
    }
  }
}
