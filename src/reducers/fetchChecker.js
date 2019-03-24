export default (state = false, action) => {
  switch (action.type) {
    case "FETCH_COMPLETED":
      return action.payload;
    default:
      return state;
  }
};
