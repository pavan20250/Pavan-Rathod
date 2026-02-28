"use client";

import { useEffect, useRef } from "react";

const cssParticles = [
  { top: "10%", left: "12%", size: 4, color: "rgba(148,163,184,0.28)", delay: 0, duration: 10 },
  { top: "28%", left: "80%", size: 3, color: "rgba(130,135,206,0.24)", delay: 2, duration: 12 },
  { top: "45%", left: "25%", size: 5, color: "rgba(148,163,184,0.25)", delay: 1.5, duration: 14 },
  { top: "60%", left: "65%", size: 3, color: "rgba(140,148,202,0.22)", delay: 3, duration: 11 },
  { top: "75%", left: "40%", size: 4, color: "rgba(148,163,184,0.26)", delay: 0.8, duration: 13 },
  { top: "20%", left: "55%", size: 3, color: "rgba(130,135,206,0.22)", delay: 4, duration: 9 },
  { top: "85%", left: "20%", size: 4, color: "rgba(148,163,184,0.28)", delay: 2.5, duration: 15 },
  { top: "38%", left: "90%", size: 3, color: "rgba(140,148,202,0.2)", delay: 1, duration: 10 },
  { top: "68%", left: "8%", size: 5, color: "rgba(148,163,184,0.24)", delay: 3.5, duration: 12 },
  { top: "92%", left: "70%", size: 3, color: "rgba(130,135,206,0.22)", delay: 0.5, duration: 14 },
];

const DOT_COUNT = 500;
const MOUSE_RADIUS = 120;
const LINE_DIST = 70;

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dotsRef = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    dotsRef.current = Array.from({ length: DOT_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      const { x: mx, y: my } = mouseRef.current;
      const dots = dotsRef.current;

      for (const dot of dots) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > w) dot.vx *= -1;
        if (dot.y < 0 || dot.y > h) dot.vy *= -1;
      }

      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        const dA = Math.hypot(a.x - mx, a.y - my);
        if (dA > MOUSE_RADIUS) continue;

        const alphaA = 1 - dA / MOUSE_RADIUS;

        // Dot — pure white shining
        ctx.shadowColor = "rgba(255,255,255,1)";
        ctx.shadowBlur = 10 * alphaA;
        ctx.beginPath();
        ctx.arc(a.x, a.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alphaA * 0.95})`;
        ctx.fill();

        // Hot white core
        if (alphaA > 0.4) {
          ctx.shadowBlur = 15 * alphaA;
          ctx.beginPath();
          ctx.arc(a.x, a.y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alphaA})`;
          ctx.fill();
        }
        ctx.shadowBlur = 0;

        // Line to cursor — white
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(mx, my);
        ctx.strokeStyle = `rgba(255,255,255,${alphaA * 0.18})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Lines between nearby dots — pure white shining
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dB = Math.hypot(b.x - mx, b.y - my);
          if (dB > MOUSE_RADIUS) continue;

          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINE_DIST) {
            const alphaB = 1 - dB / MOUSE_RADIUS;
            const lineAlpha = (1 - dist / LINE_DIST) * Math.min(alphaA, alphaB);
            ctx.shadowColor = "rgba(255,255,255,0.7)";
            ctx.shadowBlur = 4 * lineAlpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${lineAlpha * 0.65})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Layer 1: Animated gradient */}
      <div className="absolute inset-0 bg-gradient-animated" />

      {/* Layer 2: Fine grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Layer 3: Drifting orbs */}
      <div className="absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-br from-slate-300/25 to-blue-200/15 blur-[120px] md:animate-[drift-1_22s_ease-in-out_infinite]" />
      <div className="absolute top-[12%] -right-[12%] w-[50vw] h-[50vw] max-w-[520px] max-h-[520px] rounded-full bg-gradient-to-bl from-indigo-200/20 to-slate-200/15 blur-[110px] md:animate-[drift-2_26s_ease-in-out_infinite]" />
      <div className="absolute top-[50%] -left-[8%] w-[45vw] h-[45vw] max-w-[460px] max-h-[460px] rounded-full bg-gradient-to-tr from-slate-300/22 to-violet-200/12 blur-[110px] md:animate-[drift-3_24s_ease-in-out_infinite]" />
      <div className="hidden md:block absolute top-[35%] left-[25%] w-[30vw] h-[30vw] max-w-[320px] max-h-[320px] rounded-full bg-gradient-to-r from-blue-200/14 to-slate-200/10 blur-[90px] md:animate-[drift-1_30s_ease-in-out_infinite_reverse]" />

      {/* Layer 4: Interactive neural network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Layer 5: Floating particles — desktop only */}
      {cssParticles.map((p, i) => (
        <div
          key={i}
          className="hidden md:block absolute rounded-full blur-[1px]"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
