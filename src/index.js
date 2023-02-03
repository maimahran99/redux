import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import reducers from "./store/reducers";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(reducers);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
