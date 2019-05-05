import { Body, Controller, Get, Param, Patch } from "@nestjs/common";
import { ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { Observable } from "rxjs";
import { BlinktService } from "../blinkt/blinkt.service";
import { UpdateColorDto } from "./dto/update-color-dto";

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

  /**
   *
   * @param payload
   */
  @Patch()
  @ApiOperation({
    title: "Aktualisiert alle Farben",
  })
  updateColors(@Body() payload: UpdateColorDto) {
    return this._blinkt.setColors(payload.color);
  }

  /**
   *
   * @param payload
   */
  @Patch(":index")
  @ApiOperation({
    title: "Aktualisiert die Farbe für den Index",
  })
  updateColor(@Param("index") index: number, @Body() payload: UpdateColorDto) {
    return this._blinkt.setColor(index, payload.color);
  }
}
