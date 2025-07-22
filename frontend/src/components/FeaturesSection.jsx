import React from "react";
import { Lightbulb, UploadCloud, BarChart2, Brain } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Upload CSV",
      icon: <UploadCloud className="w-10 h-10 text-neonGreen" />,
      description:
        "Easily import your bank or wallet transactions to start tracking.",
    },
    {
      title: "AI Categorization",
      icon: <Brain className="w-10 h-10 text-neonGreen" />,
      description:
        "Powered by Gemini/Groq to automatically tag your expenses with accurate categories.",
    },
    {
      title: "Dashboard Visuals",
      icon: <BarChart2 className="w-10 h-10 text-neonGreen" />,
      description:
        "See clear pie charts, trend lines, and summaries that simplify your finances.",
    },
    {
      title: "Smart Insights",
      icon: <Lightbulb className="w-10 h-10 text-neonGreen" />,
      description:
        "Get personalized insights from your spending behavior using AI.",
    },
  ];
  return (
    <section
      id="features"
      className="bg-white text-darkGreen py-24 px-6 scroll-mt-20 relative"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Powerful Features to Make Spending Smarter
        </h2>
        <p className="text-dullGreen text-2xl max-w-3xl mx-auto">
          Everything you need to manage your money wisely, powered by modern AI.
        </p>
      </div>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1f2c26] rounded-3xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-dullGreen text-1xl mb-4">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
