import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { BlinktService } from "../blinkt/blinkt.service";
import { FlashInput } from "./models/flash";

@Resolver("Flash")
export class FlashResolver {
  /**
   *
   * @param _blinkt
   */
  // tslint:disable-next-line: variable-name
  constructor(private readonly _blinkt: BlinktService) {}

  @Mutation(() => Boolean, {
    description: "Bringt alle Farben zum Blinken",
  })
  startFlash(@Args("options") { frequency, duration }: FlashInput): boolean {
    return this._blinkt.startFlash(frequency, duration);
  }
}
