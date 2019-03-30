export default (state = null, action) => {
  switch (action.type) {
    case "FETCH_SW_SHIPS":
      return action.payload;
    default:
      return state;
  }
};
