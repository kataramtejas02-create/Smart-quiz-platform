import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

function Result() {
  const location = useLocation();

  const navigate = useNavigate();

  const score = location.state?.score;

  return (
    <div className="min-h-screen text-white">
      <Navbar title="Quiz Result" />

      <div className="flex flex-col justify-center items-center p-10">
        <div className="w-full max-w-xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl text-center">
          <h1 className="text-6xl font-black mb-8 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
            Quiz Submitted
          </h1>

          <p className="text-3xl mb-10 text-gray-200">
            Your Score
          </p>

          <div className="text-8xl font-black text-yellow-300 mb-10">
            {score}
          </div>

          <div className="flex justify-center gap-6">
            <button
              onClick={() =>
                navigate("/leaderboard")
              }
              className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 rounded-2xl font-bold text-xl"
            >
              Leaderboard
            </button>

            <button
              onClick={() =>
                navigate("/student")
              }
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl font-bold text-xl"
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;