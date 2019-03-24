import starwars from "../apis/starwars";

export const fetchSWCharacters = getState => async dispatch => {
  const response = await starwars.get("/people/?format=json");
  const response2 = await starwars.get("/people/?page=2&format=json");
  dispatch({
    type: "FETCH_SW_CHARACTERS",
    payload: response.data.results
  });
  dispatch({
    type: "FETCH_SW_CHARACTERS",
    payload: response2.data.results
  });
  let homeWorldsResponseOne = response.data.results.map(guys => {
    return guys.homeworld;
  });
  const test = homeWorldsResponseOne.map(async link => {
    const substringed = link.substring(20);
    console.log("SHOW ME BITCH", substringed);
    const homeplanets = await starwars.get(`${substringed}?format=json`);
    return homeplanets;
  });

  Promise.all(test).then(completed => {
    const sup = completed.map(name => {
      console.log(name);
      return name.data.name;
    });
    goFunction(sup);
  });

  const goFunction = async completed => {
    console.log("jumping in here lol");
    await dispatch({
      type: "CHARS_HOMEWORLD",
      payload: completed
    });
    await dispatch({
      type: "FETCH_COMPLETED",
      payload: true
    });
  };
};

export const fetchSWPlanets = getState => async dispatch => {
  const response = await starwars.get("/planets/?format=json");
  dispatch({ type: "FETCH_SW_PLANETS", payload: response.data.results });
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
