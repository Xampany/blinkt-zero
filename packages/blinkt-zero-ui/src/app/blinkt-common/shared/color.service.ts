import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as tinycolor from "tinycolor2";
import { Color, Led } from "./led";

// https://tinyurl.com/blinktzero-01
// https://tinyurl.com/blinktzero-02
export const enum PiUrl {
  URL_1 = "https://ae680a0551cf8bd14b83c131e0796b82.balena-devices.com/api",
  URL_2 = "https://e058e2af50c2bd0a8119d48dffc38266.balena-devices.com/api"
}

@Injectable()
export class ColorService {
  /**
   *
   */
  constructor(private readonly client: HttpClient) {}

  /**
   *
   */
  isValidIndex(index: any): Promise<boolean> {
    return Promise.resolve(
      Number.isNaN(index) ? false : index >= 0 && index <= 7
    );
  }

  /**
   *
   */
  readColor$(index: number): Observable<any> {
    const o = this.client.get(`${PiUrl.URL_1}/colors/${index}`, {
      responseType: "text"
    });

    return o.pipe(map(color => ({ index, color })));
  }

  /**
   *
   */
  updateColor$(
    index: number,
    color = tinycolor.random().toString()
  ): Observable<Led> {
    const body = { color };
    const o = this.client.put(`${PiUrl.URL_1}/colors/${index}`, body, {
      responseType: "text"
    });

    // tslint:disable-next-line: no-shadowed-variable
    return o.pipe(map(color => ({ index, color })));
  }

  /**
   *
   */
  readColors$(): Observable<Led[]> {
    const o = this.client.get<string[]>(`${PiUrl.URL_1}/colors`);

    return o.pipe(map(colors => this.convertColors(colors)));
  }

  /**
   *
   */
  updateColors$(body: Color): Observable<Led[]> {
    const o = this.client.put<string[]>(`${PiUrl.URL_1}/colors`, body);

    return o.pipe(map(colors => this.convertColors(colors)));
  }

  /**
   *
   */
  readColorsPromise(): Promise<Led[]> {
    return fetch(
      "https://ae680a0551cf8bd14b83c131e0796b82.balena-devices.com/api/colors"
    )
      .then(response => response.json())
      .then(colors => this.convertColors(colors));
  }

  /**
   *
   */
  private convertColors(colors: string[]): Led[] {
    return colors.map((color, index) => {
      return {
        color,
        index
      };
    });
  }
}
