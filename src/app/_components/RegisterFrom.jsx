"use client";
import React from "react";
import { registerUser } from "@/app/actions/auth/registerUser";
const RegisterFrom = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.userName.value;
    const password = form.password.value;
    const payload = { username, password };
    const result = await registerUser(payload);
    console.log(result);
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <label htmlFor="userName">UserName</label>
        <input
          type="text"
          placeholder="user name"
          id="userName"
          name="userName"
          className="block border p-1 rounded-sm"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          className="block border p-1 rounded-sm"
        />
        <button
          type="submit"
          className="mt-2  p-1 bg-blue-500 text-white rounded-sm cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterFrom;
