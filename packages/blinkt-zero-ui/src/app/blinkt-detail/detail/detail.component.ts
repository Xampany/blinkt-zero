import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Led } from "../../blinkt-common/shared/led";

@Component({
  selector: "blinkt-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  led: Led;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.led = this.route.snapshot.data.led;
  }

  isDirty(): boolean {
    return true;
  }
}
