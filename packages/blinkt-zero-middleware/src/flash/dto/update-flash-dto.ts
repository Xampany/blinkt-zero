import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class UpdateFlashDto {
  @ApiProperty({
    example: "1",
    description: "Die Frequenz [Hz]",
  })
  @IsNumber()
  readonly frequency!: number;

  @ApiProperty({
    example: "10000",
    description: "Die Dauer [ms]",
  })
  @IsNumber()
  readonly duration!: number;
}
