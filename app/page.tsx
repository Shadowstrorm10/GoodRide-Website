// app/page.tsx
import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Navbar */}
      <header className="flex items-center justify-between px-12 py-6">
        <div className="flex space-x-8 items-center">
          <div className="text-2xl font-bold">Uber</div>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">
              Ride
            </a>
            <a href="#" className="hover:underline">
              Drive
            </a>
            <a href="#" className="hover:underline">
              Business
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <button className="hover:underline">EN</button>
          <button className="hover:underline">Help</button>
          <button className="hover:underline">Log in</button>
          <button className="bg-white text-black py-1 px-6 rounded-md hover:bg-gray-300">
            Sign up
          </button>
        </div>
      </header>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-12 pt-16 pb-10">
        {/* Left Section: Text and Form */}
        <div className="md:w-1/2 max-w-lg">
          <h1 className="text-6xl font-bold mb-6 leading-snug">
            Go anywhere with Uber
          </h1>
          <p className="text-2xl mb-8">Request a ride, hop in, and go.</p>

          {/* Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter location"
              className="w-full p-4 rounded-md bg-gray-800 text-white placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Enter destination"
              className="w-full p-4 rounded-md bg-gray-800 text-white placeholder-gray-500"
            />
            <button className="w-full bg-white text-black p-4 rounded-md">
              See prices
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/uber-illustration.png"
            alt="Uber Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
