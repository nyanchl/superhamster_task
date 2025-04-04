import React from "react";
import ReactDOM from "react-dom/client";
import { Buttons } from "./buttons";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Buttons />
  </React.StrictMode>
);
