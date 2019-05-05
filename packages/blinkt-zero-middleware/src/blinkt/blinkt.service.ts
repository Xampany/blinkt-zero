import { Injectable } from "@nestjs/common";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import tinycolor from "tinycolor2";

@Injectable()
export class BlinktService {
  private colors = Array.from(Array(8), () => tinycolor.random().toString());

  /**
   *
   */
  getColors(): Observable<string[]> {
    return of(this.colors);
  }

  /**
   *
   * @param color
   */
  setColors(color: string): Observable<string[]> {
    this.colors = this.colors.map(() => tinycolor(color).toString());
    return this.getColors();
  }

  /**
   *
   * @param index
   */
  getColor(index: number): Observable<string> {
    return this.getColors().pipe(map(colors => colors[index]));
  }
}
