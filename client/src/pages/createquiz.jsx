import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

function CreateQuiz() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/create-quiz",
        {
          title,
          teacher_id: 1
        }
      );

      toast.success("Quiz Created");

      setTitle("");
    } catch (error) {
      console.log(error);
      toast.error("Failed");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar title="Create Quiz" />

      <div className="flex justify-center items-center p-10">
        <div className="w-full max-w-xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl">
          <h1 className="text-5xl font-black mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Create Quiz
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Quiz Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-xl text-xl font-bold hover:scale-105 transition"
            >
              Create Quiz
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;