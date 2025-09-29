import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import ResultCard from "../components/ResultCard";
import Timer from "./Timer";

const Exam = () => {
  const { subject } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch(`http://localhost:5000/test/${subject}`);
        const data = await res.json();
        setQuiz(data);
        setAnswers(new Array(data.questions.length).fill(null));
      } catch (err) {
        console.error(err);
      }
    };
    fetchQuiz();
  }, [subject]);

  if (!quiz) return <p>Loading...</p>;

  const handleSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);
  };

  const finishQuiz = () => {
    const updatedQuestions = quiz.questions.map((q, idx) => ({
      ...q,
      submittedOption: answers[idx],
    }));
    setQuiz({ ...quiz, questions: updatedQuestions });
    setShowScore(true);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  if (showScore) return <ResultCard questions={quiz.questions} />;

  return (
    <div className="p-10 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{quiz.subject} Test</h2>
        <Timer duration={300} onTimeUp={finishQuiz} /> {/* 5 min = 300 sec */}
      </div>

      <QuestionCard
        questionData={quiz.questions[currentQuestion]}
        selectedOption={answers[currentQuestion]}
        onSelect={handleSelect}
      />

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          {currentQuestion === quiz.questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Exam;
