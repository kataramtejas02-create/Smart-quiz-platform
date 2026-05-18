import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/login",
        loginData
      );

      if (
        res.data === "Invalid Credentials"
      ) {
        toast.error("Invalid Credentials");
      } else {
        if (res.data.role === "teacher") {

  localStorage.setItem(
    "user",
    JSON.stringify(res.data)
  );

  navigate("/teacher");

} else {

  localStorage.setItem(
    "user",
    JSON.stringify(res.data)
  );

  navigate("/student");
}
      }
    } catch (error) {
      console.log(error);
      toast.error("Server Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl">
        <h1 className="text-5xl font-black text-center mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Smart Quiz Platform
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
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

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-xl text-xl font-bold hover:scale-105 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;