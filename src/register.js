import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send to the backend
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    try {
      await axios.post(
        "http://localhost/Chatify_backend/api/register.php", // Ensure this path is correct
        formData
      );

      // Show the popup after a successful response
      setShowPopup(true);
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Close the popup
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>

      {/* Popup Modal */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <p>Registration successful!</p>
          <button onClick={handlePopupClose}>OK</button>
        </div>
      )}
    </div>
  );
}

export default Register;
