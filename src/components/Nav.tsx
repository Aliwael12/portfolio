"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Archive", href: "#archive" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-[100] mix-blend-difference text-cream"
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        <a href="#top" className="font-display italic text-lg tracking-tight">
          AW
        </a>
        <ul className="flex gap-6 md:gap-10 text-[11px] uppercase tracking-[0.2em]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:opacity-60 transition-opacity">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
