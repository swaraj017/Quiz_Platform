import React from "react";
import TestCard from "../components/TestCard";

const Dashboard = () => {
  const tests = [
    { subject: "DSA", description: "Test of fundamentals of data structure" },
    { subject: "JavaScript", description: "JS knowledge test" },
    { subject: "React", description: "React component and hooks test" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
     
      <aside className="w-64 bg-white border-r shadow-sm p-6">
        <h2 className="text-2xl font-bold text-black mb-8  ">Quiz Platform</h2>
        <nav className="space-y-4">
          <a href="/dashboard" className="block text-gray-700 hover:text-black">
            My Tests 📝
          </a>
        </nav>
      </aside>

       
      <main className="flex-1 p-10">
        <h3 className="text-xl font-semibold mb-6 text-gray-900">Available Tests</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {tests.map((test, index) => (
            <TestCard
              key={index}
              subject={test.subject}
              description={test.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
