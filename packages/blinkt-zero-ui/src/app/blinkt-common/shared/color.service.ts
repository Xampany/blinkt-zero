import { Injectable } from "@angular/core";
import * as tinycolor from "tinycolor2";
import { Led } from "./led";

@Injectable({
  providedIn: "root"
})
export class ColorService {
  // https://tinyurl.com/blinktzero-01
  // https://tinyurl.com/blinktzero-02

  constructor() {}

  /**
   *
   */
  readColors(): Promise<Led[]> {
    return Promise.resolve(
      Array.from(Array(8), (value, index) => {
        return {
          color: tinycolor.random().toString(),
          index
        };
      })
    );
  }
}
