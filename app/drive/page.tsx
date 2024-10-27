// pages/login.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { FaApple, FaQrcode } from 'react-icons/fa';
import Link from 'next/link';

const DrivePage = () => {
  const [loading, setLoading] = useState(true);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleRidePageRedirect = () => {
    setRedirecting(true);
    setLoading(true); // Show loading spinner
    // Simulate loading for 2 seconds before redirecting
    setTimeout(() => {
      setLoading(false);
      // Here you would typically navigate to the Ride page
      // For example, using next/router
      window.location.href = '/ride'; // Redirect to Ride page
    }, 2000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-black p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <Link href="/" className="text-white">
              GoodRide
            </Link>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-center text-xl font-bold mb-6">What's your phone number or email?</h2>
          <input
            type="text"
            placeholder="Enter phone number or email"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
          />
          <button className="w-full bg-black text-white py-2 rounded mb-4 hover:bg-gray-800" onClick={handleRidePageRedirect}>
            Continue
          </button>

          <div className="flex items-center justify-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login Button with Colored Google Logo */}
          <button className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded mb-4 hover:bg-gray-100">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
              alt="Google Logo" 
              className="mr-2 w-5 h-5" 
            /> 
            Continue with Google
          </button>

          {/* Apple Login Button */}
          <button className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded mb-4 hover:bg-gray-100">
            <FaApple className="mr-2" /> Continue with Apple
          </button>

          <div className="flex items-center justify-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* QR Code Login Button */}
          <button className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded hover:bg-gray-100">
            <FaQrcode className="mr-2" /> Log in with QR code
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            By proceeding, you consent to get calls, WhatsApp or SMS messages...
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrivePage;
