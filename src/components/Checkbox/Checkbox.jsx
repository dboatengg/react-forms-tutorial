// import React, { useState } from "react";

// export default function Checkbox() {
//   const [selectedColor, setSelectedColor] = useState("");

//   const handleCheckboxChange = (event) => {
//     const color = event.target.checked ? "red" : "";
//     setSelectedColor(color);
//   };

//   return (
//     <form>
//       <label>
//         <input
//           type="checkbox"
//           checked={selectedColor === "red"}
//           onChange={handleCheckboxChange}
//         />
//         Red
//       </label>
//       <div>Selected color: {selectedColor}</div>
//     </form>
//   );
// }

import React, { useState } from "react";

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
    <div>
      <label htmlFor="blue">
        <input
          type="checkbox"
          name="blue"
          checked={selectedColor.blue}
          onChange={handleChange}
        />
        Blue
      </label>
      <br />
      <label htmlFor="red">
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
    </div>
  );
}

export default Checkbox;
