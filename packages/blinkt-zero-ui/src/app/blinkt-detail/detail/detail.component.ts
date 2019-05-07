import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ColorService } from "../../blinkt-common/shared/color.service";
import { Led } from "../../blinkt-common/shared/led";

@Component({
  selector: "blinkt-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  led: Led;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly color: ColorService
  ) {}

  ngOnInit() {
    const index = this.route.snapshot.paramMap.get("index");

    this.color.getColorObservable(Number(index)).subscribe({
      next: led => (this.led = led)
    });
  }
}
