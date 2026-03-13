"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { site } from "@/lib/site";

type GitHubActivity = {
  user: { login: string; publicRepos: number; contributions: number };
  recentCommits: { repo: string; message: string; date: string; url: string }[];
};

const nowEntries = [
  { key: "building", value: "MindCare AI (startup) & sharpening full-stack skills" },
  { key: "reading", value: "Design systems docs, startup blogs" },
  { key: "using", value: "Next.js, TypeScript, Vercel, Figma" },
];

const changelogEntries = [
  { version: "1.3.0", date: "2025-11", note: "Shipped MindCare AI · Startup idea live" },
  { version: "1.2.0", date: "2025-05", note: "Joined Mongrov as Developer" },
  { version: "1.1.0", date: "2024-05", note: "Full Stack Developer @ Redwood Partners" },
  { version: "1.0.0", date: "2024", note: "First dev role @ Zummit Infolabs" },
  { version: "0.1.0", date: "—", note: "Started building for the web" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 24 },
  },
};

const MacTitleBar = ({ title }: { title: string }) => (
  <div
    className="relative flex items-center justify-center shrink-0 h-10 px-4 border-b border-black/10"
    style={{
      background: "linear-gradient(180deg, #f0f0f0 0%, #e5e5e5 100%)",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}
  >
    <div className="absolute left-4 flex items-center gap-2" aria-hidden>
      <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)" }} />
      <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)" }} />
      <span className="w-3 h-3 rounded-full" style={{ background: "#28c840", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)" }} />
    </div>
    <span className="text-[13px] font-medium text-center truncate max-w-[80%]" style={{ color: "#3c3c3c" }}>
      {title}
    </span>
  </div>
);

