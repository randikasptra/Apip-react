import React from "react";
import Header from "../component/Fragments/Header";
import Sidebar from "../components/Fragments/Sidebar"; // Pastikan path benar


const DataAccount = () => {
  const accounts = [
    { id: 1, name: "Budi Santoso", email: "budi@email.com", role: "Admin", status: "Aktif" },
    { id: 2, name: "Siti Rahma", email: "siti@email.com", role: "User", status: "Nonaktif" },
    { id: 3, name: "Agus Pratama", email: "agus@email.com", role: "User", status: "Aktif" },
    { id: 4, name: "Dewi Lestari", email: "dewi@email.com", role: "Moderator", status: "Aktif" },
  ];

  return (
    <>
      <Header />
      <Sidebar />
      <div className="bg-[#1F2937] text-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Data Akun Pengguna</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Nama</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Role</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account, index) => (
                <tr key={index} className="border-b border-gray-600">
                  <td className="py-2 px-4">{account.id}</td>
                  <td className="py-2 px-4">{account.name}</td>
                  <td className="py-2 px-4">{account.email}</td>
                  <td className="py-2 px-4">{account.role}</td>
                  <td className={`py-2 px-4 ${account.status === "Aktif" ? "text-green-400" : "text-red-400"}`}>
                    {account.status}
                  </td>
                  <td className="py-2 px-4 text-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2">Edit</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataAccount;
