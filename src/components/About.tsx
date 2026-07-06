import Reveal from "./Reveal";

const capabilities = [
  {
    title: "Web",
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "GSAP / Framer Motion", "E-commerce flows"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "React Native / Expo", "Offline-first (SQLite)", "Firebase", "App Store pipelines"],
  },
  {
    title: "Backend",
    items: ["Node.js / Express", "Django REST", "PostgreSQL / Supabase", "Prisma / Drizzle", "AI integrations (OpenAI)"],
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-28 md:py-40">
      <div className="grid gap-14 md:grid-cols-2">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay">About</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-tight">
            From brand sites that move like film, to the systems that run
            businesses behind the scenes.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="space-y-5 text-ink-soft leading-relaxed md:pt-2 max-w-lg">
            <p>
              I&rsquo;m Ali, a full-stack developer based in Cairo. I work across
              the whole stack — cinematic marketing sites and e-commerce
              storefronts on the front, CRMs, loyalty engines and clinical
              platforms on the back, and mobile apps in Flutter and React
              Native in between.
            </p>
            <p>
              Recent work spans a couponing engine for enterprise merchants, an
              AI-assisted clinical intelligence platform, emergency-healthcare
              and charity platforms, and a string of editorial storefronts for
              brands in Egypt and beyond.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-24 grid gap-10 md:grid-cols-3 border-t border-ink/10 pt-14">
        {capabilities.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <h3 className="font-display italic text-2xl text-clay">{c.title}</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-soft">
              {c.items.map((item) => (
                <li key={item} className="border-b border-ink/8 pb-2.5">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
