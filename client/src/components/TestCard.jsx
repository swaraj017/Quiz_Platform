import React from "react";

const TestCard = ({ subject, description }) => {
  return (
    <div className="bg-white border border-gray-300 shadow-sm rounded-lg p-5 w-72">
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{subject}</h3>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
        Start Test
      </button>
    </div>
  );
};

export default TestCard;
