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
import { FaSearch, FaCar, FaBox, FaShoppingCart, FaPlus, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <LayoutContent>{children}</LayoutContent>
    </ClerkProvider>
  );
}

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState("Ride");

  return (
    <html lang="en">
      <body>
        <nav className="bg-white w-full p-4 shadow-md sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-black text-2xl font-bold">
              GoodRide
            </Link>

            {/* Centered Navbar Links */}
            <div className="flex-1 flex justify-center space-x-4 text-black">
              <button
                onClick={() => setActiveSection("Ride")}
                className={`flex items-center space-x-1 px-4 py-2 rounded-md relative ${
                  activeSection === "Ride" ? "font-bold text-black" : "text-gray-600"
                }`}
              >
                <FaCar className="mr-1" />
                <span>Ride</span>
                {activeSection === "Ride" && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-black rounded-full"></span>
                )}
              </button>
              <button
                onClick={() => setActiveSection("Packages")}
                className={`flex items-center space-x-1 px-4 py-2 rounded-md relative ${
                  activeSection === "Packages" ? "font-bold text-black" : "text-gray-600"
                }`}
              >
                <FaBox className="mr-1" />
                <span>Packages</span>
                {activeSection === "Packages" && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-black rounded-full"></span>
                )}
              </button>
              <button
                onClick={() => setActiveSection("Rentals")}
                className={`flex items-center space-x-1 px-4 py-2 rounded-md relative ${
                  activeSection === "Rentals" ? "font-bold text-black" : "text-gray-600"
                }`}
              >
                <FaShoppingCart className="mr-1" />
                <span>Rentals</span>
                {activeSection === "Rentals" && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-black rounded-full"></span>
                )}
              </button>
            </div>

            {/* Account Section */}
            <div>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </nav>

        <div className="min-h-screen bg-gray-50">
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>

          <SignedIn>
            {activeSection === "Ride" && <RideSection />}
            {activeSection === "Packages" && <ComingSoonSection title="Packages" />}
            {activeSection === "Rentals" && <ComingSoonSection title="Rentals" />}
          </SignedIn>

          {children}
        </div>
      </body>
    </html>
  );
};

// Ride Section with Map and Pickup/Dropoff Template
const RideSection = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [pickupLocation, setPickupLocation] = useState<string>("");
  const [dropoffLocation, setDropoffLocation] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [funnyMessage, setFunnyMessage] = useState("Loading...");

  const funnyMessages = [
    "Locating your ride... patience is a virtue!",
    "Almost there, just fixing a virtual flat tire!",
    "Double-checking the GPS, stay tuned!",
    "Hold tight, grabbing the map!",
    "Pretending we’re faster than light...",
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLoading(false);
        },
        (error) => console.error("Error getting location:", error),
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * funnyMessages.length);
      setFunnyMessage(funnyMessages[randomIndex]);
    }, 2000);

    return () => clearInterval(messageInterval);
  }, []);

  const handlePickupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPickupLocation(event.target.value);
  };

  const handleDropoffChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDropoffLocation(event.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl p-8 gap-8 mx-auto">
      {/* Pickup/Dropoff Input Section */}
      <div className="w-[30%] lg:w-1/3 bg-white p-4 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Get a Ride</h2>
        <div className="space-y-4">
          <div className="flex items-center border rounded-lg p-3 bg-gray-50 shadow-sm">
            <FaCar className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Pickup location"
              value={pickupLocation}
              onChange={handlePickupChange}
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          <div className="flex items-center border rounded-lg p-3 bg-gray-50 shadow-sm">
            <FaPlus className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Dropoff location"
              value={dropoffLocation}
              onChange={handleDropoffChange}
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          <button
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
            disabled={!pickupLocation || !dropoffLocation}
          >
            <FaSearch className="inline-block mr-2" /> Search
          </button>
        </div>
      </div>

      {/* Map Section with Enhanced Spinner */}
      <div className="w-full lg:w-2/3 h-[600px] bg-gray-200 rounded-lg shadow-lg overflow-hidden relative">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="loader mb-4"></div>
            <p className="text-lg font-semibold text-gray-600">{funnyMessage}</p>
          </div>
        ) : (
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={userLocation || { lat: 0, lng: 0 }}
              zoom={14}
            >
              {userLocation && <Marker position={userLocation} />}
            </GoogleMap>
          </LoadScript>
        )}
      </div>
    </div>
  );
};

// Enhanced Coming Soon Section with Animated Spinner and Random Messages
const ComingSoonSection = ({ title }: { title: string }) => {
  const [comingSoonMessage, setComingSoonMessage] = useState("Loading...");

  const comingSoonMessages = [
    "Something amazing is on the way!",
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * comingSoonMessages.length);
      setComingSoonMessage(comingSoonMessages[randomIndex]);
    }, 2000);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-black border-solid mb-4"></div>
      <h2 className="text-4xl font-bold text-gray-800 mb-2">{title} Section</h2>
      <p className="text-gray-600 text-xl">{comingSoonMessages}</p>
    </div>
  );
};
