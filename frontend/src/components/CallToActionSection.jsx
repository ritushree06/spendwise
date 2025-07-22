import React from "react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();
  return (
    <section
      id="cta"
      className="bg-darkGreen text-white px-6 py-20 md:py-32 flex flex-col justify-center"
      style={{ minHeight: "60vh" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Start managing your money{" "}
          <span className="text-neonGreen">smarter</span>.
        </h2>
        <p className="text-dullGreen text-lg mb-8 max-w-xl mx-auto">
          Try SpendWise for free – no signup needed. Built with AI to help you
          control your spending.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/upload")}
            className="bg-neonGreen text-black px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            Get Started
          </button>
          <a href="#features">
            <button className="border border-dullGreen text-dullGreen px-6 py-3 rounded-full hover:bg-dullGreen hover:text-black transition">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
