import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${API_URL}/api/auth/login/`, {
        username,
        password,
      });
  
      const data = response.data;
  
      if (data.success) {
        localStorage.setItem("token", data.token);
        navigate("/admin");
      } else {
        setError(data.message || "Invalid credentials");
        console.log("Error: " + data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Login error:", error);
    }
  };
  
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
    <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Admin Login</h2>
    <form onSubmit={handleLogin} class="space-y-4">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-600 mb-1">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
        />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-600 mb-1">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-200"
      >
        Login
      </button>
    </form>
    {error && <p class="text-red-500 text-sm mt-4 text-center">{error}</p>}
  </div>
</div>

  );
};

export default Login;
