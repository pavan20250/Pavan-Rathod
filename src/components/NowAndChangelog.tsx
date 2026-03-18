"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { site } from "@/lib/site";

type GitHubActivity = {
  user: { login: string; publicRepos: number; contributions: number };
  recentCommits: { repo: string; message: string; date: string; url: string }[];
};

const nowEntries = [
  { key: "building", value: "MindCare AI · Full-stack skills" },
  { key: "reading", value: "Design systems · Startup blogs" },
  { key: "using", value: "Next.js · TypeScript · Vercel · Figma" },
  { key: "status", value: "Open to work · Remote-friendly" },
];

const changelogEntries = [
  { version: "1.3.0", date: "2025-11", note: "Shipped MindCare AI — startup live" },
  { version: "1.2.0", date: "2025-05", note: "Developer @ Mongrov" },
  { version: "1.1.0", date: "2024-05", note: "Full Stack Developer @ Redwood Partners" },
  { version: "1.0.0", date: "2024-01", note: "Junior Developer @ Zummit Infolabs" },
  { version: "0.1.0", date: "—", note: "Started building for the web" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 200, damping: 24 } },
};

const TerminalChrome = ({ title }: { title: string }) => (
  <div
    className="relative flex items-center justify-center shrink-0 h-10 px-4"
    style={{
      background: 'rgba(255,255,255,0.03)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}
  >
    <div className="absolute left-4 flex items-center gap-1.5">
      <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)' }} />
      <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)' }} />
      <span className="w-3 h-3 rounded-full" style={{ background: '#28c840', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)' }} />
    </div>
    <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{title}</span>
  </div>
);

const NowAndChangelog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [github, setGithub] = useState<GitHubActivity | null>(null);
  const [githubLoading, setGithubLoading] = useState(true);
  const [githubError, setGithubError] = useState(false);

  const fetchGitHub = useCallback(() => {
    setGithubError(false);
    setGithubLoading(true);
    fetch("/api/github")
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then((data: unknown) => {
        const d = data as { user?: { login?: string; publicRepos?: number; contributions?: number }; recentCommits?: unknown[] };
        const user = d?.user
          ? { login: String(d.user.login ?? "—"), publicRepos: Number(d.user.publicRepos) || 0, contributions: Number(d.user.contributions) || 0 }
          : { login: "—", publicRepos: 0, contributions: 0 };
        const raw = Array.isArray(d?.recentCommits) ? d.recentCommits : [];
        const recentCommits = raw
          .filter((c): c is { repo?: string; message?: string; date?: string; url?: string } => c != null && typeof c === "object")
          .map(c => ({ repo: String(c.repo ?? "—"), message: String(c.message ?? ""), date: String(c.date ?? ""), url: String(c.url ?? "#") }));
        setGithub({ user, recentCommits });
      })
      .catch(() => setGithubError(true))
      .finally(() => setGithubLoading(false));
  }, []);

  useEffect(() => { fetchGitHub(); }, [fetchGitHub]);

  const shortName = site.shortName.toLowerCase().replace(/\s+/g, "");

  const terminalStyle = {
    background: '#080810',
    color: '#e6edf3',
    fontFamily: '"DM Mono", "Fira Code", "Cascadia Mono", monospace',
    fontSize: '12.5px',
    minHeight: '340px',
    lineHeight: '1.7',
  };

  return (
    <section
      id="now"
      ref={ref}
      className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="section-label mb-4"
          >
            Now & Changelog
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="heading-display text-4xl sm:text-5xl"
          >
            Current Focus &<br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>Career Timeline</span>
          </motion.h2>
        </div>

        <div className="grid gap-5 lg:gap-6 lg:grid-cols-2 items-stretch">

          {/* NOW terminal */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mac-terminal flex flex-col"
          >
            <TerminalChrome title="NOW.md — pavan@portfolio" />
            <div className="flex-1 p-5 overflow-x-auto" style={terminalStyle}>
              <motion.div variants={item} className="flex flex-wrap items-center gap-x-0.5 mb-2">
                <span style={{ color: '#4caf7d' }}>{shortName}@portfolio</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>:</span>
                <span style={{ color: '#5b8af0' }}>~</span>
                <span style={{ color: 'rgba(255,255,255,0.25)' }}> $ </span>
                <span style={{ color: '#e6edf3' }}>cat NOW.md</span>
              </motion.div>

              <div className="h-1" />

              {nowEntries.map((entry) => (
                <motion.div key={entry.key} variants={item} className="flex py-0.5">
                  <span style={{ color: '#d4a853', minWidth: '80px' }}>{entry.key}:</span>
                  <span style={{ color: 'rgba(230,237,243,0.8)' }}>&nbsp;{entry.value}</span>
                </motion.div>
              ))}

              <div className="h-3" />

              <motion.div variants={item} className="flex flex-wrap items-center gap-x-0.5 mb-2">
                <span style={{ color: '#4caf7d' }}>{shortName}@portfolio</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>:</span>
                <span style={{ color: '#5b8af0' }}>~</span>
                <span style={{ color: 'rgba(255,255,255,0.25)' }}> $ </span>
                <span style={{ color: '#e6edf3' }}>gh activity --recent</span>
              </motion.div>

              <div className="h-1" />

              {githubLoading && (
                <div style={{ color: 'rgba(255,255,255,0.25)' }}>fetching activity...</div>
              )}
              {githubError && (
                <div className="flex items-center gap-2">
                  <span style={{ color: '#e05c5c' }}>error fetching data</span>
                  <button onClick={fetchGitHub} style={{ color: '#5b8af0' }} className="underline text-xs">retry</button>
                </div>
              )}
              {!githubLoading && !githubError && github && (
                <div>
                  <div className="flex flex-wrap gap-x-2 mb-2">
                    <span style={{ color: '#d4a853' }}>{github.user.login}</span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                    <span style={{ color: 'rgba(230,237,243,0.7)' }}>repos: {github.user.publicRepos}</span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                    <span style={{ color: 'rgba(230,237,243,0.7)' }}>contributions: {github.user.contributions}</span>
                  </div>
                  {github.recentCommits.map((c, i) => (
                    <div key={i} className="flex flex-wrap gap-x-1 py-0.5 pl-2">
                      <span style={{ color: '#5b8af0' }}>{c.repo}</span>
                      <span style={{ color: 'rgba(230,237,243,0.75)' }}>{c.message}</span>
                      <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '11px' }}>{c.date}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="h-3" />
              <motion.div variants={item} className="flex items-center gap-x-0.5">
                <span style={{ color: '#4caf7d' }}>{shortName}@portfolio</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>:</span>
                <span style={{ color: '#5b8af0' }}>~</span>
                <span style={{ color: 'rgba(255,255,255,0.25)' }}> $ </span>
                <span className="terminal-cursor inline-block w-2 h-[13px] align-middle" style={{ background: 'rgba(212,168,83,0.8)' }} />
              </motion.div>
            </div>
          </motion.div>

          {/* CHANGELOG terminal */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mac-terminal flex flex-col"
          >
            <TerminalChrome title="CHANGELOG.md — pavan@portfolio" />
            <div className="flex-1 p-5 overflow-x-auto" style={terminalStyle}>
              <motion.div variants={item} className="flex flex-wrap items-center gap-x-0.5 mb-2">
                <span style={{ color: '#4caf7d' }}>{shortName}@portfolio</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>:</span>
                <span style={{ color: '#5b8af0' }}>~</span>
                <span style={{ color: 'rgba(255,255,255,0.25)' }}> $ </span>
                <span style={{ color: '#e6edf3' }}>cat CHANGELOG.md</span>
              </motion.div>

              <div className="h-2" />

              <motion.div variants={item} className="mb-2" style={{ color: '#4caf7d' }}>
                # Career Releases (keep-a-changelog format)
              </motion.div>

              {changelogEntries.map((release) => (
                <motion.div key={release.version} variants={item} className="py-1.5">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span style={{ color: '#d4a853' }}>[{release.version}]</span>
                    <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '11px' }}>{release.date}</span>
                  </div>
                  <div className="pl-4 mt-0.5" style={{ color: 'rgba(230,237,243,0.75)' }}>
                    + {release.note}
                  </div>
                </motion.div>
              ))}

              <div className="h-3" />
              <motion.div variants={item} className="flex items-center gap-x-0.5">
                <span style={{ color: '#4caf7d' }}>{shortName}@portfolio</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>:</span>
                <span style={{ color: '#5b8af0' }}>~</span>
                <span style={{ color: 'rgba(255,255,255,0.25)' }}> $ </span>
                <span className="terminal-cursor inline-block w-2 h-[13px] align-middle" style={{ background: 'rgba(212,168,83,0.8)' }} />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NowAndChangelog;