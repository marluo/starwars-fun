export default (state = 1337, action) => {
  switch (action.type) {
    case "CHARS_OR_PLANETS":
      return action.payload;
    default:
      return state;
  }
};
