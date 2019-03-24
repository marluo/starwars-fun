import { combineReducers } from "redux";

export default (SWChars, action) => {
  switch (action.type) {
    case "CHARS_HOMEWORLDX":
      return [...SWChars, action.payload];
    default:
      return "1";
  }
};
