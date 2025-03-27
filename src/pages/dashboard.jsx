import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Sidebar from "../components//Fragments/Sidebar"; // Pastikan path benar
import { FiMenu } from "react-icons/fi";

const Dashboard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    // Hancurkan chart sebelumnya jika sudah ada
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Buat chart baru
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["20 Mar", "21 Mar", "22 Mar", "23 Mar", "24 Mar"],
        datasets: [
          {
            label: "Jumlah Buku Dipinjam",
            data: [12, 15, 9, 18, 7],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      // Bersihkan chart saat komponen unmount
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Konten Dashboard */}
      <div className="flex-1 min-h-screen bg-[#111827] text-white p-6 md:ml-60">
        <button className="text-white mb-4 md:hidden" onClick={toggleSidebar}>
          <FiMenu size={24} />
        </button>

        <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>

        {/* Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { title: "Total Buku", value: "1,200" },
            { title: "Buku Dipinjam", value: "320" },
            { title: "Total Pengguna", value: "540" },
            { title: "Peminjaman Terlambat", value: "28" },
          ].map((item, index) => (
            <div key={index} className="bg-[#1F2937] p-4 rounded-lg shadow-md">
              <h2 className="text-lg">{item.title}</h2>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Grafik */}
        <div className="bg-[#1F2937] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Grafik Peminjaman Buku Per Hari</h2>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
