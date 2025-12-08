import React, { useState } from "react";

 function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateFirstName = (firstName) => {
    return firstName.length === 0
      ? ""
      : firstName.length < 3
      ? "First name must be at least 3 characters"
      : "";
  };

  const validateLastName = (lastName) => {
    return lastName.length === 0
      ? ""
      : lastName.length < 3
      ? "Last name must be at least 3 characters"
      : "";
  };

  const validateEmail = (email) => {
    return email.length === 0
      ? ""
      : email.length < 5
      ? "Email must be at least 5 characters"
      : "";
  };

  const validatePassword = (password) => {
    return password.length === 0
      ? ""
      : password.length < 8
      ? "Password must be at least 8 characters"
      : "";
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    return confirmPassword.length === 0
      ? ""
      : confirmPassword !== password
      ? "Passwords must match"
      : "";
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <h2>Registration Form</h2>

      {/* FIRST NAME */}
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {validateFirstName(firstName) && (
          <p style={{ color: "red" }}>{validateFirstName(firstName)}</p>
        )}
      </div>

      {/* LAST NAME */}
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {validateLastName(lastName) && (
          <p style={{ color: "red" }}>{validateLastName(lastName)}</p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {validateEmail(email) && (
          <p style={{ color: "red" }}>{validateEmail(email)}</p>
        )}
      </div>

      {/* PASSWORD */}
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {validatePassword(password) && (
          <p style={{ color: "red" }}>{validatePassword(password)}</p>
        )}
      </div>

      {/* CONFIRM PASSWORD */}
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {validateConfirmPassword(password, confirmPassword) && (
          <p style={{ color: "red" }}>
            {validateConfirmPassword(password, confirmPassword)}
          </p>
        )}
      </div>
    </div>
  );
}
export default Form;
