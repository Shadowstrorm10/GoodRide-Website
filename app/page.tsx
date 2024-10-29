"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown, FaEarthAsia, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import Preloader from '@/components/Preloader'; // Adjust the import path if needed

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  // Simulate loading of the main content
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust this to match the loading duration (should be equal to the preloader increment time)

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <>
      {loading && <Preloader />}
      {!loading && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black scale-85">
          {/* Header */}
          <header className="top-0 bg-black z-10 flex justify-between items-center w-full px-3 py-3 transform scale-90">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-xl font-bold text-white ml-3 mr-4 tauri-font">GoodRide</Link>
              <nav className="space-x-3 flex items-center">
                <a href="/ride" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
                  Ride
                </a>
                <a href="/drive" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
                  Drive
                </a>
                <a href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
                  Business
                </a>
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
                    <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg">
                      <Link href="/about" className="block px-4 py-2 hover:bg-gray-200 text-sm">About Us</Link>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-200 text-sm">Our Story</Link>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-200 text-sm">Careers</Link>
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
              <a href="/help" className="text-white font-bold hover:bg-gray-300 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
                Help
              </a>
              <a href="/login" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
                Log in
              </a>
              <Link href="/signup">
                <button className="bg-white text-black font-bold px-3 py-1 rounded-md hover:bg-gray-300 transition text-sm">
                  Sign up
                </button>
              </Link>
            </div>
          </header>

          {/* Main Content */}
          <div className="max-w-7xl w-full mx-auto px-4 py-10">
            <main className="flex flex-col md:flex-row items-center">
              {/* Text Section */}
              <div className="text-left md:w-1/2 bg-black backdrop-blur-lg rounded-lg p-6 shadow-lg">
                <h2 className="text-6xl font-bold mb-6 text-white leading-tight">
                  Go anywhere with <br /> <span className="text-6xl">GoodRide</span>
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
                  <button className="w-[30%] bg-white text-black font-bold py-2 rounded-md hover:bg-gray-300 transition">
                    See prices
                  </button>
                </div>
              </div>

              {/* Illustration Section - First Image to the Right */}
              <div className="md:w-1/2 flex justify-end">
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

          {/* Separator after the first section */}
          <div className="w-full h-[0.5px] bg-[rgba(255,255,255,0.2)] my-4"></div>

          {/* New Section with Black Background */}
          <div className="max-w-7xl w-full mx-auto px-4 py-20 bg-black">
            <main className="flex flex-col md:flex-row items-center">
              {/* Illustration Section - Second Image to the Left */}
              <div className="md:w-1/2 flex justify-start">
                <Image
                  src="/image-2.png" // Replace with the path to your new image in the 'public' folder
                  alt="Explore new destinations"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              {/* Content Section - Added margin-left for spacing */}
              <div className="text-left md:w-1/2 bg-black p-6 shadow-lg ml-4"> {/* Added ml-4 for spacing */}
                <h2 className="text-5xl font-bold mb-6 text-white leading-tight">
                  Discover new destinations
                </h2>
                <p className="text-white mb-4">Find places you've never been and explore them with GoodRide.</p>
                <div className="flex flex-col space-y-4">
                  <button className="w-[50%] bg-white text-black font-bold py-2 rounded-md hover:bg-gray-300 transition">
                    Explore Now
                  </button>
                </div>
              </div>
            </main>
          </div>

          {/* Separator after the second section */}
          <div className="w-full h-[0.5px] bg-[rgba(255,255,255,0.2)] my-4"></div>

          {/* Business Section */}
          <div className="max-w-7xl w-full mx-auto px-4 py-20 bg-black">
            <main className="flex flex-col md:flex-row items-center">
              {/* Content Section - Added margin-right for spacing */}
              <div className="text-left md:w-1/2 bg-black p-6 shadow-lg mr-4"> {/* Added mr-4 for spacing */}
                <h2 className="text-5xl font-bold mb-6 text-white leading-tight">
                  GoodRide for Business
                </h2>
                <p className="text-white mb-4">Streamline your business travel.</p>
                <div className="flex flex-col space-y-4">
                  <button className="w-[50%] bg-white text-black font-bold py-2 rounded-md hover:bg-gray-300 transition">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Illustration Section - Third Image to the Right */}
              <div className="md:w-1/2 flex justify-end">
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


          {/* Separator after the third section */}
          <div className="w-full h-[0.5px] bg-[rgba(255,255,255,0.2)] my-4"></div>

          {/* Make Money Section */}
          <div className="max-w-7xl w-full mx-auto px-4 py-20 bg-black">
            <main className="flex flex-col md:flex-row items-center">
              {/* Illustration Section - Fourth Image to the Right */}
              <div className="md:w-1/2 flex justify-end">
                <Image
                  src="/image-4.png" // Replace with the path to your make money image in the 'public' folder
                  alt="Make Money with Uber"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              {/* Content Section - Added margin-left for spacing */}
              <div className="text-left md:w-1/2 bg-black p-6 shadow-lg ml-4"> {/* Added ml-4 for spacing */}
                <h2 className="text-5xl font-bold mb-6 text-white leading-tight">
                  Make Money with GoodRide
                </h2>
                <p className="text-white mb-4">Join our platform and start earning.</p>
                <div className="flex flex-col space-y-4">
                  <button className="w-[50%] bg-white text-black font-bold py-2 rounded-md hover:bg-gray-300 transition">
                    Start Earning
                  </button>
                </div>
              </div>
            </main>
          </div>
          
          {/* Separator after the first section */}
          <div className="w-full h-[0.5px] bg-[rgba(255,255,255,0.2)] my-4"></div>

          {/* Footer Section */}
          <footer className="w-full bg-black text-white py-20 mt-10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between">
                {/* Company Information Section */}
                <div className="mb-6 md:mb-0 md:w-1/3">
                  <h3 className="text-3xl font-bold">Company</h3>
                  <ul className="space-y-2 mt-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition">About Us</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition">Careers</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition">Blog</a>
                    </li>
                  </ul>
                </div>

                {/* Services Section */}
                <div className="mb-6 md:mb-0 md:w-1/3">
                  <h3 className="text-3xl font-bold">Services</h3>
                  <ul className="space-y-2 mt-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition">Ride</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition">Delivery</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition">GoodRide for Business</a>
                    </li>
                  </ul>
                </div>

                {/* Social Media Section */}
                <div className="mb-6 md:mb-0 md:w-1/3">
                  <h3 className="text-3xl font-bold">Stay Connected</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-gray-400 hover:text-white transition">
                      <FaFacebookF className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                      <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                      <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                      <FaLinkedinIn className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Links Section */}
              <div className="flex flex-col md:flex-row justify-between mt-6">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-3xl font-bold">Quick Links</h3>
                  <ul className="space-y-2 mt-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition">Help Center</a>
                    </li>
                  </ul>
                </div>

                <div className="text-center mt-6 md:mt-0">
                  <p className="text-gray-400 text-sm">© 2024 GoodRide, Inc. All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
