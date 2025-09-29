import React from "react";

const ResultCard = ({ questions }) => {
  // Calculate score
  const score = questions.reduce(
    (acc, q) => (q.submittedOption === q.correctOption ? acc + 1 : acc),
    0
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
        Your Result: {score} / {questions.length}
      </h2>

      <div className="space-y-4">
        {questions.map((q, idx) => (
          <div key={idx} className="p-4 border rounded bg-gray-50">
            <p className="font-semibold mb-2">
              {idx + 1}. {q.question}
            </p>
            <p>
              Your Answer:{" "}
              <span
                className={
                  q.submittedOption === q.correctOption
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }
              >
                {q[`option${q.submittedOption}`] || "Not Answered"}
              </span>
            </p>
            <p>
              Correct Answer:{" "}
              <span className="text-green-700 font-semibold">
                {q[`option${q.correctOption}`]}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultCard;
