import React from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.registered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      {props.registered ? <Button text="Login" /> : <Button text="Register" />}
    </form>
  );
}

export default Form;
