import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#1F2937] text-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Hubungi Kami</h2>
      
      <p className="text-gray-300 text-center mb-4">
        Jika ada pertanyaan atau butuh bantuan, silakan hubungi kami melalui informasi di bawah ini.
      </p>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="text-lg">📧</span>
          <p className="text-gray-200">Email: support@dashboard.com</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-lg">📞</span>
          <p className="text-gray-200">Telepon: +62 812-3456-7890</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-lg">📍</span>
          <p className="text-gray-200">Alamat: Jakarta, Indonesia</p>
        </div>
      </div>

      <form className="mt-6">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Nama</label>
          <input type="text" className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none" placeholder="Masukkan nama Anda" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Pesan</label>
          <textarea className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none" rows="4" placeholder="Tulis pesan Anda..."></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default Contact;
