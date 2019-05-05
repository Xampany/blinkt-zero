import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { BlinktCommonModule } from "../blinkt-common/blinkt-common.module";
import { BlinktDashboardRoutingModule } from "./blinkt-dashboard-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LedListComponent } from "./led-list/led-list.component";

@NgModule({
  declarations: [DashboardComponent, LedListComponent],
  imports: [CommonModule, BlinktDashboardRoutingModule, BlinktCommonModule],
  exports: [DashboardComponent]
})
export class BlinktDashboardModule {}
