import { Pipe, PipeTransform } from "@angular/core";
import * as tinycolor from "tinycolor2";

@Pipe({
  name: "blinktColor"
})
export class BlinktColorPipe implements PipeTransform {
  /**
   *
   */
  transform(value: string, format?: any): string {
    return tinycolor(value).toString(format);
  }
}
