const increament = (num) => {
  return {
    type: "inc",
    payload: num ? num : 1
  };
};

const decreament = (num) => {
  return {
    type: "dec",
    payload: num ? num : 1
  };
};
const login = () => {
  return {
    type: "login"
  };
};
const logout = () => {
  return {
    type: "logout"
  };
};

export { increament, decreament, login, logout };
