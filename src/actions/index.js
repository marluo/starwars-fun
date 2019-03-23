import starwars from "../apis/starwars";

export const fetchSWCharacters = getState => async dispatch => {
  const response = await starwars.get("/people/?format=json");
  const response2 = await starwars.get("people/?page=2&format=json");
  console.log(
    "kesdfsfdsfdsfdfsdfsdsdfsfdsfdfsdsfdsfdsfdsdfsdfsdfsdfk",
    response.data.results[1].homeworld
  );
  dispatch({ type: "FETCH_SW_CHARACTERS", payload: response.data.results });
  dispatch({ type: "FETCH_SW_CHARACTERS", payload: response2.data.results });
};

export const fetchSWPlanets = getState => async dispatch => {
  const response = await starwars.get("/planets/?format=json");
  const response2 = await starwars.get("planets/?page=2&format=json");
  dispatch({ type: "FETCH_SW_PLANETS", payload: response.data.results });
  dispatch({ type: "FETCH_SW_PLANETS", payload: response2.data.results });
};

//FETCH SW SHIPS

export const onClickMenu = number => {
  return {
    type: "CLICKED_MENU",
    payload: number
  };
};

export const CharsOrPlanets = renderState => {
  return {
    type: "CHARS_OR_PLANETS",
    payload: renderState
  };
};
