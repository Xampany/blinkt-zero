import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as tinycolor from "tinycolor2";
import { Color, Led } from "./led";

@Injectable()
export class ColorService {
  /**
   *
   */
  constructor(
    private readonly client: HttpClient,
    @Inject("PiUrl") private readonly url: string
  ) {}

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
    const o = this.client.get(`${this.url}/colors/${index}`, {
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
    const o = this.client.put(`${this.url}/colors/${index}`, body, {
      responseType: "text"
    });

    // tslint:disable-next-line: no-shadowed-variable
    return o.pipe(map(color => ({ index, color })));
  }

  /**
   *
   */
  readColors$(): Observable<Led[]> {
    const o = this.client.get<string[]>(`${this.url}/colors`);

    return o.pipe(map(colors => this.convertColors(colors)));
  }

  /**
   *
   */
  updateColors$(body: Color): Observable<Led[]> {
    const o = this.client.put<string[]>(`${this.url}/colors`, body);

    return o.pipe(map(colors => this.convertColors(colors)));
  }

  /**
   *
   */
  async readColors(): Promise<Led[]> {
    const response = await fetch(`${this.url}/colors`);
    const colors = await response.json();
    return this.convertColors(colors);
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
