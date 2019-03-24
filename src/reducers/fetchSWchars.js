import { fetchSWCharacters } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_SW_CHARACTERS":
      return action.payload;
    default:
      return state;
  }
};

//skapa funktion som sätter state till 1 eller till 2. 1 = characters, 2=planets,
//sedan rendera
//for (let i = 0; i < completed.length; i++) {
//  response.data.results[i].homeworld = completed[i];
//

/*          ...state[0][index],
          homeworld: action.payload[index]*/
