import { combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/entries.reducers";

const store = () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
    })
  );
  return store;
};

export default store;
