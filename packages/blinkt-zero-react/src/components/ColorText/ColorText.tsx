import React, { useState } from "react";
import tinycolor from "tinycolor2";

type Props = {
  /**
   * Die Farbe als valider CSS String
   */
  color: string;
};

type ColorFormat =
  | "rgb"
  | "prgb"
  | "hex"
  | "hex6"
  | "hex3"
  | "hex4"
  | "hex8"
  | "name"
  | "hsl"
  | "hsv";

/**
 * Stellt eine Farbe als Text in einem wählbaren Format dar
 * @param param0
 */
const ColorText: React.FunctionComponent<Props> = ({ color }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [format, setFormat] = useState<ColorFormat>("name");

  const formattedColor = (c: string, f?: ColorFormat) => {
    return tinycolor(c).toString(f);
  };
  return <p>{formattedColor(color, format)}</p>;
};

export default ColorText;
