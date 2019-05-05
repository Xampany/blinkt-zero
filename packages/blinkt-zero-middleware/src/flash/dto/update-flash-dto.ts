import { ApiModelProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class UpdateFlashDto {
  @ApiModelProperty({
    example: "1",
    description: "Die Frequenz [Hz]",
  })
  @IsNumber()
  readonly frequency!: number;

  @ApiModelProperty({
    example: "1000",
    description: "Die Dauer [ms]",
  })
  @IsNumber()
  readonly duration!: number;
}
