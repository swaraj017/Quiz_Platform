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
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-8 tracking-tight">
          Quiz Platform
        </h2>
        <nav className="space-y-4">
          <a
            href="/"
            className="block px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            📝 All Tests
          </a>
          <a
            href="/login"
            className="block px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            Login
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-100">
         
          <h3 className="text-xl font-semibold mb-8 text-gray-900">
            Available Tests
          </h3>
          

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {tests.map((test, index) => (
              <TestCard
                key={index}
                subject={test.subject}
                description={test.description}
                path={`/test/${test.subject}`}
              />
            ))}
          </div>
        
      </main>
    </div>
  );
};

export default Dashboard;
