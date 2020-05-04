import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { Observable } from "rxjs";
import { FlashInput } from "./models/flash";
import { BlinktService } from "../blinkt/blinkt.service";

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
