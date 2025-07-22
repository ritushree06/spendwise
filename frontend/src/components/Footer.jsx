import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        {/* Branding */}
        <div className="text-lg font-semibold text-darkGreen">
          © 2025 SpendWise by Ritushree Bohara
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="https://github.com/ritushree06/spendwise"
            target="_blank"
            className="hover:text-neonGreen transition"
          >
            GitHub
          </a>
          <a href="#contact" className="hover:text-neonGreen transition">
            Contact
          </a>
          <a href="#terms" className="hover:text-neonGreen transition">
            Terms & Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
