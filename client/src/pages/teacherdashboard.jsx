import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

function TeacherDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar title="Teacher Dashboard" />

      <div className="p-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
               Create Quiz
            </h2>

            <p className="text-gray-300 mb-8">
              Create quizzes for students.
            </p>

            <button
              onClick={() =>
                navigate("/create-quiz")
              }
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl font-bold"
            >
              Open
            </button>
          </div>

          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
               Add Questions
            </h2>

            <p className="text-gray-300 mb-8">
              Add MCQs and correct answers.
            </p>

            <button
              onClick={() =>
                navigate("/add-question")
              }
              className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-xl font-bold"
            >
              Open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;