import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlinktCommonModule } from "./blinkt-common/blinkt-common.module";
import { BlinktDashboardModule } from "./blinkt-dashboard/blinkt-dashboard.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlinktDashboardModule,
    BlinktCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
