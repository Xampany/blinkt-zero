import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./blinkt-dashboard/dashboard/dashboard.component";
import { DetailComponent } from "./blinkt-detail/detail/detail.component";

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
        component: DetailComponent
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
