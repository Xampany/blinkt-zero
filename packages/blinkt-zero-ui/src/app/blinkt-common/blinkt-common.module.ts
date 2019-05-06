import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { LedComponent } from "./led/led.component";

@NgModule({
  declarations: [LedComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [LedComponent]
})
export class BlinktCommonModule {}
