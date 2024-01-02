import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import entriesReducer from "../reducers/entries.reducers";
import modalsReducer from "../reducers/modals.reducers";

const store = () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    composeWithDevTools()
  );
  return store;
};

export default store;
