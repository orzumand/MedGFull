import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import DarkMode from "./Context/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkMode>
        <Root />
      </DarkMode>
    </BrowserRouter>
  </React.StrictMode>
);
