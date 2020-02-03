import { ColorFormat, SELECT_FORMAT, RESET_FORMAT } from "./types";
import { FormatAction } from "./actions";
import tinycolor from "tinycolor2";

type State = {
  color: string;
  format: ColorFormat;
};

const initialState: State = {
  color: "",
  format: "rgb"
} as const;

export const formatReducer = (
  state = initialState,
  action: FormatAction
): State => {
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
    default:
      return state;
  }
};
