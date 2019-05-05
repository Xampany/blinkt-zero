import { ApiModelProperty } from "@nestjs/swagger";

import { IsNumber } from "class-validator";

export class UpdateStripDto {
  @ApiModelProperty({
    example: "1000",
    description: "Die Dauer [ms]",
  })
  @IsNumber()
  readonly duration!: number;

  @ApiModelProperty({
    example: "1",
    description: "Die Anzahl der Wiederholungen",
  })
  @IsNumber()
  readonly repeat!: number;
}
