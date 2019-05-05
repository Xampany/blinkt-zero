import { Injectable } from "@nestjs/common";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import tinycolor from "tinycolor2";

@Injectable()
export class BlinktService {
  private colors = Array.from(Array(8), () => tinycolor.random().toRgbString());

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
    return this.getColors();
  }

  /**
   *
   * @param index
   * @param color
   */
  setColor(index: number, color: string) {
    this.colors[index] = tinycolor(color).toRgbString();
    return this.getColor(index);
  }
}
