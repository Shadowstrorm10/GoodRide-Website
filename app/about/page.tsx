// app/about/page.tsx

"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { FaChevronDown, FaEarthAsia, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { Metadata } from 'next/types';

const funnyMessages = [
  "About us",
  "Have a GoodRide 😎", 
];

const metadata: Metadata = {
  title: "AboutGoodRide",
  description: "Have a goodride with us.",
};

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
    }, 2000); // Stop loading after 2 seconds

    return () => {
      clearInterval(messageInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* <Head>
        <title>About Us | GoodRide</title>
        <meta name="description" content="Learn more about GoodRide and our vision." />
      </Head> */}
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
          <h1 className="text-center text-6xl font-bold">
            {funnyMessages[currentMessageIndex]}
          </h1>
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('')" }}
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
          <div>
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-[393px]" style={{ backgroundImage: "url('/your-image-url.jpg')" }}>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 text-white text-center p-12">
                <h1 className="text-5xl font-bold">About Us</h1>
              </div>
            </section>

            {/* Reimagining Movement Section */}
            <section className="py-12 px-6 md:px-24 text-center">
              <h2 className="text-3xl font-bold mb-6">We reimagine the way the world moves for the better</h2>
              <p className="text-lg mb-8">
                Movement is what we power. It’s our lifeblood. It’s what gets us out of bed each morning. It pushes us to constantly reimagine how we can move better for you. For all the places you want to go. For all the things you want to get. For all the ways you want to earn. Across the entire world. In real-time. At the incredible speed of now.
              </p>
              <a href="#" className="underline-animation text-black">Read our full mission statement</a>
            </section>

            {/* CEO Letter Section */}
            <section className="bg-gray-50 py-12 px-6 md:px-24 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12">
                <h2 className="text-3xl font-bold mb-4">A letter from our Co-Founders</h2>
                <p className="text-lg mb-8">
                  Read about our team’s commitment to provide everyone on our global platform with the technology that can help them move ahead.
                </p>
                <a href="#" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-900">Read the letter</a>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img src="/ceo-image-url.jpg" alt="CEO image" className="w-full rounded-lg shadow-lg" />
              </div>
            </section>

            {/* Sustainability Section */}
            <section className="py-12 px-6 md:px-24 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <img src="/Sustainability.png" alt="Rides and Beyond" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-4">Sustainability</h2>
                <p className="text-lg mb-8">
                  In addition to helping riders find a way to go from point A to point B, we’re helping people order food quickly and affordably, removing barriers to healthcare, creating new freight-booking solutions, and helping companies provide a seamless employee travel experience. And always helping drivers and couriers earn.
                </p>
                <a href="#" className="underline-animation text-black  mr-4">How to use the app</a>
                <a href="#" className="underline-animation text-black">Our offerings</a>
              </div>
            </section>

            {/* Rides and Beyond Section */}
            <section className="py-12 px-6 md:px-24 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <img src="/ride-beyond-image.png" alt="Rides and Beyond" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-4">Rides and Beyond</h2>
                <p className="text-lg mb-8">
                  In addition to helping riders find a way to go from point A to point B, we’re helping people order food quickly and affordably, removing barriers to healthcare, creating new freight-booking solutions, and helping companies provide a seamless employee travel experience. And always helping drivers and couriers earn.
                </p>
                <a href="#" className="underline-animation text-black mr-4">How to use the app</a>
                <a href="#" className="underline-animation text-black">Our offerings</a>
              </div>
            </section>

            {/* Safety Section */}
            <section className="py-12 px-6 md:px-24 flex flex-col md:flex-row items-center bg-gray-50">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Your safety drives us</h2>
                <p className="text-lg mb-8">
                  Whether you’re in the back seat or behind the wheel, your safety is essential. We are committed to doing our part, and technology is at the heart of our approach. We partner with safety advocates and develop new technologies and systems to help improve safety and help make it easier for everyone to get around.
                </p>
                <a href="#" className="underline-animation text-black">Learn more</a>
              </div>
              <div className="md:w-1/2 flex justify-center md:pl-12 mt-8 md:mt-0">
                <img src="/safety-icon.svg" alt="Safety Icon" className="w-100 h-100 shadow-lg" />
              </div>
            </section>

            {/* Company Info Section */}
            <section className="py-12 px-6 md:px-24 bg-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Company Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: Leadership */}
                <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
                  <img src="/leadership-image.jpg" alt="Leadership" className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold mb-2">Who’s driving us</h3>
                  <p className="text-lg">
                    We’re building a culture within that emphasizes doing the right thing, period, for riders, drivers, and employees.
                  </p>
                  <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">See our leadership</a>
                </div>

                {/* Card 2: Diversity */}
                <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
                  <img src="/diversity-image.jpg" alt="Diversity" className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold mb-2">Getting diversity right</h3>
                  <p className="text-lg">
                    We create a workplace where authenticity is celebrated, where everyone can thrive, and where diversity is a strength.
                  </p>
                </div>

                {/* Card 3: Integrity */}
                <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
                  <img src="/integrity-image.jpg" alt="Integrity" className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold mb-2">Acting with integrity</h3>
                  <p className="text-lg">
                    Our Ethics & Compliance Program emphasizes doing what’s right at all levels of the company, driving transparency and ethical behavior.
                  </p>
                  <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Learn more</a>
                </div>
              </div>
            </section>
          </div>

          <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
              
              {/* Keep up with the latest */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
                <div>
                  <div className="text-4xl mb-4">
                    <i className="fa-solid fa-bullhorn"></i>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Newsroom</h3>
                  <p className="text-gray-500 mb-4">
                    Get announcements about partnerships, app updates, initiatives, and more near you and around the world.
                  </p>
                  <a href="#" className="text-black underline">
                    Go to Newsroom
                  </a>
                </div>
                <div>
                  <div className="text-4xl mb-4">
                    <i className="fa-solid fa-blog"></i>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Blog</h3>
                  <p className="text-gray-500 mb-4">
                    Find new places to explore and learn about Uber products, partnerships, and more.
                  </p>
                  <a href="#" className="text-black underline">
                    Read our posts
                  </a>
                </div>
                <div>
                  <div className="text-4xl mb-4">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Investor relations</h3>
                  <p className="text-gray-500 mb-4">
                    Download financial reports, see next-quarter plans, and read about our corporate responsibility initiatives.
                  </p>
                  <a href="#" className="text-black underline">
                    Learn more
                  </a>
                </div>
              </div>

              {/* Come reimagine with us */}
              <div className="bg-white py-12">
                <div className="text-center">
                  <div className="mb-6">
                    <i className="fa-solid fa-globe text-6xl text-blue-600"></i>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Come reimagine with us</h2>
                  <p className="text-gray-500 mb-6">Search open roles and join us in creating new ways to move the world.</p>
                  <a
                    href="#"
                    className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
                  >
                    Search open roles
                  </a>
                </div>
              </div>
            </div>
          </div>


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
