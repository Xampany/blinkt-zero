import React, { useReducer } from "react";
import tinycolor from "tinycolor2";
import FormatSelect, { ColorFormat } from "../FormatSelect/FormatSelect";

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

type SelectAction = {
  type: "select";
  payload: ColorFormat;
};

type ResetAction = {
  type: "reset";
};

type Action = SelectAction | ResetAction;

/**
 * Stellt eine Farbe als Text in einem wählbaren Format dar
 * @param param0
 */
const ColorText: React.FunctionComponent<Props> = ({ color }) => {
  const initialState: State = {
    color,
    format: "rgb"
  } as const;

  const [state, dispatch] = useReducer((state: State, action: Action): State => {
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
              type: "select",
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
