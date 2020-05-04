import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType({
  description: "Eine einzelne Led",
})
export class Led {
  @Field(() => Int, {
    description: "Der 0-basierte Index",
  })
  index!: number;

  @Field({
    description: "Die Farbe als valider CSS String",
  })
  color!: string;

  static toLeds(colors: string[]): Led[] {
    return colors.map((color, index) => ({ index, color }));
  }
}
