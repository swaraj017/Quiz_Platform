import React from "react";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
const TestCard = ({ subject, description, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="bg-white border border-gray-300 shadow-sm rounded-lg p-5 w-72">
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{subject}</h3>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      <div className="flex gap-7"><button
        className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        onClick={handleClick}
      >
        Start Test
      </button>
      <div className="border px-4 py-2 rounded-xl bg-gray-100 text-black font-semibold">
      ⏳ 5min 
    </div>
      </div>
    </div>
  );
};

export default TestCard;
