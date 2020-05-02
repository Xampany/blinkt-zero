import { Query, Resolver } from "@nestjs/graphql";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BlinktService } from "../blinkt/blinkt.service";
import { Led } from "../models/led";

@Resolver("Colors")
export class ColorsResolver {
  // tslint:disable-next-line: variable-name
  constructor(private readonly _blinkt: BlinktService) {}

  @Query(() => [String], { description: "Liefert die Liste der Farben" })
  readColors() {
    return this._blinkt.getColors();
  }

  @Query(() => [Led], { description: "Liefert die Liste der Leds" })
  readLeds(): Observable<Led[]> {
    return this._blinkt
      .getColors()
      .pipe(map((colors) => colors.map((color, index) => ({ index, color }))));
  }
}
