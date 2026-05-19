import { useEffect, useState } from "react";
import api from "../services/api";
import {
  useNavigate,
  useParams
} from "react-router-dom";
import Navbar from "../components/navbar";
import { toast } from "react-toastify";

function AttemptQuiz() {
  const [questions, setQuestions] =
    useState([]);

  const [answers, setAnswers] =
    useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const res = await api.get(
        `/quiz/${id}`
      );

      const groupedQuestions = [];

      res.data.forEach((item) => {
        let question =
          groupedQuestions.find(
            (q) =>
              q.question_id ===
              item.question_id
          );

        if (!question) {
          question = {
            question_id:
              item.question_id,
            question_text:
              item.question_text,
            options: []
          };

          groupedQuestions.push(question);
        }

        question.options.push({
          option_id: item.option_id,
          option_text:
            item.option_text
        });
      });

      setQuestions(groupedQuestions);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOptionChange = (
    question_id,
    selected_option
  ) => {
    const updatedAnswers =
      answers.filter(
        (a) =>
          a.question_id !==
          question_id
      );

    updatedAnswers.push({
      question_id,
      selected_option
    });

    setAnswers(updatedAnswers);
  };

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleSubmit = async () => {
    try {
      const res = await api.post(
        "/submit-quiz",
        {
          student_id: user.user_id,
          quiz_id: id,
          answers
        }
      );

      toast.success(
        `Score: ${res.data.score}`
      );

      navigate("/result", {
        state: {
          score: res.data.score
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed");
    }
  };

  return (
    <div className="min-h-screen text-white">
      <Navbar title="Attempt Quiz" />

      <div className="p-10">
        <h1 className="text-6xl font-black mb-10 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Attempt Quiz
        </h1>

        <div className="space-y-8">
          {questions.map((question) => (
            <div
              key={
                question.question_id
              }
              className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl"
            >
              <h2 className="text-3xl font-bold mb-6">
                {
                  question.question_text
                }
              </h2>

              <div className="space-y-4">
                {question.options.map(
                  (option) => (
                    <label
                      key={
                        option.option_id
                      }
                      className="flex items-center gap-4 p-4 border border-white/20 rounded-xl hover:bg-white/10 transition cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={
                          question.question_id
                        }
                        onChange={() =>
                          handleOptionChange(
                            question.question_id,
                            option.option_id
                          )
                        }
                      />

                      <span className="text-xl">
                        {
                          option.option_text
                        }
                      </span>
                    </label>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="mt-10 bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 rounded-2xl text-2xl font-bold hover:scale-105 transition"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
}

export default AttemptQuiz;