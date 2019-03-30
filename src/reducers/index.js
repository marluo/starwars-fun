import { combineReducers } from "redux";
import fetchSwChars from "./fetchSWchars";
import onClick from "./onClick";
import fetchSWplanets from "./fetchSWplanets";
import CharsOrPlanets from "./getCharsOrPlanets";
import fetchChecker from "./fetchChecker.js";
import fetchSWships from "./fetchSWships";
import searchfilter from "./searchfilter";

export default combineReducers({
  SWChars: fetchSwChars,
  number: onClick,
  SWPlanets: fetchSWplanets,
  CharsOrPlanets: CharsOrPlanets,
  fetchChecker: fetchChecker,
  SWShips: fetchSWships,
  searchfilter: searchfilter
});
