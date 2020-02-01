import React from "react";
import { connect } from "react-redux";
import { ColorFormat, ColorFormats } from "../../store/format/types";

type Props = {
  format?: ColorFormat;
  onSelect?: (format: ColorFormat) => void;
};

const FormatSelect: React.FC<Props> = ({ format = "rgb", onSelect = () => void 0 }) => {
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

export default connect()(FormatSelect);
