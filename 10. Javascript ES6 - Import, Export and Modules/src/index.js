import React from "react";
import ReactDOM from "react-dom";
import * as Pi from "./math.js";
//import pi, { doublePi, triplePi } from "./math.js";

console.log(Pi);

ReactDOM.render(
  <ul>
    <li>{Pi.default}</li>
    <li>{Pi.doublePi()}</li>
    <li>{Pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
