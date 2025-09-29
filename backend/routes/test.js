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
      submittedOption: Number   
    }
  ],
 
});

export const Quiz = mongoose.model("Quiz", quizSchema);
