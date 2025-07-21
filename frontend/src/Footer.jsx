import React from "react";

const Footer = () => (
  <footer className="w-full bg-gradient-to-r from-slate-900 to-gray-800 text-gray-200 py-6 mt-12 shadow-inner">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
      <div className="text-sm">
        &copy; {new Date().getFullYear()} ShopEase Admin Panel. All rights
        reserved.
      </div>
      <div className="flex gap-4 text-sm">
        <a
          href="#"
          className="hover:underline hover:text-emerald-400 transition"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="hover:underline hover:text-orange-400 transition"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="hover:underline hover:text-emerald-400 transition"
        >
          Contact
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
