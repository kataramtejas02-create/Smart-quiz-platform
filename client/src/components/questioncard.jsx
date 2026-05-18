function QuestionCard({
  question,
  handleOptionChange
}) {
  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-white">
        {question.question_text}
      </h2>

      <div className="space-y-4">
        {question.options.map((option) => (
          <label
            key={option.option_id}
            className="flex items-center gap-4 p-4 border border-white/20 rounded-xl hover:bg-white/10 transition cursor-pointer text-white"
          >
            <input
              type="radio"
              name={question.question_id}
              onChange={() =>
                handleOptionChange(
                  question.question_id,
                  option.option_id
                )
              }
            />

            <span className="text-xl">
              {option.option_text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;