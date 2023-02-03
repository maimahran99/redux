import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament, login, logout } from "./store/action";
export default function App() {
  const count = useSelector((state) => state.counter.count);
  const isloged = useSelector((state) => state.logged.loged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {isloged ? (
        <button onClick={() => dispatch(logout())}> logout </button>
      ) : (
        <button onClick={() => dispatch(login())}> login </button>
      )}
      <h1>{count}</h1>
      <button onClick={() => dispatch(increament())}> increase </button>
      <button onClick={() => dispatch(increament(3))}> increase 3 </button>
      <button onClick={() => dispatch(decreament())}> decrease </button>
    </div>
  );
}
