"use client";

import React, { useState, useEffect } from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaSearch, FaUser, FaPlus, FaClock, FaCar, FaHome, FaBox, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <LayoutContent>{children}</LayoutContent>
    </ClerkProvider>
  );
}

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false); // Clean up on unmount
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        <nav className="bg-white w-full p-4 shadow-md sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-black text-2xl font-bold">GoodRide</div>

            <div className="flex-1 flex justify-center space-x-8">
              <Link href="/ride">
                <div className={`flex items-center space-x-2 ${pathname === "/ride" ? "text-black font-bold border-b-2 border-black pb-1" : "text-black"}`}>
                  <FaCar />
                  <span>Ride</span>
                </div>
              </Link>
              <Link href="/packages">
                <div className={`flex items-center space-x-2 ${pathname === "/packages" ? "text-black font-bold border-b-2 border-black pb-1" : "text-black"}`}>
                  <FaBox />
                  <span>Packages</span>
                </div>
              </Link>
              <Link href="/rentals">
                <div className={`flex items-center space-x-2 ${pathname === "/rentals" ? "text-black font-bold border-b-2 border-black pb-1" : "text-black"}`}>
                  <FaShoppingCart />
                  <span>Rentals</span>
                </div>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </nav>

        <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} min-h-screen flex items-center justify-center bg-gray-100`}>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>

          <SignedIn>
            <Dashboard />
          </SignedIn>

          {children}
        </div>
      </body>
    </html>
  );
};

const Dashboard = () => {
  const [userLocation, setUserLocation] = React.useState<{ lat: number; lng: number } | null>(null);
  const [drivers, setDrivers] = React.useState<{ lat: number; lng: number }[]>([]);
  const [pickupLocation, setPickupLocation] = React.useState<string>("");
  const [dropoffLocation, setDropoffLocation] = React.useState<string>("");

  React.useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
            fetchNearbyDrivers(latitude, longitude);
          },
          (error) => console.error("Error getting location:", error),
          { enableHighAccuracy: true }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  const fetchNearbyDrivers = (lat: number, lng: number) => {
    setDrivers([
      { lat: lat + 0.01, lng: lng + 0.01 },
      { lat: lat - 0.01, lng: lng - 0.01 },
    ]);
  };

  const handlePickupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPickupLocation(event.target.value);
  };

  const handleDropoffChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDropoffLocation(event.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl p-8 gap-8">
      <div className="w-[30%] lg:w-1/3 bg-white p-4 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Get a Ride</h2>
        <div className="space-y-4">
          <div className="flex items-center border rounded-lg p-3 bg-gray-50 shadow-sm">
            <FaCar className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Pickup location"
              value={pickupLocation}
              onChange={handlePickupChange}
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          <div className="flex items-center border rounded-lg p-3 bg-gray-50 shadow-sm">
            <FaPlus className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Dropoff location"
              value={dropoffLocation}
              onChange={handleDropoffChange}
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          <div className="flex items-center border rounded-lg p-3 bg-gray-50 shadow-sm">
            <FaClock className="text-gray-500 mr-3" />
            <select className="w-full outline-none bg-transparent text-gray-700">
              <option>Pickup now</option>
              <option>Schedule for later</option>
            </select>
          </div>

          <div className="flex items-center border rounded-lg p-3 bg-gray-50 shadow-sm">
            <FaUser className="text-gray-500 mr-3" />
            <select className="w-full outline-none bg-transparent text-gray-700">
              <option>For me</option>
              <option>For someone else</option>
            </select>
          </div>

          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-black transition duration-200" disabled={!pickupLocation || !dropoffLocation}>
            <FaSearch className="inline-block mr-2" /> Search
          </button>
        </div>
      </div>

      <div className="w-full lg:w-2/3 h-[600px] bg-gray-200 rounded-lg shadow-lg overflow-hidden">
        {/* Map component goes here */}
      </div>
    </div>
  );
};
