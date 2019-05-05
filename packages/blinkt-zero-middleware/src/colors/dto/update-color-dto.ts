import { ApiModelProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateColorDto {
  @ApiModelProperty({
    example: "#ffccbb",
  })
  @IsString()
  readonly color!: string;
}