const NowAndChangelog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [github, setGithub] = useState<GitHubActivity | null>(null);
  const [githubLoading, setGithubLoading] = useState(true);
  const [githubError, setGithubError] = useState(false);

  const fetchGitHub = React.useCallback(() => {
    setGithubError(false);
    setGithubLoading(true);
    fetch("/api/github")
      .then((r) => {
        if (!r.ok) throw new Error(r.statusText);
        return r.json();
      })
      .then((data: unknown) => {
        const d = data as { user?: { login?: string; publicRepos?: number; contributions?: number }; recentCommits?: unknown[] };
        const user = d?.user
          ? {
              login: String(d.user.login ?? "—"),
              publicRepos: Number(d.user.publicRepos) || 0,
              contributions: Number(d.user.contributions) || 0,
            }
          : { login: "—", publicRepos: 0, contributions: 0 };
        const raw = Array.isArray(d?.recentCommits) ? d.recentCommits : [];
        const recentCommits = raw
          .filter((c): c is { repo?: string; message?: string; date?: string; url?: string } => c != null && typeof c === "object")
          .map((c) => ({
            repo: String(c.repo ?? "—"),
            message: String(c.message ?? ""),
            date: String(c.date ?? ""),
            url: String(c.url ?? "#"),
          }));
        setGithub({ user, recentCommits });
        setGithubError(false);
      })
      .catch(() => setGithubError(true))
      .finally(() => setGithubLoading(false));
  }, []);

  useEffect(() => {
    fetchGitHub();
  }, [fetchGitHub]);

  const terminalStyle: React.CSSProperties = {
    background: "#0d0d0d",
    color: "#e6edf3",
    fontFamily: 'ui-monospace, "SF Mono", "Menlo", "Monaco", "Cascadia Mono", "Consolas", monospace',
    fontSize: "13px",
    minHeight: "320px",
  };

  const shortName = site.shortName.toLowerCase().replace(/\s+/g, "");

  return (
    <section
      id="now"
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
      aria-label="Now & Changelog"
    >
      <div className="container mx-auto relative z-10 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-slate-500 mb-3"
        >
          {site.shortName.toUpperCase()}@PORTFOLIO
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2"
        >
          Now & Changelog
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-slate-600 text-sm sm:text-base mb-12 sm:mb-14 max-w-2xl"
        >
          What I&apos;m focused on · Career as releases (inspired by{" "}
          <a
            href="https://keepachangelog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 underline underline-offset-2 hover:text-slate-900 transition-colors"
          >
            keep-a-changelog
          </a>
          )
        </motion.p>

        {/* Grid — single column on mobile, two columns on lg+ */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-2 items-stretch">

          {/* Now — macOS Terminal window */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mac-terminal flex flex-col"
          >
            <div className="shrink-0">
              <MacTitleBar title="NOW.md" />
            </div>
            <div
              className="flex-1 p-4 sm:p-5 leading-[1.55] overflow-x-auto"
              style={terminalStyle}
            >
              <motion.div variants={item} className="flex flex-wrap items-center gap-x-0.5">
                <span style={{ color: "#5ddc5d" }}>{shortName}@portfolio</span>
                <span style={{ color: "#6e7681" }}>:</span>
                <span style={{ color: "#79c0ff" }}>~</span>
                <span style={{ color: "#6e7681" }}> % </span>
                <span style={{ color: "#e6edf3" }}>cat NOW.md</span>
              </motion.div>
              <div className="h-2" aria-hidden />
              {nowEntries.map((entry) => (
                <motion.div key={entry.key} variants={item} className="flex flex-wrap gap-x-0.5 py-0.5">
                  <span style={{ color: "#79c0ff" }}>{entry.key}:</span>
                  <span style={{ color: "#e6edf3" }}>&nbsp;{entry.value}</span>
                </motion.div>
              ))}
              <div className="h-3" aria-hidden />
              <motion.div variants={item} className="flex flex-wrap items-center gap-x-0.5">
                <span style={{ color: "#5ddc5d" }}>{shortName}@portfolio</span>
                <span style={{ color: "#6e7681" }}>:</span>
                <span style={{ color: "#79c0ff" }}>~</span>
                <span style={{ color: "#6e7681" }}> % </span>
                <span style={{ color: "#e6edf3" }}>gh activity</span>
              </motion.div>
              <div className="h-2" aria-hidden />
              {githubLoading && (
                <div style={{ color: "#8b949e" }}>Fetching GitHub activity...</div>
              )}
              {githubError && (
                <div className="flex flex-wrap items-center gap-x-1">
                  <span style={{ color: "#f85149" }}>Could not load activity.</span>
                  <button
                    type="button"
                    onClick={fetchGitHub}
                    className="underline hover:opacity-80 focus:outline-none"
                    style={{ color: "#79c0ff" }}
                  >
                    Retry
                  </button>
                </div>
              )}
              {!githubLoading && !githubError && github && (
                <div className="space-y-0.5">
                  <div className="flex flex-wrap gap-x-0.5 py-0.5">
                    <span style={{ color: "#79c0ff" }}>GitHub</span>
                    <span style={{ color: "#8b949e" }}>&nbsp;·&nbsp;</span>
                    <span style={{ color: "#e6edf3" }}>{github.user.login}</span>
                    <span style={{ color: "#8b949e" }}>&nbsp;· Repos:&nbsp;</span>
                    <span style={{ color: "#e6edf3" }}>{github.user.publicRepos}</span>
                    <span style={{ color: "#8b949e" }}>&nbsp;· Contributions:&nbsp;</span>
                    <span style={{ color: "#e6edf3" }}>{github.user.contributions}</span>
                  </div>
                  <div style={{ color: "#8b949e" }} className="py-0.5 text-[12px]">Recent:</div>
                  {github.recentCommits.length > 0 ? (
                    github.recentCommits.map((c, i) => (
                      <div key={`${c.repo}-${c.date}-${i}`} className="flex flex-wrap gap-x-0.5 py-0.5 pl-2">
                        <span style={{ color: "#79c0ff" }}>{c.repo}</span>
                        <span style={{ color: "#8b949e" }}>&nbsp;</span>
                        <span style={{ color: "#e6edf3" }}>{c.message}</span>
                        <span style={{ color: "#8b949e", fontSize: "11px" }}>&nbsp;{c.date}</span>
                      </div>
                    ))
                  ) : (
                    <div style={{ color: "#8b949e" }} className="py-0.5 pl-2 text-[12px]">(no recent commits)</div>
                  )}
                </div>
              )}
              <div className="h-3" aria-hidden />
              <motion.div variants={item} className="flex flex-wrap items-center gap-x-0.5">
                <span style={{ color: "#5ddc5d" }}>{shortName}@portfolio</span>
                <span style={{ color: "#6e7681" }}>:</span>
                <span style={{ color: "#79c0ff" }}>~</span>
                <span style={{ color: "#6e7681" }}> % </span>
                <span className="terminal-cursor inline-block w-2 h-[1em] align-middle bg-[#e6edf3]" aria-hidden />
              </motion.div>
            </div>
          </motion.div>

          {/* Changelog — macOS Terminal window */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mac-terminal flex flex-col"
          >
            <div className="shrink-0">
              <MacTitleBar title="CHANGELOG.md" />
            </div>
            <div
              className="flex-1 p-4 sm:p-5 leading-[1.55] overflow-x-auto"
              style={terminalStyle}
            >
              <motion.div variants={item} className="flex flex-wrap items-center gap-x-0.5">
                <span style={{ color: "#5ddc5d" }}>{shortName}@portfolio</span>
                <span style={{ color: "#6e7681" }}>:</span>
                <span style={{ color: "#79c0ff" }}>~</span>
                <span style={{ color: "#6e7681" }}> % </span>
                <span style={{ color: "#e6edf3" }}>cat CHANGELOG.md</span>
              </motion.div>
              <div className="h-2" aria-hidden />
              {changelogEntries.map((release) => (
                <motion.div key={release.version} variants={item} className="py-1.5 flex gap-3 flex-wrap">
                  <span style={{ color: "#79c0ff" }} className="shrink-0">[v{release.version}]</span>
                  <span style={{ color: "#6e7681" }} className="shrink-0 text-[12px]">{release.date}</span>
                  <span style={{ color: "#e6edf3" }} className="min-w-0">{release.note}</span>
                </motion.div>
              ))}
              <div className="h-2" aria-hidden />
              <motion.div variants={item} className="flex flex-wrap items-center gap-x-0.5">
                <span style={{ color: "#5ddc5d" }}>{shortName}@portfolio</span>
                <span style={{ color: "#6e7681" }}>:</span>
                <span style={{ color: "#79c0ff" }}>~</span>
                <span style={{ color: "#6e7681" }}> % </span>
                <span className="terminal-cursor inline-block w-2 h-[1em] align-middle bg-[#e6edf3]" aria-hidden />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NowAndChangelog;