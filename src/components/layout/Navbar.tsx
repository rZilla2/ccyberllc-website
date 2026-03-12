"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 py-2">
          <Image src="/ccyber-logo-final.png" alt="CCYBER Logo" width={320} height={80} className="object-contain h-24 w-auto" priority />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Advisory Services
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
