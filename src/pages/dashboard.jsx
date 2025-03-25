import React from "react";
import { Home, User, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="bg-[#111827] text-white p-6">
      <div class="container mx-auto">
        <h1 class="text-2xl font-bold mb-6">Dashboard Admin</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div class="bg-[#1F2937] p-4 rounded-lg shadow-md">
            <h2 class="text-lg">Total Buku</h2>
            <p class="text-2xl font-bold">1,200</p>
          </div>
          <div class="bg-[#1F2937] p-4 rounded-lg shadow-md">
            <h2 class="text-lg">Buku Dipinjam</h2>
            <p class="text-2xl font-bold">320</p>
          </div>
          <div class="bg-[#1F2937] p-4 rounded-lg shadow-md">
            <h2 class="text-lg">Total Pengguna</h2>
            <p class="text-2xl font-bold">540</p>
          </div>
          <div class="bg-[#1F2937] p-4 rounded-lg shadow-md">
            <h2 class="text-lg">Peminjaman Terlambat</h2>
            <p class="text-2xl font-bold">28</p>
          </div>
        </div>

        <div class="bg-[#1F2937] p-6 rounded-lg shadow-md mb-6">
          <h2 class="text-xl font-bold mb-4">Aktivitas Terbaru</h2>
          <table class="w-full text-left">
            <thead>
              <tr>
                <th class="py-2">Nama</th>
                <th class="py-2">Buku</th>
                <th class="py-2">Status</th>
                <th class="py-2">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-600">
                <td class="py-2">Ahmad Fajar</td>
                <td class="py-2">Harry Potter</td>
                <td class="py-2 text-yellow-400">Sedang Dipinjam</td>
                <td class="py-2">10 Mar 2024</td>
              </tr>
              <tr class="border-t border-gray-600">
                <td class="py-2">Siti Aisyah</td>
                <td class="py-2">Dilan 1990</td>
                <td class="py-2 text-green-400">Dikembalikan</td>
                <td class="py-2">8 Mar 2024</td>
              </tr>
              <tr class="border-t border-gray-600">
                <td class="py-2">Rudi Hartono</td>
                <td class="py-2">Laskar Pelangi</td>
                <td class="py-2 text-red-400">Terlambat</td>
                <td class="py-2">5 Mar 2024</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-[#1F2937] p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">Grafik Peminjaman Buku Per Hari</h2>
          <canvas id="chartPeminjaman"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
