import { createStore, combineReducers } from "redux";
import { formatReducer } from "./format/reducers";

const rootReducer = combineReducers({
    format: formatReducer
});

export default function configureStore() {
  const store = createStore(rootReducer);

  return store;
}
