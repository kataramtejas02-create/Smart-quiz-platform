import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/navbar";
import { toast } from "react-toastify";

function AddQuestion() {
  const [question, setQuestion] =
    useState("");

  const [option1, setOption1] =
    useState("");

  const [option2, setOption2] =
    useState("");

  const [option3, setOption3] =
    useState("");

  const [option4, setOption4] =
    useState("");

  const [correctAnswer, setCorrectAnswer] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/add-question",
        {
          quiz_id: 1,
          question_text: question,
          options: [
            option1,
            option2,
            option3,
            option4
          ],
          correctAnswer
        }
      );

      toast.success("Question Added");

      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setCorrectAnswer("");
    } catch (error) {
      console.log(error);
      toast.error("Failed");
    }
  };

  return (
    <div className="min-h-screen text-white">
      <Navbar title="Add Questions" />

      <div className="flex justify-center items-center p-10">
        <div className="w-full max-w-2xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl">
          <h1 className="text-5xl font-black mb-8 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
            Add Question
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Question"
              value={question}
              onChange={(e) =>
                setQuestion(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white"
            />

            <input
              type="text"
              placeholder="Option 1"
              value={option1}
              onChange={(e) =>
                setOption1(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white"
            />

            <input
              type="text"
              placeholder="Option 2"
              value={option2}
              onChange={(e) =>
                setOption2(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white"
            />

            <input
              type="text"
              placeholder="Option 3"
              value={option3}
              onChange={(e) =>
                setOption3(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white"
            />

            <input
              type="text"
              placeholder="Option 4"
              value={option4}
              onChange={(e) =>
                setOption4(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white"
            />

            <input
              type="text"
              placeholder="Correct Answer"
              value={correctAnswer}
              onChange={(e) =>
                setCorrectAnswer(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 py-4 rounded-xl text-xl font-bold"
            >
              Add Question
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;