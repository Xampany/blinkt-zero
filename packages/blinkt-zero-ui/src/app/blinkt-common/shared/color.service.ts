import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Led } from "./led";

@Injectable({
  providedIn: "root"
})
export class ColorService {
  // https://tinyurl.com/blinktzero-01
  // https://tinyurl.com/blinktzero-02

  private readonly URL_1 =
    "https://ae680a0551cf8bd14b83c131e0796b82.balena-devices.com/api/colors";

  constructor(private readonly client: HttpClient) {}

  getColorObservable(index: number): Observable<any> {
    const o = this.client.get(`${this.URL_1}/${index}`, {
      responseType: "text"
    });

    return o.pipe(map(color => ({ index, color })));
  }

  updateColorsObservable(body: Pick<Led, "color">): Observable<Led[]> {
    const o = this.client.put<string[]>(this.URL_1, body);

    return o.pipe(
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
  readColorsObservable(): Observable<Led[]> {
    const o = this.client.get<string[]>(this.URL_1);

    return o.pipe(
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
