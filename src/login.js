import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to manage the popup visibility
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send to the backend
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);

    try {
      // Sending POST request to the backend
      await axios.post("http://localhost/Chatify_backend/api/login.php", formData);

      // Show the popup message
      setShowPopup(true);
    } catch (error) {
      // Handle network or axios-related errors
      console.error("Error:", error);
    }
  };

  // Function to handle the OK button in the popup
  const handlePopupClose = () => {
    setShowPopup(false);
    navigate("/chatify"); // Navigate to chatify.js page
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>

      {/* Popup Message */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Login successful!</p>
            <button onClick={handlePopupClose}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
