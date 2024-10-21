import { useEffect, useState } from 'react';

// Preloader Component
const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading...');

  const loadingWords = [
    'Getting Things Ready...',
    'Fetching Your Ride...',
    'Preparing the Best Experience...',
    'Hold Tight!',
    'Connecting You...',
    'Almost There...',
    'Please Wait...',
    'Setting Up...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 2000); // Delay before loading the main content
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 500); // Delay for loading progress

    // Change loading text every 800ms
    const textInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingWords.length);
      setLoadingText(loadingWords[randomIndex]);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      {/* Preloader Content */}
      <div
        className={`flex flex-col items-center transition-transform duration-500 ${
          loading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-6xl font-bold text-white">GoodRide</h1>
        <p className="text-white mt-2">{loadingText}</p> {/* Loading text */}
        <div className="w-1/3 bg-gray-600 mt-4 rounded-full"> {/* Shortened bar */}
          <div
            className="bg-green-500 h-1 rounded-full transition-all duration-300" // Changed color to green
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader; // Exporting the Preloader component
