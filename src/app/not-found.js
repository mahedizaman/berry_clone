import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-purple-500">404</h1>
      <p className="mt-4 text-gray-600 text-lg">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound