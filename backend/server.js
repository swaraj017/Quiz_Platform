import express from "express";
import dotenv from "dotenv";
import { conntectDB } from "./config/db.js";
import { register, login } from "./routes/auth.js";
import { Quiz } from "./models/Quiz.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

import cors from "cors";
app.use(cors({ origin: "https://quiz-platform-devs.vercel.app/" }));


conntectDB();

 
app.use(express.json());

// Routes
app.post("/register", register);
app.post("/login", login);

app.get("/test/:subject", async (req, res) => {
  const { subject } = req.params;
  try {
    const quiz = await Quiz.findOne({ subject });
    console.log("Fetched quiz:", quiz);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.json(quiz);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/", (req, res) => {
    res.send("working");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
