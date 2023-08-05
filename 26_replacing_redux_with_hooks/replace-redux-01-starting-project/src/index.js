import React from "react";
import ReactDOM from "react-dom";
// import ProductsProvider from "./context/products-context";
import { BrowserRouter } from "react-router-dom";
import ConfigureProductsStore from "./hooks-store/products-store";

import "./index.css";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
ConfigureProductsStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
