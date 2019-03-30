import starwars from "../apis/starwars";

/*FETCHING CHARACTERS */

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
      other: {
        height: guy.height,
        weight: guy.mass,
        birthyear: guy.birth_year,
        gender: guy.gender,
        homeworld: responseHomeworld.data.name,
        species: responseSpecies.data.name,
        language: responseSpecies.data.language
      }
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
};

//*FETCHING PLANETS *//

export const fetchSWPlanets = getState => async dispatch => {
  const responseFromApi = await starwars.get("/planets/?format=json");
  const response = responseFromApi.data.results;
  const yo = response.map(async planet => {
    const planetResidents = await fetto(planet.residents);
    return {
      name: planet.name,
      other: {
        residents: planetResidents.join(", "),
        climate: planet.climate,
        population: planet.population,
        gravity: planet.gravity,
        terrain: planet.terrain
      }
    };
  });
  Promise.all(yo).then(async hejsan => {
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

export const fetchSWShips = getState => async dispatch => {
  const responseFromApi = await starwars.get(
    "https://swapi.co/api/starships?format=json"
  );
  const shipsResponse = responseFromApi.data.results;
  const allShips = shipsResponse.map(async ship => {
    const pilotsPerShip = await fetchPilotNames(ship.pilots);
    return {
      name: ship.name,
      other: {
        model: ship.model,
        manufacturer: ship.manufacturer,
        passengers: ship.passengers,
        max_atmosphering_speed: ship.max_atmosphering_speed,
        hyperdrive_rating: ship.hyperdrive_rating,
        pilots: pilotsPerShip
      }
    };
  });
  Promise.all(allShips).then(async allShips => {
    await dispatch({
      type: "FETCH_SW_SHIPS",
      payload: allShips
    });
  });
};

const fetchPilotNames = async pilotsPerShip => {
  const pilotsMap = pilotsPerShip.map(async pilot => {
    const pilotNames = await starwars.get(pilot.substring(20));
    return pilotNames.data.name;
  });
  return await Promise.all(pilotsMap);
};

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

export const searchfilter = value => {
  return {
    type: "SEARCH_FIELD",
    payload: value
  };
};
