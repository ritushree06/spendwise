import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
