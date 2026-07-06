import { featured } from "@/data/projects";
import Reveal from "./Reveal";
import ProjectImage from "./ProjectImage";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedWork() {
  return (
    <section id="work" className="px-6 md:px-12 py-28 md:py-40">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
          Selected Work
        </p>
        <h2 className="mt-3 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-none tracking-tight">
          Things I&rsquo;ve built<span className="text-clay">.</span>
        </h2>
      </Reveal>

      <div className="mt-20 md:mt-28 space-y-24 md:space-y-40">
        {featured.map((p, i) => (
          <article
            key={p.slug}
            className={`grid gap-8 md:gap-14 md:grid-cols-12 items-start ${
              i % 2 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal className="md:col-span-7">
              <ProjectImage project={p} />
            </Reveal>

            <Reveal delay={0.12} className="md:col-span-5 md:sticky md:top-28">
              <div className="flex items-baseline gap-4 text-faint">
                <span className="font-display italic text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em]">
                  {p.category} — {p.year}
                </span>
              </div>
              <h3 className="mt-4 font-display text-3xl md:text-5xl tracking-tight">
                {p.title}
              </h3>
              <p className="mt-5 text-ink-soft leading-relaxed max-w-md">
                {p.blurb}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-ink/15 px-3 py-1 text-[11px] uppercase tracking-wider text-ink-soft"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-6">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-sm uppercase tracking-[0.15em] border-b border-ink/30 pb-1 hover:border-clay hover:text-clay transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
