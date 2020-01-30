import React from "react";

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

type Props = {
  format: ColorFormat;
  onSelect: (format: ColorFormat) => void;
};

const FormatSelect: React.FC<Props> = ({ format, onSelect }) => {
  /**
   * Alle Werte des ```enum```, die nicht numerisch sind
   */
  const options = Object.keys(ColorFormats).filter(k =>
    Number.isNaN(parseInt(k))
  );

  return (
    <>
      <div className="field">
        <div className="control">
          <div className="select">
            <select
              value={format}
              onChange={ev => onSelect(ev.target.value as ColorFormat)}
            >
              {options.map(o => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormatSelect;
