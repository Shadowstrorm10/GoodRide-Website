"use client";

import React, { useState, useEffect } from "react";
import { FaCar, FaBox, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function PackagesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false); // Clean up on unmount
  }, []);

  return (
    <LayoutContent>
      <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} max-w-7xl mx-auto py-10 px-4`}>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Packages</h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover a variety of packages tailored to meet your transportation needs. Whether you need
          a quick ride across town or a full-day rental, we’ve got options for you.
        </p>
        
        {/* Sample packages section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <PackageCard title="Basic Ride" description="A quick and affordable ride option." />
          <PackageCard title="Family Package" description="Roomy rides for the whole family." />
          <PackageCard title="Business Travel" description="Premium service for professionals." />
          <PackageCard title="Daily Rental" description="Rent a car for the entire day." />
          <PackageCard title="Long-Distance" description="Reliable rides across longer distances." />
          <PackageCard title="VIP Service" description="Luxury rides for special occasions." />
        </div>
      </div>
    </LayoutContent>
  );
}

const PackageCard = ({ title, description }: { title: string; description: string }) => (
  <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200 bg-white">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <nav className="bg-white w-full p-4 shadow-md sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-black text-2xl font-bold">GoodRide</div>

            {/* Navbar links */}
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

            {/* Profile section */}
            <div className="flex items-center space-x-4">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </nav>

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
};
