import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { BlinktCommonModule } from "../blinkt-common/blinkt-common.module";
import { BlinktDetailRoutingModule } from "./blinkt-detail-routing.module";
import { DetailComponent } from "./detail/detail.component";

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, BlinktDetailRoutingModule, BlinktCommonModule]
})
export class BlinktDetailModule {}
