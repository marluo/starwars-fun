export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_SW_CHARACTERS":
      return [...state, action.payload];
    default:
      return state;
  }
};
