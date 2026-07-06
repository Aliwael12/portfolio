import { archive } from "@/data/projects";
import Reveal from "./Reveal";
import ProjectImage from "./ProjectImage";
import { ArrowUpRight } from "lucide-react";

export default function Archive() {
  return (
    <section id="archive" className="bg-paper border-y border-ink/10 px-6 md:px-12 py-28 md:py-40">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
          Archive
        </p>
        <h2 className="mt-3 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-none tracking-tight">
          Everything else<span className="text-clay">.</span>
        </h2>
        <p className="mt-5 max-w-md text-ink-soft">
          Client sites, internal tools, mobile apps and experiments — the full
          public record.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {archive.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.08}>
            <article className="group">
              <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
                <ProjectImage project={p} parallax={false} />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl md:text-2xl tracking-tight">
                  {p.title}
                </h3>
                <span className="text-[11px] text-faint whitespace-nowrap">
                  {p.year}
                </span>
              </div>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-faint">
                {p.category}
              </p>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                {p.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[12px] uppercase tracking-[0.15em] text-ink-soft hover:text-clay transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
