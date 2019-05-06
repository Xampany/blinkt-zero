import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import * as tinycolor from "tinycolor2";
import { Led } from "./led";

@Injectable({
  providedIn: "root"
})
export class ColorService {
  // https://tinyurl.com/blinktzero-01
  // https://tinyurl.com/blinktzero-02

  constructor(private readonly client: HttpClient) {}

  /**
   *
   */
  readColorsObservable(): Observable<Led[]> {
    const o = this.client.get<string[]>(
      "https://ae680a0551cf8bd14b83c131e0796b82.balena-devices.com/api/colors"
    );

    return o.pipe(
      tap(res => console.log(res)),
      map(colors => {
        return colors.map((color, index) => {
          return {
            color,
            index
          };
        });
      })
    );
  }

  /**
   *
   */
  readColorsPromise(): Promise<Led[]> {
    return fetch(
      "https://ae680a0551cf8bd14b83c131e0796b82.balena-devices.com/api/colors"
    )
      .then(response => response.json())
      .then(colors => {
        return colors.map((color, index) => {
          return {
            color,
            index
          };
        });
      });
  }
}
