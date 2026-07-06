import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/Aliwael12" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ali-wael-506604236/" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-cream px-6 md:px-12 pt-28 md:pt-40 pb-10">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.25em] text-clay">Contact</p>
        <h2 className="mt-4 font-display text-[clamp(2.8rem,9vw,9rem)] leading-[0.95] tracking-tight">
          Let&rsquo;s build
          <br />
          <span className="italic text-clay">something.</span>
        </h2>
        <a
          href="mailto:dev@tsk.vc"
          className="group mt-10 inline-flex items-center gap-2 text-xl md:text-3xl font-display border-b border-cream/30 pb-2 hover:border-clay hover:text-clay transition-colors"
        >
          dev@tsk.vc
          <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </Reveal>

      <div className="mt-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-cream/15 pt-8 text-sm text-cream/60">
        <div className="flex gap-8">
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="uppercase tracking-[0.2em] text-[12px] hover:text-clay transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="text-[12px]">
          © 2026 Ali Wael — Cairo, Egypt
        </p>
      </div>
    </footer>
  );
}
