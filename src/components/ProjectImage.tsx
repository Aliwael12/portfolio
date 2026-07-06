"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

function PhoneRow({ project }: { project: Project }) {
  return (
    <div className="flex h-full items-center justify-center gap-4 bg-ink px-8 py-[7%]">
      {project.phones!.map((src) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={`${project.title} app screen`}
          className="h-full w-auto rounded-xl object-contain shadow-2xl"
          loading="lazy"
        />
      ))}
    </div>
  );
}

function WebShot({ project }: { project: Project }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      className="h-full w-full object-cover object-top"
      loading="lazy"
    />
  );
}

/**
 * Project visual. Three modes:
 * - web screenshot only → parallax image
 * - app screens only → phone row
 * - both → 3D flip card with a Web / App toggle
 */
export default function ProjectImage({
  project,
  parallax = true,
}: {
  project: Project;
  parallax?: boolean;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const hasBoth = Boolean(project.image && project.phones);
  const [side, setSide] = useState<"web" | "app">("web");

  useEffect(() => {
    if (!parallax || hasBoth || !frame.current || !inner.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: frame.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, [parallax, hasBoth]);

  if (hasBoth) {
    return (
      <div className="relative">
        <div className="aspect-[16/10] [perspective:1600px]">
          <motion.div
            className="relative h-full w-full [transform-style:preserve-3d]"
            animate={{ rotateY: side === "web" ? 0 : 180 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-sm bg-sand [backface-visibility:hidden]">
              <WebShot project={project} />
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-sm bg-ink [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <PhoneRow project={project} />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-3 right-3 z-10 flex rounded-full border border-ink/15 bg-paper/90 p-0.5 text-[10px] uppercase tracking-[0.15em] backdrop-blur">
          {(["web", "app"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSide(s)}
              className={`rounded-full px-3 py-1.5 transition-colors cursor-pointer ${
                side === s ? "bg-ink text-cream" : "text-ink-soft hover:text-ink"
              }`}
              aria-pressed={side === s}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={frame}
      className="relative overflow-hidden rounded-sm bg-sand aspect-[16/10]"
    >
      <div ref={inner} className="absolute inset-[-10%_0]">
        {project.phones ? (
          <PhoneRow project={project} />
        ) : project.image ? (
          <WebShot project={project} />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sand to-cream">
            <span className="font-display italic text-[clamp(3rem,8vw,7rem)] text-ink/15">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
