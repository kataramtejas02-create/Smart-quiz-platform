import axios from "axios";

const api = axios.create({
  baseURL: "https://smart-quiz-platform-backend.onrender.com",
});

export default api;