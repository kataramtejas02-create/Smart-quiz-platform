import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import CreateQuiz from "./pages/CreateQuiz";
import AddQuestion from "./pages/addquestion";
import AttemptQuiz from "./pages/attemptquiz";
import Leaderboard from "./pages/leaderboard";
import Result from "./pages/result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/teacher"
          element={<TeacherDashboard />}
        />

        <Route
          path="/student"
          element={<StudentDashboard />}
        />
        <Route
          path="/create-quiz"
          element={<CreateQuiz />}
        />
        <Route
          path="/add-question"
          element={<AddQuestion />}
        />
        <Route
          path="/attempt-quiz"
          element={<AttemptQuiz />}
        />
        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />
        <Route
          path="/result"
          element={<Result />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;