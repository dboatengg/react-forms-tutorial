import React, { useState } from "react";
import "./style.css";

function Checkbox() {
  const [selectedColor, setSelectedColor] = useState({
    blue: false,
    red: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setSelectedColor((prevState) => ({ ...prevState, [name]: checked }));
  };

  return (
    <form>
      <label className="checkbox__text" htmlFor="blue">
        <input
          type="checkbox"
          name="blue"
          checked={selectedColor.blue}
          onChange={handleChange}
        />
        Blue
      </label>

      <label className="checkbox__text" htmlFor="red">
        <input
          type="checkbox"
          name="red"
          checked={selectedColor.red}
          onChange={handleChange}
        />
        Red
      </label>

      <p>Selected color(s):</p>
      {Object.keys(selectedColor)
        .filter((key) => selectedColor[key])
        .map((key) => (
          <div key={key}>{key}</div>
        ))}
    </form>
  );
}

export default Checkbox;
