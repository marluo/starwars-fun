import { combineReducers } from "redux";
import fetchSwChars from "./fetchSWchars";
import onClick from "./onClick";
import fetchSWplanets from "./fetchSWplanets";

export default combineReducers({
  SWChars: fetchSwChars,
  number: onClick,
  SWPlanets: fetchSWplanets
});
