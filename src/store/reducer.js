const initstate = {
  count: 1
};

const counter = (state = initstate, action) => {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        count: state.count + action.payload
      };
    case "dec":
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      return state;
  }
};

export default counter;
