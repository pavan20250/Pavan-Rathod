import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, ArrowLeft, Coffee, Bug, Rocket, Heart } from "lucide-react";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Why My Code Works at 3 AM But Not at 9 AM",
      excerpt: "The mysterious phenomenon of debugging at different hours. Spoiler: It's not the coffee.",
      date: "2024-01-15",
      readTime: "5 min",
      category: "Humor",
      icon: Coffee,
      color: "#d4a853",
      index: "01",
    },
    {
      title: "The Great Console.log() Mystery",
      excerpt: "Why does adding console.log() suddenly make your bug disappear? A detective story.",
      date: "2024-01-12",
      readTime: "3 min",
      category: "Debugging",
      icon: Bug,
      color: "#e05c5c",
      index: "02",
    },
    {
      title: "How I Explained React to My Grandma",
      excerpt: "She still thinks I'm building websites with actual bricks. But she understands components now.",
      date: "2024-01-10",
      readTime: "7 min",
      category: "React",
      icon: Heart,
      color: "#a78bfa",
      index: "03",
    },
    {
      title: "The Day I Deployed to Production on Friday",
      excerpt: "A horror story every developer knows too well. The weekend was... eventful.",
      date: "2024-01-08",
      readTime: "4 min",
      category: "DevOps",
      icon: Rocket,
      color: "#5b8af0",
      index: "04",
    },
    {
      title: "Why 'It Works on My Machine' is Valid",
      excerpt: "A comprehensive defense of the most famous developer phrase. With evidence.",
      date: "2024-01-05",
      readTime: "6 min",
      category: "Philosophy",
      icon: Coffee,
      color: "#4caf7d",
      index: "05",
    },
    {
      title: "The Art of Naming Variables",
      excerpt: "From 'temp' to 'data' to 'thing' — a journey through variable naming creativity.",
      date: "2024-01-03",
      readTime: "8 min",
      category: "Code Quality",
      icon: Bug,
      color: "#d4a853",
      index: "06",
    },
  ];

  return (
    <div
      className="min-h-screen relative"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* Grid overlay */}
      <div className="fixed inset-0 grid-overlay pointer-events-none" />

      {/* Ambient orb */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(212,168,83,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 md:px-12 py-8 sm:py-10">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 transition-colors link-arrow"
          style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: '"DM Mono", monospace' }}
        >
          <ArrowLeft size={13} />
          cd ~/home
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="section-label mb-4">Writing</div>
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-4">
            The Funny Side<br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>of Code</span>
          </h1>
          <p className="text-sm sm:text-base max-w-lg" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Where programming meets humor and bugs become features.
            Technical tales from the trenches.
          </p>
        </header>

        {/* Blog grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {blogPosts.map((post) => {
            const Icon = post.icon;
            return (
              <article
                key={post.index}
                className="group relative rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-0.5 card card-glow cursor-pointer"
              >
                {/* Top accent line */}
                <div
                  className="h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${post.color}60, transparent)` }}
                />

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                      style={{ background: `${post.color}15`, color: post.color }}
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </div>
                    <span
                      className="font-mono text-2xl font-bold opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{ color: post.color }}
                    >
                      {post.index}
                    </span>
                  </div>

                  {/* Category */}
                  <span
                    className="font-mono text-[9px] uppercase tracking-widest mb-3 inline-block"
                    style={{ color: post.color }}
                  >
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2
                    className="text-sm font-semibold mb-2 line-clamp-2 leading-snug transition-colors duration-200"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    className="text-xs leading-relaxed line-clamp-3 flex-1 mb-4"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Meta + link */}
                  <div
                    className="flex items-center justify-between pt-4"
                    style={{ borderTop: '1px solid var(--border)' }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>
                        <Calendar size={10} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>
                        <Clock size={10} />
                        {post.readTime}
                      </span>
                    </div>
                    <span
                      className="flex items-center gap-1 text-[11px] font-mono opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0"
                      style={{ color: post.color }}
                    >
                      Read
                      <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-6 sm:p-8 text-center"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            More coming soon
          </span>
          <h2 className="heading-display text-2xl sm:text-3xl mt-3 mb-3">
            More stories & updates
          </h2>
          <p className="text-sm max-w-md mx-auto mb-8" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            New posts on coding, debugging, and dev life are in the works.
            Get notified when they go live.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:pavannaik0203@gmail.com?subject=Subscribe to blog updates"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{ background: 'var(--accent)', color: '#0c0c0f' }}
            >
              Subscribe for updates
            </a>
            <a
              href="mailto:pavannaik0203@gmail.com?subject=Blog topic suggestion"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                background: 'transparent',
              }}
            >
              Suggest a topic
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;