import { Component } from "@angular/core";
import { Led } from "./blinkt-common/shared/led";

@Component({
  selector: "blinkt-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "BlinktZero";

  led: Led = {
    index: 0,
    color: "red"
  };
}
