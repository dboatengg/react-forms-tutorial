import React, { useState } from "react";
import "./multiple.css";

export default function Multiple() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      <label className="multiple__text" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="multiple__input"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="email">
        Email:
      </label>
      <input
        type="email"
        id="email"
        className="multiple__input"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="message">
        Message:
      </label>
      <textarea
        id="message"
        className="multiple__textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <button className="multiple__button" type="submit">
        Submit
      </button>
    </form>
  );
}
