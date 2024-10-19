import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black scale-85"> {/* Adjusted scale for overall zoom out */}
      {/* Header - Adjusted with links near the logo and other options on the right */}
      <header className="sticky top-0 bg-black z-10 flex justify-between items-center w-full px-4 py-4"> {/* Reduced padding */}
        <div className="flex items-center space-x-6"> {/* Increased space between logo and nav */}
          <h1 className="text-xl font-bold text-white ml-4 mr-6">Uber</h1> {/* Adjusted margins */}
          <nav className="space-x-4 flex items-center"> {/* Reduced space between nav links */}
            <a href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded">Ride</a>
            <a href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded">Drive</a>
            <a href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded">Business</a>
            <a href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded">About</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4"> {/* Reduced space */}
          <a href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded">EN</a>
          <a href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded">Help</a>
          <a href="#" className="text-white font-bold hover:bg-gray-200 hover:bg-opacity-75 transition px-2 py-1 rounded">Log in</a>
          <button className="bg-white text-black font-bold px-3 py-1 rounded-md hover:bg-gray-300 transition">
            Sign up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl w-full mx-auto px-4 py-10"> {/* Reduced padding */}
        <main className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="text-left md:w-1/2 bg-black backdrop-blur-lg rounded-lg p-6 shadow-lg"> {/* Reduced padding */}
            <h2 className="text-5xl font-bold mb-4 text-white leading-tight"> {/* Adjusted font size */}
              Go anywhere with Uber
            </h2>
            <p className="text-white mb-4"> {/* Reduced margin */}
              Request a ride, hop in, and go.
            </p>
            <div className="space-y-2"> {/* Reduced space between inputs */}
              <input
                type="text"
                placeholder="Enter location"
                className="w-[80%] px-3 py-2 rounded-md border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Enter destination"
                className="w-[80%] px-3 py-2 rounded-md border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-black"
              />
              <button className="w-[30%] bg-white text-black-bold py-2 rounded-md hover:bg-gray-800 transition font-bold">
                See prices
              </button>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="mt-10 md:mt-0 md:ml-8 md:w-1/2 flex justify-center"> {/* Adjusted margin */}
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
    </div>
  );
}
