import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function StudentDashboard() {
  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const res = await api.get("/quiz/latest");
      console.log(res.data);
      setQuizzes(res.data);
    } catch (err) {
      console.log("Error fetching quizzes:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold mb-10 text-purple-700">
        Student Dashboard
      </h1>

      <div className="grid gap-6">
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <div
              key={quiz.quiz_id}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {quiz.title}
              </h2>

              <div className="flex gap-4">
                <button
                  onClick={() =>
                    navigate(`/attempt-quiz/${quiz.quiz_id}`)
                  }
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
                >
                  Attempt Quiz
                </button>

                <button
                  onClick={() => navigate("/leaderboard")}
                  className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600"
                >
                  View Rankings
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-600">
              No quizzes available
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;