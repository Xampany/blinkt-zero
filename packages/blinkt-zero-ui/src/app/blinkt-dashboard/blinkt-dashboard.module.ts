import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { BlinktCommonModule } from "../blinkt-common/blinkt-common.module";
import { ActionBarComponent } from "./action-bar/action-bar.component";
import { BlinktDashboardRoutingModule } from "./blinkt-dashboard-routing.module";
import { ColorFormComponent } from "./color-form/color-form.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LedListComponent } from "./led-list/led-list.component";

@NgModule({
  declarations: [DashboardComponent, LedListComponent, ColorFormComponent, ActionBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    BlinktDashboardRoutingModule,
    BlinktCommonModule
  ],
  exports: [DashboardComponent]
})
export class BlinktDashboardModule {}
