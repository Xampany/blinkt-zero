import { Query, Resolver } from "@nestjs/graphql";
import { BlinktService } from "../blinkt/blinkt.service";

@Resolver("Colors")
export class ColorsResolver {
  // tslint:disable-next-line: variable-name
  constructor(private readonly _blinkt: BlinktService) {}

  @Query((returns) => [String], { description: "Liefert die Liste der Farben" })
  readColors() {
    return this._blinkt.getColors();
  }
}
