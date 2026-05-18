import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold mb-10 text-purple-700">
        Student Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Attempt Quiz
          </h2>

          <button
            onClick={() =>
              navigate("/attempt-quiz")
            }
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            Start Quiz
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Leaderboard
          </h2>

          <button
            onClick={() =>
              navigate("/leaderboard")
            }
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600"
          >
            View Rankings
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;