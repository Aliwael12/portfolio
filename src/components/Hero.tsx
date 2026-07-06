"use client";

import { motion } from "framer-motion";

const stack = [
  "React", "Next.js", "TypeScript", "Flutter", "React Native", "Node.js",
  "Django", "Supabase", "Firebase", "PostgreSQL", "Tailwind", "GSAP",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative min-h-svh flex flex-col justify-between pt-24 overflow-hidden">
      <div className="px-6 md:px-12 flex justify-between text-[11px] uppercase tracking-[0.25em] text-faint">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
        >
          Cairo, Egypt
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Portfolio — 2026
        </motion.span>
      </div>

      <div className="px-6 md:px-12">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 2.1, ease }}
            className="font-display text-[clamp(4rem,14.5vw,15rem)] leading-[0.9] tracking-[-0.03em]"
          >
            Ali Wael
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 2.25, ease }}
            className="font-display italic text-[clamp(1.8rem,5.5vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-clay"
          >
            full-stack developer
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6, ease }}
          className="mt-8 max-w-md text-ink-soft leading-relaxed"
        >
          I design and build web platforms, mobile apps and the backends behind
          them — from cinematic brand sites to CRMs, healthcare platforms and
          AI-powered tools.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.9, duration: 1 }}
        className="border-y border-ink/10 py-4 overflow-hidden"
        aria-hidden
      >
        <div className="marquee-track flex w-max gap-10 text-[13px] uppercase tracking-[0.25em] text-faint">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              {s} <span className="text-clay">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
