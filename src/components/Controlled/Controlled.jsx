import React, { useState } from "react";
import "./controlled.css";

export default function ControlledComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form>
      <label>
        Input Value:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <p className="controlled__text">Input Value: {inputValue}</p>
    </form>
  );
}
