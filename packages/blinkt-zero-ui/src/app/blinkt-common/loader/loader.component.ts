import { Component, OnInit } from "@angular/core";
import { Event, Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "blinkt-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
  /**
   * Der Strom der Router Events
   */
  events$: Observable<Event>;

  /**
   * @param router Der Router
   */
  constructor(private router: Router) {}

  /**
   * Initiales Setup, um auf Events des Routers zu hören
   */
  ngOnInit() {
    this.events$ = this.router.events;
  }
}
