import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const color = {
  color: "red",
}

root.render(
  <h1 style={color}>Hello World!</h1>
);