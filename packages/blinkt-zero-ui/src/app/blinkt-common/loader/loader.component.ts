import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";

@Component({
  selector: "blinkt-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe().subscribe();
  }
}
