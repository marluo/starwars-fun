import starwars from "../apis/starwars";

export const fetchSWCharacters = getState => async dispatch => {
  const responsefromAPI = await starwars.get("/people/?format=json");
  const response = responsefromAPI.data.results;
  const hej = response.map(async (guy, index) => {
    console.log("lalalalalalalala", guy);
    const homeworld = guy.homeworld.substring(20);
    const species = guy.species[0].substring(20);
    const responseHomeworld = await starwars.get(`${homeworld}?format=json`);
    const responseSpecies = await starwars.get(`${species}?format=json`);
    return {
      name: guy.name,
      height: guy.height,
      weight: guy.weight,
      birthyear: guy.birth_year,
      gender: guy.gender,
      homeworld: responseHomeworld.data.name,
      species: responseSpecies.data.name,
      language: responseSpecies.data.language
    };
  });

  Promise.all(hej).then(async hejsan => {
    console.log("kek", hejsan);
    await dispatch({
      type: "FETCH_SW_CHARACTERS",
      payload: hejsan
    });
    await dispatch({
      type: "FETCH_COMPLETED",
      payload: true
    });
  });

  console.log("dispatching fetch_compelte");
};

export const fetchSWPlanets = getState => async dispatch => {
  const responseFromApi = await starwars.get("/planets/?format=json");
  const response = responseFromApi.data.results;
  const yo = response.map(async planet => {
    console.log("kek", planet.name);
    const planetResidents = await fetto(planet.residents);
    return {
      planetname: planet.name,
      gravity: planet.gravity,
      population: planet.population,
      residents: planetResidents.join(", "),
      climate: planet.climate
    };
  });
  Promise.all(yo).then(async hejsan => {
    console.log(hejsan);
    await dispatch({
      type: "FETCH_SW_PLANETS",
      payload: hejsan
    });
  });
};

const fetto = async residents => {
  const hej = residents.map(async residents => {
    console.log("JULLE", residents);
    const resident = await starwars.get(residents.substring(20));
    return resident.data.name;
  });
  return await Promise.all(hej);
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
