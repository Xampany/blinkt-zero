import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BlinktService } from "../blinkt/blinkt.service";
import { Led } from "../models/led";

@Resolver("Colors")
export class ColorsResolver {
  // tslint:disable-next-line: variable-name
  constructor(private readonly _blinkt: BlinktService) {}

  @Query(() => [String], { description: "Liefert die Liste der Farben" })
  readColors(): Observable<string[]> {
    return this._blinkt.getColors();
  }

  @Query(() => [Led], { description: "Liefert die Liste der Leds" })
  readLeds(): Observable<Led[]> {
    return this._blinkt
      .getColors()
      .pipe(map(Led.toLeds));
  }

  @Mutation(() => [Led], { description: "Aktualisiert alle Farben" })
  updateLeds(
    @Args({
      name: "color",
      description: "Die Farbe als CSS String",
      type: () => String,
    })
    color: string,
  ): Observable<Led[]> {
    return (
      this._blinkt
        .setColors(color)
        .pipe(map(Led.toLeds))
    );
  }
}
