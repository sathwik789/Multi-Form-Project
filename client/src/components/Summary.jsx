import React from 'react';

const Summary = ({ formData, back }) => {
  const { personal, contact, education } = formData;

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong while submitting the form.");
    }
  };

  return (
    <div className="form-screen">
      <div className="progress-bar">
        <div className="progress" style={{ width: `100%` }}></div>
      </div>

      <h1 className="form-title">Summary</h1>

      <h3>Personal Details</h3>
      <p><strong>Name:</strong> {personal.name}</p>
      <p><strong>Age:</strong> {personal.age}</p>
      <p><strong>Gender:</strong> {personal.gender}</p>
      <p><strong>Date of Birth:</strong> {personal.dob}</p>

      <h3>Contact Details</h3>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>City:</strong> {contact.city}</p>
      <p><strong>State:</strong> {contact.state}</p>

      <h3>Educational Details</h3>
      <p><strong>Degree:</strong> {education.degree}</p>
      <p><strong>College:</strong> {education.college}</p>
      <p><strong>CGPA:</strong> {education.cgpa}</p>

      <div className="button-group">
        <button onClick={back} className="form-button back-button">Back</button>
        <button onClick={handleSubmit} className="form-button">Submit</button>
      </div>
    </div>
  );
};

export default Summary;
