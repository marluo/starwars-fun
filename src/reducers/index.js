import { combineReducers } from "redux";
import fetchSwChars from "./fetchSWchars";
import onClick from "./onClick";
import fetchSWplanets from "./fetchSWplanets";
import CharsOrPlanets from "./getCharsOrPlanets";

export default combineReducers({
  SWChars: fetchSwChars,
  number: onClick,
  SWPlanets: fetchSWplanets,
  CharsOrPlanets: CharsOrPlanets
});
