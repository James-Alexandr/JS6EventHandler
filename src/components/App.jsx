import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [nameClick, setNameClick] = useState("");

  function onChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }
  function onClick() {
    setNameClick(name);
  }

  return (
    <div className="container">
      <h1>Hello {nameClick}</h1>
      <input onChange={onChange} type="text" placeholder="What's your name?" />
      <button onClick={onClick}>Submit</button>
    </div>
  );
}

export default App;
