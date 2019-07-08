import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./blinkt-dashboard/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "leds",
    loadChildren: () =>
      import("./blinkt-detail/blinkt-detail.module").then(
        m => m.BlinktDetailModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
