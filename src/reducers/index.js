import { combineReducers } from "redux";
import fetchSwChars from "./fetchSWchars";
import onClick from "./onClick";
import fetchSWplanets from "./fetchSWplanets";
import CharsOrPlanets from "./getCharsOrPlanets";
import homeworld from "./homeworld";
import fetchChecker from "./fetchChecker.js";

export default combineReducers({
  SWChars: fetchSwChars,
  number: onClick,
  SWPlanets: fetchSWplanets,
  CharsOrPlanets: CharsOrPlanets,
  homeworld: homeworld,
  fetchChecker: fetchChecker
});
