function Navbar({ title }) {
  return (
    <div className="w-full backdrop-blur-lg bg-white/10 border-b border-white/20 px-10 py-5 flex justify-between items-center">
      <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        Smart Quiz Platform
      </h1>

      <p className="text-xl text-gray-300">
        {title}
      </p>
    </div>
  );
}

export default Navbar;