import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlinktDashboardModule } from "./blinkt-dashboard/blinkt-dashboard.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BlinktDashboardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
