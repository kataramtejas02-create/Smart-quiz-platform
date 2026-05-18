import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      role: "student"
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/register",
        formData
      );

      toast.success("Registration Successful");
    } catch (error) {
      console.log(error);
      toast.error("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl">
        <h1 className="text-5xl font-black text-center mb-10 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none"
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none"
          >
            <option
              value="student"
              className="text-black"
            >
              Student
            </option>

            <option
              value="teacher"
              className="text-black"
            >
              Teacher
            </option>
          </select>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 py-4 rounded-xl text-xl font-bold hover:scale-105 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;