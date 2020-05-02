import { Injectable } from "@nestjs/common";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import tinycolor from "tinycolor2";
import { BlinktService } from "../blinkt.service";

@Injectable()
export class BlinktStubService
  implements
    Pick<
      BlinktService,
      // tslint:disable-next-line: max-union-size
      | "getColors"
      | "getColor"
      | "setColors"
      | "setColor"
    > {
  private colors = Array.from(Array(8), () => tinycolor.random().toRgbString());
  getColors(): Observable<string[]> {
    return of(this.colors);
  }
  getColor(index: number): Observable<string> {
    return this.getColors().pipe(map((colors) => colors[index]));
  }
  setColors(color: string): Observable<string[]> {
    this.colors = this.colors.map(() => color);
    return this.getColors();
  }
  setColor(index: number, color: string): Observable<string> {
    this.colors[index] = color;
    return this.getColor(index);
  }
}
