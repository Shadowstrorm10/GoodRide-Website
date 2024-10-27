// app/404.tsx

import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-4 text-blue-600 underline">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default Custom404;
