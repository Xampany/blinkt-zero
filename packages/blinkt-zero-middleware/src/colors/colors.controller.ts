import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { Observable, of } from "rxjs";
import tinycolor from "tinycolor2";

@Controller("colors")
@ApiUseTags("colors")
export class ColorsController {
  private colors = Array.from(Array(8), () => tinycolor.random().toString());

  /**
   *
   */
  @Get()
  @ApiOperation({
    title: "Liefert die Liste der Farben",
  })
  readColors(): Observable<string[]> {
    return of(this.colors);
  }

  /**
   *
   */
  @Get(":index")
  @ApiOperation({
    title: "Liefert die Farbe für den Index",
  })
  readColor(@Param("index") index: number): Observable<string> {
    return of(this.colors[index]);
  }
}
