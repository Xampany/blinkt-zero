import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { DetailComponent } from "../detail/detail.component";

@Injectable({
  providedIn: "root"
})
export class UnloadGuard implements CanDeactivate<DetailComponent> {
  canDeactivate(
    component: DetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined
  ): boolean {
    return component.isDirty() ? confirm("Möchten Sie wirklich gehen") : true;
  }
}
