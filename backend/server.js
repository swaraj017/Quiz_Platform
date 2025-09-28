import express from "express";
import dotenv from "dotenv";
import { conntectDB } from "./config/db.js";
import { register, login } from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

import cors from "cors";
app.use(cors({ origin: "http://localhost:5173" }));


conntectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.post("/register", register);
app.post("/login", login);

app.get("/", (req, res) => {
    res.send("working");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
