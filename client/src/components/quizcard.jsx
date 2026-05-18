function QuizCard({ title, onClick }) {
  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl text-white hover:scale-105 transition">
      <h2 className="text-3xl font-bold mb-6">
        {title}
      </h2>

      <button
        onClick={onClick}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-xl font-bold"
      >
        Open Quiz
      </button>
    </div>
  );
}

export default QuizCard;