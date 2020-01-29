import React, { useReducer } from "react";
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

type State = {
  color: string;
  format: ColorFormat;
};

type Action = {
  type: "select" | "reset";
  payload?: ColorFormat;
};

/**
 * Stellt eine Farbe als Text in einem wählbaren Format dar
 * @param param0
 */
const ColorText: React.FunctionComponent<Props> = ({ color }) => {
  const initialState: State = {
    color,
    format: "rgb"
  };

  const [state, dispatch] = useReducer((state: State, action: Action) => {
    switch (action.type) {
      case "select":
        const format = action.payload as ColorFormat;
        const next: State = {
          color: tinycolor(state.color).toString(format),
          format
        };
        return next;
      case "reset":
        return {
          ...initialState
        };
      default:
        throw new Error("Oops");
    }
  }, initialState);

  return (
    <>
      <p className="is-size-7">{state.color}</p>
      <form>
        <div className="field">
          <div className="control">
            <div className="select">
              <select
                value={state.format}
                onChange={ev =>
                  dispatch({
                    type: "select",
                    payload: ev.target.value as ColorFormat
                  })
                }
              >
                {["rgb", "hex6", "name"].map(value => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              className="button is-link is-light"
              type="button"
              disabled={state.format === initialState.format}
              onClick={() => dispatch({ type: "reset" })}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ColorText;
