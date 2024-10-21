// app/about/page.tsx

"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaEarthAsia, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const funnyMessages = [
  "Loading... If you're reading this, your life is probably more interesting than ours!",
  "Hang tight! We're trying to find a unicorn to help with the loading.",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
  "Loading... Why don’t scientists trust atoms? Because they make up everything!",
  "Hold on! We're checking if our servers are caffeinated enough!",
  "Loading... What do you call fake spaghetti? An impasta!",
  "We're almost there! Did you hear about the claustrophobic astronaut? He just needed a little space!",
];

export default function AboutPage() {
  const [loading, setLoading] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Simulate loading of the main content
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % funnyMessages.length);
    }, 1000); // Change message every 1 second

    const timer = setTimeout(() => {
      clearInterval(messageInterval);
      setLoading(false);
    }, 5000); // Stop loading after 5 seconds

    return () => {
      clearInterval(messageInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
          <h1 className="text-xl text-center">
            {funnyMessages[currentMessageIndex]}
          </h1>
        </div>
      ) : (
        <div 
          className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" 
          style={{ backgroundImage: "url('/about-background.jpg')" }}
        >
          {/* Header */}
          <header className="top-0 bg-black z-10 flex justify-between items-center w-full px-3 py-3">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-xl font-bold text-white ml-3 mr-4 tauri-font">GoodRide</Link>
              <nav className="space-x-3 flex items-center">
                <Link href="/" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
                  Ride
                </Link>
                <Link href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
                  Drive
                </Link>
                <Link href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
                  Business
                </Link>
                <div className="relative">
                  <button className="flex items-center text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
                    About
                    <FaChevronDown className="ml-1" />
                  </button>
                </div>
              </nav>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="flex items-center text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
                <FaEarthAsia className="mr-1 w-4 h-4" />
                EN
              </a>
              <Link href="#" className="text-white font-bold hover:bg-gray-300 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
                Help
              </Link>
              <Link href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded text-sm">
                Log in
              </Link>
              <button className="bg-white text-black font-bold px-3 py-1 rounded-md hover:bg-gray-300 transition text-sm">
                Sign up
              </button>
            </div>
          </header>

          {/* About Us Section */}
          <main className="flex flex-col items-center justify-center w-full p-10 text-center bg-black bg-opacity-50 rounded-lg">
            <h2 className="text-6xl font-bold text-white mb-6">About Us</h2>
            <p className="text-xl text-white max-w-2xl mb-4">
              At GoodRide, we are dedicated to providing the best transportation services. Our mission is to ensure safety, convenience, and affordability for all your travel needs. Discover more about our journey and what drives us to innovate.
            </p>
            <button className="mt-4 bg-white text-black font-bold px-4 py-2 rounded-md hover:bg-gray-300 transition">
              Learn More
            </button>
          </main>

          {/* CEO Section */}
          <section className="flex flex-col items-center justify-center w-full p-10 text-center bg-black bg-opacity-70 mt-10 rounded-lg">
            <h2 className="text-5xl font-bold text-white mb-6">Meet Our CEO</h2>
            <p className="text-xl text-white max-w-2xl mb-4">
              Our CEO, [CEO Name], is a visionary leader with over [X years] of experience in the transportation industry. Under their guidance, GoodRide has transformed into a leading service provider, focusing on innovation and customer satisfaction.
            </p>
            <img src="/ceo-image.jpg" alt="CEO" className="w-1/3 rounded-full mb-4" />
            <h3 className="text-3xl font-semibold text-white">[CEO Name]</h3>
            <p className="text-lg text-white">CEO of GoodRide</p>
          </section>

          {/* Co-Founders Section */}
          <section className="flex flex-col items-center justify-center w-full p-10 text-center bg-black bg-opacity-70 mt-10 rounded-lg">
            <h2 className="text-5xl font-bold text-white mb-6">Meet Our Co-Founders</h2>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col items-center">
                <img src="/cofounder1-image.jpg" alt="Co-Founder 1" className="w-1/3 rounded-full mb-2" />
                <h3 className="text-3xl font-semibold text-white">[Co-Founder 1 Name]</h3>
                <p className="text-lg text-white">Co-Founder & CTO</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/cofounder2-image.jpg" alt="Co-Founder 2" className="w-1/3 rounded-full mb-2" />
                <h3 className="text-3xl font-semibold text-white">[Co-Founder 2 Name]</h3>
                <p className="text-lg text-white">Co-Founder & COO</p>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <footer className="w-full bg-black text-white py-20 mt-10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0 md:w-1/3">
                  <h3 className="text-3xl font-bold">Company</h3>
                  <ul className="space-y-2 mt-2">
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">About Us</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">Careers</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">Blog</Link>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 md:mb-0 md:w-1/3">
                  <h3 className="text-3xl font-bold">Services</h3>
                  <ul className="space-y-2 mt-2">
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">Ride</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">Delivery</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">GoodRide for Business</Link>
                    </li>
                  </ul>
                </div>

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

              <div className="flex flex-col md:flex-row justify-between mt-6">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-3xl font-bold">Quick Links</h3>
                  <ul className="space-y-2 mt-2">
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">Help Center</Link>
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
