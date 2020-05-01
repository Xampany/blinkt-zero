import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Observable } from "rxjs";
import { BlinktService } from "../blinkt/blinkt.service";
import { UpdateColorDto } from "./dto/update-color-dto";

@Controller("colors")
@ApiTags("colors")
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
    description: "Liefert die Liste der Farben",
  })
  readColors(): Observable<string[]> {
    return this._blinkt.getColors();
  }

  /**
   *
   * @param index
   */
  @Get(":index")
  @ApiOperation({
    description: "Liefert die Farbe für den Index",
  })
  readColor(@Param("index") index: number): Observable<string> {
    return this._blinkt.getColor(index);
  }

  /**
   *
   * @param payload
   */
  @Put()
  @ApiOperation({
    description: "Aktualisiert alle Farben",
  })
  updateColors(@Body() payload: UpdateColorDto) {
    return this._blinkt.setColors(payload.color);
  }

  /**
   *
   * @param payload
   */
  @Put(":index")
  @ApiOperation({
    description: "Aktualisiert die Farbe für den Index",
  })
  updateColor(@Param("index") index: number, @Body() payload: UpdateColorDto) {
    return this._blinkt.setColor(index, payload.color);
  }
}
