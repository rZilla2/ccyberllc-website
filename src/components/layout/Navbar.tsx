"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change (link click)
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      <header
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
          scrolled || menuOpen ? "bg-background/95 backdrop-blur-sm border-b border-border/50" : "bg-transparent"
        }`}
      >
        <div className="flex h-28 items-center justify-between px-6 md:px-12">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80 mt-2 ml-2" onClick={closeMenu}>
            <Image src="/convergent-bull-logo.png" alt="Convergent Cyber" width={600} height={430} className="object-contain w-[200px] md:w-[240px]" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6">
            <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-[#b07070] text-white hover:bg-[#c08080] mt-0.5">
              <Link href="/contact">Book a Meeting</Link>
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex items-center justify-center w-10 h-10 text-foreground"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <nav className="sm:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm px-6 pb-6">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/services" onClick={closeMenu} className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Services
              </Link>
              <Link href="/about" onClick={closeMenu} className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                About
              </Link>
              <Link href="/contact" onClick={closeMenu} className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Contact
              </Link>
              <Button asChild className="bg-[#b07070] text-white hover:bg-[#c08080] w-full mt-2">
                <Link href="/contact" onClick={closeMenu}>Book a Meeting</Link>
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
