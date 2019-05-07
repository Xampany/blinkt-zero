import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { ColorService } from "../../blinkt-common/shared/color.service";

@Injectable({
  providedIn: "root"
})
export class IndexGuard implements CanActivate {
  constructor(private readonly color: ColorService) {}

  canActivate(
    snapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    //
    return this.color.isValidIndex(snapshot.paramMap.get("index"));
  }
}
