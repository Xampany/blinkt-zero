export const SELECT_FORMAT = "SELECT_FORMAT";
export const RESET_FORMAT = "RESET_FORMAT";

/**
 * Die Liste möglicher Farbformate
 */
export enum ColorFormats {
    "rgb",
    "prgb",
    "hex",
    "hex6",
    "hex3",
    "hex4",
    "hex8",
    "name",
    "hsl",
    "hsv"
  }
  
  /**
   * Das erlaubte Farbformat
   */
  export type ColorFormat = keyof typeof ColorFormats;
