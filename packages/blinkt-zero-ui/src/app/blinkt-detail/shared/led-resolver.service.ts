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
   *
   */
  resolve(
    snapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Led> {
    const index = snapshot.paramMap.get("index");

    return this.color.getColorObservable(Number(index));
  }
}
