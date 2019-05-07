import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./blinkt-dashboard/dashboard/dashboard.component";
import { DetailComponent } from "./blinkt-detail/detail/detail.component";
import { IndexGuard } from "./blinkt-detail/shared/index.guard";
import { LedResolverService } from "./blinkt-detail/shared/led-resolver.service";
import { UnloadGuard } from "./blinkt-detail/shared/unload.guard";

const routes: Routes = [
  {
    path: "leds",
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: ":index",
        component: DetailComponent,
        canActivate: [IndexGuard],
        canDeactivate: [UnloadGuard],
        resolve: {
          led: LedResolverService
        },
        data: {
          solution: 42
        }
      }
    ]
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "leds"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
