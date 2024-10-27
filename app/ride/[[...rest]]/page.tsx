"use client";

import React from "react";
import { ClerkProvider, SignedIn, SignedOut, UserButton, RedirectToSignIn } from "@clerk/nextjs";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaSearch, FaUser, FaPlus, FaClock } from "react-icons/fa";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <LayoutContent>{children}</LayoutContent>
    </ClerkProvider>
  );
}

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <nav className="bg-black w-full p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-white text-xl font-bold">GoodRide</div>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </nav>

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
      {/* Get a ride panel */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Get a ride</h2>
        <div className="space-y-4">
          {/* Pickup location */}
          <div className="flex items-center border rounded-lg p-3">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Pickup location"
              value={pickupLocation}
              onChange={handlePickupChange}
              className="w-full outline-none"
            />
          </div>

          {/* Dropoff location */}
          <div className="flex items-center border rounded-lg p-3">
            <FaPlus className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Dropoff location"
              value={dropoffLocation}
              onChange={handleDropoffChange}
              className="w-full outline-none"
            />
          </div>

          {/* Pickup time */}
          <div className="flex items-center border rounded-lg p-3">
            <FaClock className="text-gray-500 mr-3" />
            <select className="w-full outline-none bg-transparent">
              <option>Pickup now</option>
              <option>Schedule for later</option>
            </select>
          </div>

          {/* Passenger options */}
          <div className="flex items-center border rounded-lg p-3">
            <FaUser className="text-gray-500 mr-3" />
            <select className="w-full outline-none bg-transparent">
              <option>For me</option>
              <option>For someone else</option>
            </select>
          </div>

          {/* Search button */}
          <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg" disabled>
            Search
          </button>
        </div>
      </div>

      {/* Map section */}
      <div className="w-full lg:w-2/3 h-[500px] bg-gray-200 rounded-lg shadow-lg overflow-hidden">
        {/* Google Map */}
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            center={userLocation || { lat: 29.97033945833065, lng: 76.79613676450772 }} // Default center if location not available
            zoom={14}
            mapContainerStyle={{ height: "100%", width: "100%" }}
          >
            {userLocation && (
              <Marker position={userLocation} />
            )}
            {drivers.map((driver, index) => (
              <Marker key={index} position={driver} icon="/path-to-driver-icon.png" />
            ))}
            {pickupLocation && (
              <Marker
                position={{ lat: userLocation?.lat || 0, lng: userLocation?.lng || 0 }}
                label="Pickup"
              />
            )}
            {dropoffLocation && (
              <Marker
                position={{ lat: userLocation?.lat || 0.01, lng: userLocation?.lng || 0.01 }} // Adjust for drop-off if necessary
                label="Dropoff"
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};
