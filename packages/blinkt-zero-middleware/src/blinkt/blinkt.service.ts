import { Injectable } from "@nestjs/common";
import { Gpio, BinaryValue } from "onoff";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
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
