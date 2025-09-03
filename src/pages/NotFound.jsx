import React from "react";
import { Helmet } from "react-helmet-async";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 | Page Not Found</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mb-6">
          404
        </h1>

        {/* Message */}
        <p className="text-gray-400 text-lg md:text-xl mb-10 text-center max-w-lg">
          Oops! The page you’re looking for doesn’t exist.  
          It might have been moved or deleted.
        </p>

        {/* Back Home Button */}
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-90 text-white font-semibold rounded-lg shadow-lg transition"
        >
          <Home size={20} /> Go Back Home
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
