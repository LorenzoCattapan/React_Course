//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let headingColor = {
  color: "red",
};

let time = new Date().getHours();
let message = "";

if (time < 12) {
  message = "Good Morning";
  headingColor.color = "red";
} else if (time < 18) {
  message = "Good Afternoon";
  headingColor.color = "green";
} else {
  message = "Good Evening";
  headingColor.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={headingColor}>
    {message}
  </h1>,
  document.getElementById("root")
);
