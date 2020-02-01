import React, { useReducer } from "react";
import tinycolor from "tinycolor2";
import { FormatAction } from "../../store/format/actions";
import { ColorFormat, RESET_FORMAT, SELECT_FORMAT } from "../../store/format/types";
import FormatSelect from "../FormatSelect/FormatSelect";

type Props = {
  /**
   * Die Farbe als valider CSS String
   */
  color: string;
};

type State = {
  color: string;
  format: ColorFormat;
};

/**
 * Stellt eine Farbe als Text in einem wählbaren Format dar
 * @param param0
 */
const ColorText: React.FunctionComponent<Props> = ({ color }) => {
  const initialState: State = {
    color,
    format: "rgb"
  } as const;

  const [state, dispatch] = useReducer((state: State, action: FormatAction): State => {
    switch (action.type) {
      case SELECT_FORMAT:
        const format = action.payload as ColorFormat;
        const next: State = {
          color: tinycolor(state.color).toString(format),
          format
        };
        return next;
      case RESET_FORMAT:
        return {
          ...initialState
        };
    }
  }, initialState);

  const isDisabled = () => state.format === initialState.format;

  return (
    <>
      <p className="is-size-7">{state.color}</p>
      <form>
        <FormatSelect
          format={state.format}
          onSelect={payload =>
            dispatch({
              type: SELECT_FORMAT,
              payload
            })
          }
        />
        <div className="field">
          <div className="control">
            <button
              className="button is-link is-light"
              type="button"
              disabled={isDisabled()}
              onClick={() => dispatch({ type: RESET_FORMAT })}
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
