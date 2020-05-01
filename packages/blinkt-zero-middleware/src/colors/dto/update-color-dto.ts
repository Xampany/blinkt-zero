import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateColorDto {
  @ApiProperty({
    example: "#ffccbb",
  })
  @IsString()
  readonly color!: string;
}
