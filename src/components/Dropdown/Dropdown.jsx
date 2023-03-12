import React, { useState } from "react";
import "./dropdown.css";

export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form>
      <label>
        Select an option:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <p className="dropdown__selected">Selected option: {selectedOption}</p>
    </form>
  );
}
