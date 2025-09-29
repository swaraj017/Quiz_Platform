 
import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  subject: String,  
  questions: [
    {
      question: String,
      option1: String,
      option2: String,
      option3: String,
      option4: String,
      correctOption: Number,  
    }
  ]
}, { collection: 'Quiz' });  

export const Quiz = mongoose.model("Quiz", quizSchema);
