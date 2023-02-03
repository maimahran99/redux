import logg from "./loged";
import counter from "./reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: counter,
  logged: logg
});
export default reducers;
