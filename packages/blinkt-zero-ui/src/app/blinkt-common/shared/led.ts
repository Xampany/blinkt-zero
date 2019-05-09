/**
 * Eine einzelne Led
 */
export interface Led {
  /**
   * Der 0-basierte Index
   */
  index: number;
  /**
   * Die Farben
   */
  color: string;
}

/**
 * Ein Farb-Objekt
 */
export type Color = Pick<Led, "color">;
