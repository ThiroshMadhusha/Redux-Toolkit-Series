import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

import { fetchUsers } from "./features/users/usersSlice";

store.dispatch(fetchUsers());

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
