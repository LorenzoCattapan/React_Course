import React from "react";
import ReactDOM from "react-dom";

//Define a style object for inline styling of a React component >> attribute (kebab case to camel case), value (as a string)
let customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
