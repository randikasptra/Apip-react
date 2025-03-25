import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Dashboard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
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
    <div className="bg-[#111827] text-white p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#1F2937] p-4 rounded-lg shadow-md">
            <h2 className="text-lg">Total Buku</h2>
            <p className="text-2xl font-bold">1,200</p>
          </div>
          <div className="bg-[#1F2937] p-4 rounded-lg shadow-md">
            <h2 className="text-lg">Buku Dipinjam</h2>
            <p className="text-2xl font-bold">320</p>
          </div>
          <div className="bg-[#1F2937] p-4 rounded-lg shadow-md">
            <h2 className="text-lg">Total Pengguna</h2>
            <p className="text-2xl font-bold">540</p>
          </div>
          <div className="bg-[#1F2937] p-4 rounded-lg shadow-md">
            <h2 className="text-lg">Peminjaman Terlambat</h2>
            <p className="text-2xl font-bold">28</p>
          </div>
        </div>

        <div className="bg-[#1F2937] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Grafik Peminjaman Buku Per Hari</h2>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
