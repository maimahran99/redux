const initstate = {
  loged: false
};
const logg = (state = initstate, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        loged: true
      };
    case "logout":
      return {
        ...state,
        loged: false
      };
    default:
      return state;
  }
};
export default logg;
