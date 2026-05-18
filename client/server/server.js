import express from "express";
import cors from "cors";
import "./db.js";
import routes from "./routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {
  console.log("Server Started");
});