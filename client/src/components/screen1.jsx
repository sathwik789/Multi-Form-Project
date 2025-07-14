import React, { useState, useEffect } from "react";

const Screen1 = ({ next, formData, setFormData }) => {
  const [personal, setPersonal] = useState({
    name: formData.personal?.name || "",
    age: formData.personal?.age || "",
    gender: formData.personal?.gender || "",
    dob: formData.personal?.dob || "",
  });

  const handleChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    const values = Object.values(personal);
    const isEmpty = values.some((value) => value.trim() === "");
    if (isEmpty) {
      alert("Please fill all fields before proceeding.");
    } else {
      setFormData({ ...formData, personal });
      next();
    }
  };

  return (
    <div className="form-screen">
      <div className="progress-bar">
        <div style={{ width: "33.3%" }} className="progress-step"></div>
      </div>
      <h1 className="form-title">Personal Details</h1>
      <p style={{ textAlign: "left", paddingLeft: "32px" }}>Full Name</p>
      <input
        type="text"
        name="name"
        placeholder="Enter Full Name"
        value={personal.name}
        onChange={handleChange}
        className="form-input"
      /><br />

      <p style={{ textAlign: "left", paddingLeft: "32px" }}>Age</p>
      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={personal.age}
        onChange={handleChange}
        className="form-input"
      /><br />

      <p style={{ textAlign: "left", paddingLeft: "32px" }}>Gender</p>
      <select
        name="gender"
        value={personal.gender}
        onChange={handleChange}
        className="form-input"
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select><br />

      <p style={{ textAlign: "left", paddingLeft: "32px" }}>Date of Birth</p>
      <input
        type="date"
        name="dob"
        value={personal.dob}
        onChange={handleChange}
        className="form-input"
      /><br />

      <button onClick={handleNext} className="form-button">Next</button>
    </div>
  );
};

export default Screen1;