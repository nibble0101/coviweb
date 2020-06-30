import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./store";

//For all components to access data
const Wrapper = (props) => (
  <ContextProvider>
    <App />
  </ContextProvider>
);
const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
  root
);
