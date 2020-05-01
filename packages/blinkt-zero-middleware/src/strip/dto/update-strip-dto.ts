import { ApiProperty } from "@nestjs/swagger";

import { IsNumber } from "class-validator";

export class UpdateStripDto {
  @ApiProperty({
    example: "1000",
    description: "Die Dauer [ms]",
  })
  @IsNumber()
  readonly duration!: number;

  @ApiProperty({
    example: "1",
    description: "Die Anzahl der Wiederholungen",
  })
  @IsNumber()
  readonly repeat!: number;
}
