"use client"

import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown, FaEarthAsia } from 'react-icons/fa6'; // Importing icons from react-icons

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black scale-85">
      {/* Header */}
      <header className="sticky top-0 bg-black z-10 flex justify-between items-center w-full px-3 py-3">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-white ml-3 mr-4">Uber</h1>
          <nav className="space-x-3 flex items-center">
            <a href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
              Ride
            </a>
            <a href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
              Drive
            </a>
            <a href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
              Business
            </a>
            {/* About Section with Dropdown and Arrow */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
                About
                <FaChevronDown
                  className={`ml-1 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-sm">About Us</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-sm">Our Story</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-sm">Careers</a>
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
            <FaEarthAsia className="mr-1 w-4 h-4" />
            EN
          </a>
          <a href="#" className="text-white font-bold hover:bg-gray-300 hover:bg-opacity-100 transition px-2 py-1 rounded text-sm">
            Help
          </a>
          <a href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
            Log in
          </a>
          <button className="bg-white text-black font-bold px-3 py-1 rounded-md hover:bg-gray-300 transition text-sm">
            Sign up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl w-full mx-auto px-4 py-10">
        <main className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="text-left md:w-1/2 bg-black backdrop-blur-lg rounded-lg p-6 shadow-lg">
            <h2 className="text-6xl font-bold mb-6 text-white leading-tight">
              Go anywhere with <br /> <span className="text-6xl">Uber</span>
            </h2>
            <p className="text-white mb-4">Request a ride, hop in, and go.</p>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Enter location"
                className="w-[70%] px-3 py-2 rounded-md border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Enter destination"
                className="w-[70%] px-3 py-2 rounded-md border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-black"
              />
              <button className="w-[30%] bg-white text-black font-bold py-2 rounded-md hover:bg-gray-800 transition">
                See prices
              </button>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="mt-10 md:mt-0 md:ml-8 md:w-1/2 flex justify-start">
            <Image
              src="/image-1.png" // Replace with the path to your image in the 'public' folder
              alt="Uber ride illustration"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </main>
      </div>

      {/* Separator Line */}
      <div className="w-full flex justify-center my-10">
        <div className="w-1/3 h-0.5 bg-white opacity-75 rounded-lg"></div>
      </div>

      {/* New Section with Black Background */}
      <div className="max-w-7xl w-full mx-auto px-4 py-20 bg-black">
        <main className="flex flex-col md:flex-row items-center">
          {/* Content Section */}
          <div className="text-left md:w-1/2 bg-black p-6 shadow-lg">
            <h2 className="text-5xl font-bold mb-6 text-white leading-tight">
              Discover new destinations
            </h2>
            <p className="text-white mb-4">Find places you've never been and explore them with Uber.</p>
            <div className="flex flex-col space-y-4">
              <button className="w-[50%] bg-white text-black font-bold py-2 rounded-md hover:bg-gray-800 transition">
                Explore Now
              </button>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block h-full border-l border-gray-400 mx-6"></div>

          {/* Illustration Section */}
          <div className="md:w-1/2 flex justify-start">
            <Image
              src="/image-2.png" // Replace with the path to your new image in the 'public' folder
              alt="Explore new destinations"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </main>
      </div>

      {/* Separator Line */}
      <div className="w-full flex justify-center my-10">
        <div className="w-1/3 h-0.5 bg-white opacity-75 rounded-lg"></div>
      </div>

      {/* Business Section */}
      <div className="max-w-7xl w-full mx-auto px-4 py-20 bg-black">
        <main className="flex flex-col md:flex-row items-center">
          {/* Content Section */}
          <div className="text-left md:w-1/2 bg-black p-6 shadow-lg">
            <h2 className="text-5xl font-bold mb-6 text-white leading-tight">
              Uber for Business
            </h2>
            <p className="text-white mb-4">Streamline your transportation with our corporate solutions.</p>
            <div className="flex flex-col space-y-4">
              <button className="w-[50%] bg-white text-black font-bold py-2 rounded-md hover:bg-gray-800 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Illustration Section Shifted Left */}
          <div className="md:w-1/2 flex justify-start">
            <Image
              src="/image-3.png" // Replace with the path to your business image in the 'public' folder
              alt="Uber for Business"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </main>
      </div>

      {/* Separator Line */}
      <div className="w-full flex justify-center my-10">
        <div className="w-1/3 h-0.5 bg-white opacity-75 rounded-lg"></div>
      </div>

      {/* Make Money Section */}
      <div className="max-w-7xl w-full mx-auto px-4 py-20 bg-black">
        <main className="flex flex-col md:flex-row items-center">
          {/* Content Section */}
          <div className="text-left md:w-1/2 bg-black p-6 shadow-lg">
            <h2 className="text-5xl font-bold mb-6 text-white leading-tight">
              Make Money with Uber
            </h2>
            <p className="text-white mb-4">Join our platform and start earning.</p>
            <div className="flex flex-col space-y-4">
              <button className="w-[50%] bg-white text-black font-bold py-2 rounded-md hover:bg-gray-800 transition">
                Start Earning
              </button>
            </div>
          </div>

          {/* Illustration Section Shifted Left */}
          <div className="md:w-1/2 flex justify-start">
            <Image
              src="/image-4.png" // Replace with the path to your make money image in the 'public' folder
              alt="Make Money with Uber"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
