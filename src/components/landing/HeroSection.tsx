"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/mockData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export interface HeroSectionProps {
  readonly className?: string;
}

export function HeroSection({ className = "" }: Readonly<HeroSectionProps>) {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center pt-24 overflow-hidden px-6 ${className}`}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="z-10 text-left"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.span
            className="text-primary-container text-[0.75rem] tracking-[0.05em] uppercase mb-4 block font-semibold"
            variants={fadeUp}
            custom={0}
          >
            Executive Protection
          </motion.span>

          <motion.h1
            className="text-[3.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-primary mb-6"
            variants={fadeUp}
            custom={1}
          >
            {siteConfig.tagline.split(" ").slice(0, 2).join(" ")}
            <br />
            {siteConfig.tagline.split(" ").slice(2).join(" ")}
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground max-w-lg mb-10 leading-[1.6]"
            variants={fadeUp}
            custom={2}
          >
            {siteConfig.heroSubtext}
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={fadeUp} custom={3}>
            <a
              href="#contact"
              className="font-bold px-8 py-4 rounded-[4px] hover:brightness-110 active:scale-95 transition-all shadow-lg"
              style={{
                background: "linear-gradient(135deg, #3cd7ff 0%, #9fb9e8 100%)",
                color: "#003642",
                boxShadow: "0 4px 24px rgba(60, 215, 255, 0.2)",
              }}
            >
              {siteConfig.ctaPrimary}
            </a>
            <a
              href="#services"
              className="font-bold px-8 py-4 rounded-[4px] text-secondary hover:bg-surface-high transition-all active:scale-95"
              style={{
                border: "1px solid rgba(60, 75, 77, 0.3)",
              }}
            >
              {siteConfig.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative hidden lg:flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full aspect-square max-w-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Cybersecurity Shield"
              className="w-full h-full object-contain mix-blend-lighten opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKgCfSlFB917u5liali9ZagT8sngYXD12WWfKy_yXFmY7c23izPT2U2xnQiGn6AU5Ol-ZEo7Gv1UJv52HOCDL-YdOscKyVMFGHhrnK7HnBlQXfatiGRe_GHBxiRcg-cTrqRysC126abiPVasdwQ3ku5NFb1fK_C2horek32w48fjP9C4NEJzKGdhP0pUI-AsQsFmRhvsqZAh1OZlNoQ6op_EncX_5YzTnfVwz8iGubteigYPlCxypA-PFt8LIywGdlVY7b4Vx-d1u6"
            />
            <div className="absolute inset-0 bg-primary-container/10 blur-[100px] rounded-full -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
