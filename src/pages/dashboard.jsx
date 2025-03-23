import React from "react";
import { Home, User, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
        <ul>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
            <Home size={20} /> Home
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
            <User size={20} /> Profile
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
            <Settings size={20} /> Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <header className="bg-white p-4 rounded shadow-md mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Welcome to Dashboard</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Logout</button>
        </header>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow-md">Card 1</div>
          <div className="bg-white p-6 rounded shadow-md">Card 2</div>
          <div className="bg-white p-6 rounded shadow-md">Card 3</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
