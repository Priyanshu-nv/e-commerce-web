import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(form);
    navigate("/");
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
        <button className="bg-black text-white w-full py-2">Signup</button>
      </form>
      <p className="mt-3 text-sm text-center">
        Already have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </>
  );
}

export default Signup;
