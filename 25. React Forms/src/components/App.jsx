import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleChange(event){
    setName(event.target.value);
  }

  function handleSubmit(event){
    setHeadingText(name);
    event.preventDefault();//TO PREVENT REFRESH OF THE PAGE AFTER SUBMISSION
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="What's your name?"
          onChange={handleChange} 
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;