export default (state = [], action) => {
  console.log("lol");
  switch (action.type) {
    case "FETCH_SW_PLANETS":
      return [...state, action.payload];
    default:
      return state;
  }
};
