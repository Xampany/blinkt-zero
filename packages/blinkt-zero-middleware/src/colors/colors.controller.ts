import { Controller, Get } from "@nestjs/common";
import { Observable, of } from "rxjs";
import tinycolor from "tinycolor2";

@Controller("colors")
export class ColorsController {
  /**
   * Liefert die Liste der Farben des Blinkt!
   */
  @Get()
  readColors(): Observable<string[]> {
    const colors = Array.from(Array(8), () => tinycolor.random().toString());
    return of(colors);
  }
}
