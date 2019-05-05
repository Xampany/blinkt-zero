import { Component, OnInit } from "@angular/core";
import { Led } from "../../blinkt-common/shared/led";

@Component({
  selector: "blinkt-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  led: Led = {
    index: 0,
    color: "red"
  };

  constructor() {}

  ngOnInit() {}
}
