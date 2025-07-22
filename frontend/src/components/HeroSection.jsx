import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative bg-darkGreen  scroll-mt-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:250px_100%] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
        {/* Text Section */}
        <div>
          <h1 className="text-white text-4xl md:text-7xl font-bold leading-tight mb-6">
            Track. Analyze. <span className="text-neonGreen">Master</span> Your
            Finances with AI.
          </h1>
          <p className="text-1xl text-dullGreen mb-8">
            SpendWise helps you understand where your money goes with AI-powered
            categorization and financial insights.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/upload")}
              className="bg-neonGreen text-black px-6 py-5 rounded-full hover:bg-green-700 transition"
            >
              Get Started
            </button>
            <a href="#features">
              <button className="border border-dullGreen text-dullGreen px-6 py-5 rounded-full hover:bg-dullGreen hover:text-black transition">
                Explore Features
              </button>
            </a>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="flex justify-center">
          <div className="w-full h-96 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-gray-400">
              [ Dashboard Image Placeholder ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
