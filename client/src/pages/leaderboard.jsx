import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Leaderboard() {
  const [leaders, setLeaders] =
    useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard =
    async () => {
      try {
        const res = await api.get(
          "/leaderboard"
        );

        setLeaders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="min-h-screen text-white">
      <Navbar title="Leaderboard" />

      <div className="p-10">
        <h1 className="text-6xl font-black mb-10 bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text">
          🏆 Leaderboard
        </h1>

        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
          <table className="w-full">
            <thead className="bg-white/10">
              <tr>
                <th className="p-6 text-left text-2xl">
                  Rank
                </th>

                <th className="p-6 text-left text-2xl">
                  Student
                </th>

                <th className="p-6 text-left text-2xl">
                  Score
                </th>
              </tr>
            </thead>

            <tbody>
              {leaders.map(
                (leader, index) => (
                  <tr
                    key={index}
                    className="border-t border-white/10 hover:bg-white/10"
                  >
                    <td className="p-6 text-xl font-bold">
                      #{index + 1}
                    </td>

                    <td className="p-6 text-xl">
                      {leader.name}
                    </td>

                    <td className="p-6 text-xl text-yellow-300 font-bold">
                      {leader.score}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;