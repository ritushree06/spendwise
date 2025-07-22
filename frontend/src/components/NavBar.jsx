import React, { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <header className="bg-darkGreen border-b border-[rgba(255,255,255,0.07)] shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side: Logo + Nav links */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white">
            SpendWise
          </a>

          {/* Nav Links */}
          <ul className="hidden md:flex space-x-6 text-dullGreen font-medium">
            <li>
              <a href="#home" className="hover:text-green-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-green-600 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#dashboard" className="hover:text-green-600 transition">
                Dashboard
              </a>
            </li>
          </ul>
        </div>

        {/* Right side: Auth Buttons */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <button
                onClick={handleLogin}
                className="border border-dullGreen text-dullGreen px-4 py-2 rounded-full hover:bg-dullGreen hover:text-black transition"
              >
                Log In
              </button>
              <button className="bg-neonGreen px-4 py-2 rounded-full text-black px-4 py-2 hover:bg-green-700 transition">
                Sign In
              </button>
            </>
          ) : (
            <>
              <button className="border border-white px-4 py-2 rounded-full text-white hover:text-green-600 hover:border-green-600 hidden md:inline transition-colors">
                My Profile
              </button>
              <button
                onClick={handleLogout}
                className="bg-neonGreen px-4 py-2 rounded-full text-black px-4 py-2 hover:bg-green-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
