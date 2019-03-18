export default (state = [], action) => {
  switch (action.type) {
    case "CLICKED_MENU":
      return action.payload;
    default:
      return state;
  }
};
