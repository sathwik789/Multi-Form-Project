import React, { useState, useEffect } from "react";

const Screen3 = ({ next, back, formData, setFormData, progress }) => {
  const [education, setEducation] = useState({
    degree: formData.education?.degree || "",
    college: formData.education?.college || "",
    cgpa: formData.education?.cgpa || "",
  });

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    const values = Object.values(education);
    const isEmpty = values.some((value) => value.trim() === "");
    if (isEmpty) {
      alert("Please fill all fields before proceeding.");
    } else {
      setFormData({ ...formData, education });
      next();
    }
  };

  return (
    <div className="form-screen">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <h1 className="form-title">Educational Details</h1>

      <p style={{ textAlign: "left", paddingLeft: "32px" }}>Degree</p>
      <input
        type="text"
        name="degree"
        placeholder="Enter Your Degree"
        value={education.degree}
        onChange={handleChange}
        className="form-input"
      /><br />

      <p style={{ textAlign: "left", paddingLeft: "32px" }}>College</p>
      <input
        type="text"
        name="college"
        placeholder="Enter Your College"
        value={education.college}
        onChange={handleChange}
        className="form-input"
      /><br />

      <p style={{ textAlign: "left", paddingLeft: "32px" }}>CGPA</p>
      <input
        type="text"
        name="cgpa"
        placeholder="Enter Your CGPA"
        value={education.cgpa}
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

export default Screen3;
