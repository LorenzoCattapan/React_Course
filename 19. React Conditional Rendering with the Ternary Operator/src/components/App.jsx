import React from "react";
import Login from "./Login.jsx";

//Normal conditional Rendering with ternary operator
let isLoggedIn = false;

//Null conditional Rendering with ternary operator
const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello User</h1> : <div><h1>Hello</h1><Login /></div>}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;