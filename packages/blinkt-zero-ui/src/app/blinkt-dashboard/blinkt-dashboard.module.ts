import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { BlinktDashboardRoutingModule } from "./blinkt-dashboard-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, BlinktDashboardRoutingModule],
  exports: [DashboardComponent]
})
export class BlinktDashboardModule {}
