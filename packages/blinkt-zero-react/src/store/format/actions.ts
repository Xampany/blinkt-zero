import { ColorFormat, SELECT_FORMAT, RESET_FORMAT } from "./types";

type SelectAction = {
  type: typeof SELECT_FORMAT;
  payload: ColorFormat;
};

type ResetAction = {
  type: typeof RESET_FORMAT;
};

export type FormatAction = SelectAction | ResetAction;

export function selectFormat(format: ColorFormat): SelectAction {
  return {
    type: SELECT_FORMAT,
    payload: format
  };
}

export function resetFormat(): ResetAction {
  return {
    type: RESET_FORMAT
  };
}
