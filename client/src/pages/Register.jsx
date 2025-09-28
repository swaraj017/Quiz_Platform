import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      setMsg(data.message);
    } catch {
      setMsg("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Create an Account  
        </h2>
        
        
        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg  "
            required
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg  "
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg    "
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition duration-200"
          >
            Register
          </button>
        </form>

         
        {msg && (
          <p
            className={`mt-4 text-center text-sm ${
              msg.toLowerCase().includes("success")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {msg}
          </p>
        )}

       
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/" className="text-black font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
