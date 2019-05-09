import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { ColorService } from "../../blinkt-common/shared/color.service";
import { Led } from "../../blinkt-common/shared/led";

@Injectable({
  providedIn: "root"
})
export class LedResolverService implements Resolve<Led> {
  constructor(private readonly color: ColorService) {}

  /**
   * Lädt die Liste der Leds, bevor die Route aufgerufen wird
   */
  resolve(
    snapshot: ActivatedRouteSnapshot,
    // tslint:disable-next-line: variable-name
    _state: RouterStateSnapshot
  ): Observable<Led> {
    const index = snapshot.paramMap.get("index");

    return this.color.readColor$(Number(index));
  }
}
