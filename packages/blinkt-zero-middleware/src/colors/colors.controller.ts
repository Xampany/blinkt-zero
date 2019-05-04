import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { Observable, of } from "rxjs";
import tinycolor from "tinycolor2";
import { BlinktService } from "../blinkt/blinkt.service";

@Controller("colors")
@ApiUseTags("colors")
export class ColorsController {
  /**
   *
   * @param _blinkt
   */
  // tslint:disable-next-line: variable-name
  constructor(private readonly _blinkt: BlinktService) {}

  /**
   *
   */
  @Get()
  @ApiOperation({
    title: "Liefert die Liste der Farben",
  })
  readColors(): Observable<string[]> {
    return this._blinkt.getColors();
  }

  /**
   *
   */
  @Get(":index")
  @ApiOperation({
    title: "Liefert die Farbe für den Index",
  })
  readColor(@Param("index") index: number): Observable<string> {
    return this._blinkt.getColor(index);
  }
}
