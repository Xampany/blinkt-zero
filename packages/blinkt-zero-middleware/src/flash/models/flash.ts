import { Field, Float, InputType, Int } from "@nestjs/graphql";

@InputType({ description: "Die Parameter für das Blinken" })
export class FlashInput {
  @Field(() => Float, {
    name: "frequency",
    description: "Die Frequenz [Hz]",
    defaultValue: 1,
  })
  frequency!: number;

  @Field(() => Int, {
    name: "duration",
    description: "Die Dauer [ms]",
    defaultValue: 1000,
  })
  duration!: number;
}
