import React from "react";
import { Calendar, Clock, User, ArrowRight, Coffee, Bug, Rocket, Heart } from "lucide-react";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Why My Code Works at 3 AM But Not at 9 AM",
      excerpt: "The mysterious phenomenon of debugging at different hours. Spoiler: It's not the coffee, it's the sleep deprivation.",
      author: "Pavan",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Programming Humor",
      icon: Coffee,
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "The Great Console.log() Mystery",
      excerpt: "Why does adding console.log() suddenly make your bug disappear? A detective story for developers.",
      author: "Pavan",
      date: "2024-01-12",
      readTime: "3 min read",
      category: "Debugging",
      icon: Bug,
      color: "bg-red-100 text-red-800"
    },
    {
      title: "How I Explained React to My Grandma",
      excerpt: "She still thinks I'm building websites with actual bricks and mortar. But at least she understands components now!",
      author: "Pavan",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "React",
      icon: Heart,
      color: "bg-pink-100 text-pink-800"
    },
    {
      title: "The Day I Deployed to Production on Friday",
      excerpt: "A horror story that every developer knows too well. Spoiler: The weekend was... eventful.",
      author: "Pavan",
      date: "2024-01-08",
      readTime: "4 min read",
      category: "DevOps",
      icon: Rocket,
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Why 'It Works on My Machine' is a Valid Excuse",
      excerpt: "A comprehensive defense of the most famous developer phrase. Includes scientific evidence and legal precedents.",
      author: "Pavan",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Programming Philosophy",
      icon: Coffee,
      color: "bg-green-100 text-green-800"
    },
    {
      title: "The Art of Naming Variables",
      excerpt: "From 'temp' to 'data' to 'thing' - a journey through the creative process of variable naming.",
      author: "Pavan",
      date: "2024-01-03",
      readTime: "8 min read",
      category: "Code Quality",
      icon: Bug,
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 px-3 sm:px-4 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-8 sm:mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
              The Funny Side of Code
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Where programming meets humor, and bugs become features. Welcome to my digital diary of coding adventures! 🚀
            </p>
            <div className="flex justify-center mt-4 sm:mt-6">
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Blog Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-102 sm:hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Blog Header */}
              <div className="relative p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${post.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <post.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <span className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs font-semibold ${post.color} shadow-sm`}>
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Blog Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs text-gray-500 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
                      <User size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span className="font-medium text-xs">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
                      <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span className="text-xs">{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-3 py-1 rounded-full w-fit">
                    <Clock size={12} className="sm:w-3.5 sm:h-3.5" />
                    <span className="text-xs">{post.readTime}</span>
                  </div>
                </div>
                
                {/* Read More Button */}
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  <span>Read More</span>
                  <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Coming Soon Section */}
        <div className="mt-12 sm:mt-20 text-center px-4">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-3xl mx-auto overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">😄</div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                More Laughs Coming Soon!
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
                I'm working on more hilarious coding stories, debugging adventures, and programming confessions. 
                Subscribe to get notified when I publish my next masterpiece! 🚀
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Subscribe for Updates
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg sm:rounded-xl hover:bg-gray-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                  Suggest a Topic
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;