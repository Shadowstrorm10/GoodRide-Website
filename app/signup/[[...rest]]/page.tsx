// /app/signup/[[...rest]]/page.tsx

"use client";

import { SignUp, SignIn, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const SignUpPage = () => {
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between sign-up and sign-in

  useEffect(() => {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star absolute bg-white rounded-full'; // Tailwind classes for stars
      const size = Math.random() * 2 + 1; // Random size between 1px and 3px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animation = `twinkle ${Math.random() * 1.5 + 0.5}s infinite alternate`;
      starsContainer.appendChild(star);
    }

    // Create shooting stars
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star absolute bg-white rounded-full';
      shootingStar.style.width = '2px';
      shootingStar.style.height = '2px';
      shootingStar.style.top = `${Math.random() * 100}vh`;
      shootingStar.style.left = '-5px'; // Start off the left side

      const beam = document.createElement('div');
      beam.className = 'shooting-star-beam absolute bg-white';
      beam.style.width = '1px';
      beam.style.height = '30px'; // Length of the beam
      beam.style.top = '0';
      beam.style.left = '0';
      beam.style.opacity = '0.5'; // Slightly transparent for the beam

      shootingStar.appendChild(beam);
      starsContainer.appendChild(shootingStar);

      const shootDuration = Math.random() * 5 + 1; // Random duration for shooting star
      shootingStar.style.animation = `shoot ${shootDuration}s forwards`;
      beam.style.animation = `beam ${shootDuration}s forwards`;

      // Remove shooting star and beam after animation ends
      shootingStar.addEventListener('animationend', () => {
        shootingStar.remove();
      });
    };

    // Create shooting stars every 2 seconds
    const shootingStarInterval = setInterval(createShootingStar, 2000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(shootingStarInterval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen relative overflow-hidden bg-black">
      {/* Background with Stars */}
      <div className="absolute inset-0 stars"></div>

      {/* Good Ride Text */}
      <div className="absolute left-10 top-10">
        <h1 className="text-6xl font-bold text-white">GoodRide</h1>
      </div>

      {/* Conditional Rendering for SignUp or SignIn */}
      {isSignUp ? (
        <div>
          <SignUp
            path="/signup"
            routing="path"
            signInUrl="/signup" // This will navigate back to the sign-up page
            afterSignUpUrl="/ride" // After sign-up, redirect to the ride page
          />
          <p className="text-white text-center mt-4">
            Already have an account?{' '}
            <button
              onClick={() => setIsSignUp(false)}
              className="text-blue-400 hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      ) : (
        <div>
          <SignIn
            path="/signin"
            routing="path"
            signUpUrl="/signup" // This will navigate back to the sign-up page
            afterSignInUrl="/ride" // After sign-in, redirect to the ride page
          />
          <p className="text-white text-center mt-4">
            Don't have an account?{' '}
            <button
              onClick={() => setIsSignUp(true)}
              className="text-blue-400 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
