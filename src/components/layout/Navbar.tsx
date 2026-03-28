"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="flex h-28 items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80 mt-2 ml-2">
          <Image src="/convergent-bull-logo.png" alt="Convergent Cyber" width={600} height={430} className="object-contain w-[200px] md:w-[240px]" priority />
        </Link>
        <div className="flex items-center gap-4">
          <Button asChild className="bg-[#b07070] text-white hover:bg-[#c08080] mt-2.5">
            <Link href="/contact">Book a Meeting</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
