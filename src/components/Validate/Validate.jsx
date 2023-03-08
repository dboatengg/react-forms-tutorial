import { useState } from "react";

export default function Validate() {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(null);

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);

    if (value.length < 5) {
      setInputError("Input must be at least 5 characters");
    } else {
      setInputError(null);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.length >= 5) {
    } else {
      setInputError("Input must be at least 5 characters");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Fruit:</p>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      {inputError && <div style={{ color: "red" }}>{inputError}</div>}
      <button type="submit">Submit</button>
    </form>
  );
}
