import React from "react";

const QuestionCard = ({ questionData, selectedOption, onSelect }) => {
  return (
    <div className="p-6 border border-gray-300 rounded-xl shadow-md mb-6 bg-white">
        
      <p className="font-semibold text-gray-900 mb-4 text-lg">{questionData.question}</p>
      
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <label
            key={i}
            className={`flex items-center p-3 border rounded-lg cursor-pointer transition 
                        ${selectedOption === i ? "bg-black text-white" : "bg-gray-50 hover:bg-gray-200"}`
            }
          >
            <input
              type="radio"
              name="question"
              value={i}
              checked={selectedOption === i}
              onChange={() => onSelect(i)}
              className="mr-3 accent-black"
            />
            <span>{questionData[`option${i}`]}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
