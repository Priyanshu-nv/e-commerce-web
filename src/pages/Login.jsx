import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form);
    if (success) {
      navigate(from, { replace: true }); // 🔥 go back to cart
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-black text-white w-full py-2">Login</button>
      </form>
      <p className="mt-3 text-sm text-center">
        Don't have an account?{" "}
        <button className="text-blue-500" onClick={() => navigate("/signup")}>
          Signup
        </button>
      </p>
    </>
  );
}

export default Login;
