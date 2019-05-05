import { Body, Controller, Delete, Put } from "@nestjs/common";
import { ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { BlinktService } from "../blinkt/blinkt.service";
import { UpdateStripDto } from "./dto/update-strip-dto";

@Controller("strip")
@ApiUseTags("strip")
export class StripController {
  /**
   *
   * @param _blinkt
   */
  // tslint:disable-next-line: variable-name
  constructor(private readonly _blinkt: BlinktService) {}

  /**
   *
   * @param payload
   */
  @Put()
  @ApiOperation({
    title: "Lässt jede einzelne Farbe kurz Blinken",
  })
  updateStrip(@Body() payload: UpdateStripDto) {
    const { duration, repeat } = payload;
    return this._blinkt.startStrip(duration, repeat);
  }

  /**
   *
   */
  @Delete()
  @ApiOperation({
    title: "Stoppt das Blinken",
  })
  deleteStrip() {
    return this._blinkt.stopStrip();
  }
}
