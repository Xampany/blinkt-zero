import { Body, Controller, Delete, Put } from "@nestjs/common";
import { ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { BlinktService } from "../blinkt/blinkt.service";
import { UpdateFlashDto } from "./dto/update-flash-dto";

@Controller("flash")
@ApiUseTags("flash")
export class FlashController {
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
    title: "Bringts alle Farben zum Blinken",
  })
  updateFlash(@Body() payload: UpdateFlashDto) {
    const { frequency, duration } = payload;
    return this._blinkt.startFlash(frequency, duration);
  }

  /**
   *
   */
  @Delete()
  @ApiOperation({
    title: "Soppt das Blinken",
  })
  deleteFlash() {
    return this._blinkt.stopFlash();
  }
}
