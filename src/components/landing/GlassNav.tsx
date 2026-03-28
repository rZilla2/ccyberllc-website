"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { navLinks } from "@/data/mockData";

export interface GlassNavProps {
  readonly className?: string;
}

export function GlassNav({ className = "" }: Readonly<GlassNavProps>) {
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 lg:px-12 py-4 ${className}`}
      style={{
        background: "rgba(26, 31, 37, 0.3)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(134, 147, 152, 0.06)",
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/ccyber-logo-solid-shield.png"
          alt="Convergent Cyber Solutions Shield"
          width={32}
          height={32}
          className="h-8 w-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-[0.85rem] font-extrabold tracking-[0.12em] text-foreground uppercase font-heading">
            CONVERGENT
          </span>
          <span className="text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase">
            CYBER SOLUTIONS
          </span>
        </div>
      </Link>

      {/* Center Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[0.8rem] text-muted-foreground font-medium hover:text-foreground transition-colors tracking-wide"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Contact Button */}
      <Link
        href="#contact"
        className="text-[0.8rem] font-semibold px-5 py-2 rounded-sm border border-muted-foreground/30 text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
      >
        Contact
      </Link>
    </motion.nav>
  );
}
