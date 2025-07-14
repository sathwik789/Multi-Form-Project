import React, { useState, useEffect } from "react";

const Screen2 = ({ next, back, formData, setFormData, progress }) => {
  const [contact, setContact] = useState({
    email: formData.contact?.email || "",
    phone: formData.contact?.phone || "",
    city: formData.contact?.city || "",
    state: formData.contact?.state || "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    const values = Object.values(contact);
    const isEmpty = values.some((value) => value.trim() === "");
    if (isEmpty) {
      alert("Please fill all fields before proceeding.");
    } else {
      setFormData({ ...formData, contact });
      next();
    }
  };

  return (
    <div className="form-screen">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <h1 className="form-title">Contact Details</h1>

      <p style={{ textAlign: "left", paddingLeft: "32px" }}>Email</p>
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        value={contact.email}
        onChange={handleChange}
        className="form-input"
      /><br />

      <p style={{ textAlign: "left", paddingLeft: "32px" }}>Phone</p>
      <input
        type="tel"
        name="phone"
        placeholder="Enter Your Phone Number"
        value={contact.phone}
        onChange={handleChange}
        className="form-input"
      /><br />

      <p style={{ textAlign: "left", paddingLeft: "32px" }}>City</p>
      <input
        type="text"
        name="city"
        placeholder="Enter Your City"
        value={contact.city}
        onChange={handleChange}
        className="form-input"
      /><br />

      <p style={{ textAlign: "left", paddingLeft: "32px" }}>State</p>
      <input
        type="text"
        name="state"
        placeholder="Enter Your State"
        value={contact.state}
        onChange={handleChange}
        className="form-input"
      /><br />

      <div className="button-group">
        <button onClick={back} className="form-button back-button">Back</button>
        <button onClick={handleNext} className="form-button">Next</button>
      </div>
    </div>
  );
};

export default Screen2;