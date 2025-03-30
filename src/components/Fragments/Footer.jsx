import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white text-center py-4 mt-6">
      <p className="text-sm">&copy; {new Date().getFullYear()} Dashboard Admin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
