// components/Preloader.tsx
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100; // Ensure it doesn't exceed 100%
        }
        return prev + 10; // Adjust the increment as needed
      });
    }, 300); // Adjust the speed of the loading progress here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <h1 className="text-6xl font-bold text-white mb-4">GoodRide</h1>
      <div className="w-64 bg-gray-300 rounded-full h-2"> {/* Make height thinner */}
        <div
          className={`h-full bg-green-500 rounded-full`}
          style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}
        />
      </div>
      {progress === 100 && (
        <style>{`
          @keyframes slide-up {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-100%);
            }
          }
          .slide-up {
            animation: slide-up 0.5s forwards;
          }
        `}</style>
      )}
    </div>
  );
};

export default Preloader;
