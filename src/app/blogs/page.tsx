import React from "react";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, ArrowLeft, Coffee, Bug, Rocket, Heart } from "lucide-react";

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
      color: "bg-amber-500/10 text-amber-700 border-amber-200/60",
    },
    {
      title: "The Great Console.log() Mystery",
      excerpt: "Why does adding console.log() suddenly make your bug disappear? A detective story for developers.",
      author: "Pavan",
      date: "2024-01-12",
      readTime: "3 min read",
      category: "Debugging",
      icon: Bug,
      color: "bg-rose-500/10 text-rose-700 border-rose-200/60",
    },
    {
      title: "How I Explained React to My Grandma",
      excerpt: "She still thinks I'm building websites with actual bricks and mortar. But at least she understands components now!",
      author: "Pavan",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "React",
      icon: Heart,
      color: "bg-pink-500/10 text-pink-700 border-pink-200/60",
    },
    {
      title: "The Day I Deployed to Production on Friday",
      excerpt: "A horror story that every developer knows too well. Spoiler: The weekend was... eventful.",
      author: "Pavan",
      date: "2024-01-08",
      readTime: "4 min read",
      category: "DevOps",
      icon: Rocket,
      color: "bg-sky-500/10 text-sky-700 border-sky-200/60",
    },
    {
      title: "Why 'It Works on My Machine' is a Valid Excuse",
      excerpt: "A comprehensive defense of the most famous developer phrase. Includes scientific evidence and legal precedents.",
      author: "Pavan",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Programming Philosophy",
      icon: Coffee,
      color: "bg-emerald-500/10 text-emerald-700 border-emerald-200/60",
    },
    {
      title: "The Art of Naming Variables",
      excerpt: "From 'temp' to 'data' to 'thing' - a journey through the creative process of variable naming.",
      author: "Pavan",
      date: "2024-01-03",
      readTime: "8 min read",
      category: "Code Quality",
      icon: Bug,
      color: "bg-violet-500/10 text-violet-700 border-violet-200/60",
    },
  ];

  return (
    <div className="min-h-screen relative bg-white overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 mb-3 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden />
          Back to home
        </Link>
        {/* Page header */}
        <header className="text-center mb-8 md:mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-slate-400 mb-2">
            Blog
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-2 max-w-2xl mx-auto">
            The Funny Side of Code
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Where programming meets humor, and bugs become features.
          </p>
        </header>

        {/* Blog grid */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => {
            const Icon = post.icon;
            return (
              <article
                key={index}
                className="card-apple-mirror group/card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium border ${post.color}`}>
                      <Icon className="w-3 h-3" aria-hidden />
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-base font-semibold text-slate-900 mb-1.5 line-clamp-2 group-hover/card:text-slate-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-snug mb-3 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 mt-auto pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" aria-hidden />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" aria-hidden />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" aria-hidden />
                      {post.readTime}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA section */}
        <section className="mt-10 sm:mt-12">
          <div className="card-apple-mirror relative rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:scale-[1.01] max-w-3xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-slate-400 mb-2">
              More coming soon
            </p>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              More stories & updates
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
              New posts on coding, debugging, and dev life are in the works. Get notified when they go live.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <button
                type="button"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
              >
                Subscribe for updates
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border-2 border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                Suggest a topic
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
