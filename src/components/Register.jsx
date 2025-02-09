import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    member1: "",
    member2: "",
    member3: "",
    college: "",
    teamName: "",
    teamID: "",
    department: "",
    year: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add further handling logic here if needed (e.g., API call)
  };

  return (
    <div className="register-container">
      {/* <nav className="nav">
        <a href="/">Home</a>
        <a href="/login">Login</a>
      </nav> */}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <h1>Register your team for the CTF</h1>
      <br />
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="member1"
            placeholder="Member-1"
            value={formData.member1}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="member2"
            placeholder="Member-2"
            value={formData.member2}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="member3"
            placeholder="Member-3"
            value={formData.member3}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="college"
            placeholder="College name"
            value={formData.college}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="teamName"
            placeholder="Team Name"
            value={formData.teamName}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="teamID"
            placeholder="Team ID"
            value={formData.teamID}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Department</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="ECE">EEE</option>
            <option value="ECE">AIML</option>
            <option value="ECE">CSD</option>
            <option value="ECE">MECH</option>
            <option value="ECE">MCT</option>
            <option value="ECE">BME</option>
            <option value="ECE">FT</option>

          </select>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Year</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
          </select>
        </div>
        <div className="form-row">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <p>Never accept a Defeat unless Trying it.</p>
        <br />
        <button type="submit" className="start-hacking">
          Start Hacking...
        </button>
      </form>
    </div>
  );
};

export default Register;
