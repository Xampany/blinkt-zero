import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType({
  description: "Eine einzelne Led",
})
export class Led {
  @Field({
    description: "Der 0-basierte Index",
  })
  index!: number;

  @Field({
    description: "Die Farbe als valider CSS String",
  })
  color!: string;
}
