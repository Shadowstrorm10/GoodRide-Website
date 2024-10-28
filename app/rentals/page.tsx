// rentals/page.tsx

"use client";

import React from "react";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/nextjs";
import { FaSearch, FaUser, FaPlus, FaClock, FaCar, FaHome, FaBox, FaShoppingCart, FaHandPaper } from "react-icons/fa";
import Link from "next/link";
import { FaSuitcase } from "react-icons/fa6";

const RentalsPage = () => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="overflow-hidden">
          <nav className="bg-white w-full p-4 shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              {/* Logo */}
              <div className="text-black text-2xl font-bold">GoodRide</div>

              {/* Centered Navbar Links */}
              <div className="flex-1 flex justify-center space-x-6">
                <Link href="/ride" className="flex items-center text-black">
                  <FaCar className="mr-1" />
                  Ride
                </Link>
                <Link href="/packages" className="flex items-center text-black">
                  <FaBox className="mr-1" />
                  Packages
                </Link>
                <Link href="/rentals" className="flex items-center font-bold text-black border-b-2 border-black">
                  <FaShoppingCart className="mr-1" />
                  Rentals
                </Link>
              </div>

              {/* Account Section */}
              <div>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </div>
          </nav>

          <div className="flex items-center justify-center h-screen bg-gray-100 animate-fade-in">
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>

            <SignedIn>
              <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto w-full lg:space-x-6 p-4 space-y-4 lg:space-y-0">
                
                {/* Rental Card */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 w-full lg:w-1/3">
                  <div className="flex flex-col items-center">
                    <img src="/car-illustration.png" alt="Car illustration" className="w-40 h-40 mb-4" />
                    <h2 className="text-xl font-bold text-gray-800">Hourly</h2>
                    <ul className="space-y-2 mt-4 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <FaClock className="text-gray-500" />
                        <span>Keep a car and driver with you for hours</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FaSuitcase className="text-gray-500" />
                        <span>Ideal for business meetings, tourist travel, and multiple stops</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FaHandPaper className="text-gray-500" />
                        <span>As many stops as you need</span>
                      </li>
                    </ul>
                    <button className="mt-6 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200">
                      Get started
                    </button>
                  </div>
                </div>

                {/* Map Section */}
                <div className="w-full lg:w-2/3 h-96 rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                  <iframe
                    title="Map"
                    src="https://www.google.com/maps/@31.4631534,76.2594977,3338m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SignedIn>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RentalsPage;
