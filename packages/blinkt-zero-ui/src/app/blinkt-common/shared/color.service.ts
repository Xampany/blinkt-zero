import { Injectable } from "@angular/core";
import { Led } from "./led";

@Injectable({
  providedIn: "root"
})
export class ColorService {
  constructor() {}

  /**
   *
   */
  readColors(): Promise<Led[]> {
    return Promise.resolve([
      {
        index: 0,
        color: "red"
      },
      {
        index: 1,
        color: "green"
      },
      {
        index: 2,
        color: "blue"
      }
    ]);
  }
}
