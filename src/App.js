import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import Chatify from "./chatify"; // Correctly imported the Chatify component

function App() {
  return (
    <div>
      <Routes>
        {/* Set Register page as the default starting page */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Corrected route to use the proper component name (Chatify) */}
        <Route path="/chatify" element={<Chatify />} />
      </Routes>
    </div>
  );
}

export default App;
