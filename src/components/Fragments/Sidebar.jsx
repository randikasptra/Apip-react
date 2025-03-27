import React, { useState } from "react";
import { FiHome, FiBook, FiUsers, FiLogOut, FiMenu, FiX } from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-[#1F2937] p-5 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:relative md:w-60`}
    >
      <button
        className="absolute top-4 right-4 text-white md:hidden"
        onClick={toggleSidebar}
      >
        <FiX size={24} />
      </button>

      <h2 className="text-xl font-bold text-white mb-6">Admin Dashboard</h2>

      <nav>
        <ul className="space-y-4">
          <li className="text-white flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
            <FiHome size={20} />
            <span>Dashboard</span>
          </li>
          <li className="text-white flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
            <FiBook size={20} />
            <span>Data Buku</span>
          </li>
          <li className="text-white flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
            <FiUsers size={20} />
            <span>Pengguna</span>
          </li>
          <li className="text-white flex items-center space-x-2 p-2 rounded-lg hover:bg-red-600 cursor-pointer">
            <FiLogOut size={20} />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
