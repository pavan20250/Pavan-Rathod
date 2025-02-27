import React from "react";

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
        Welcome to the Blogs Page
      </h1>
      
      {/* Subtitle */}
      <p className="text-base sm:text-lg text-gray-600 mb-4 text-center">
        Explore the latest blogs and articles crafted just for you.
      </p>
      
      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Blog Card Example */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <p className="text-gray-600 text-sm sm:text-base">
            Working on blogs. Stay tuned for more updates and exciting content!
          </p>
        </div>

        {/* Add more blog cards as needed */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <p className="text-gray-600 text-sm sm:text-base">
            Another blog coming soon! Stay connected for more insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;