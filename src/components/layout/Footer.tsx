import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-muted/30 bg-background p-8 md:p-12">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/convergent-bull-logo.png" alt="Convergent Cyber" width={400} height={280} className="object-contain w-[160px]" />
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Strategic cyber advisory for growth-focused security firms. Federal and commercial sector specialists.
          </p>
        </div>
        
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-4">Advisory Services</h2>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li><Link href="/services" className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm transition-colors">vCISO Engagements</Link></li>
            <li><Link href="/services" className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm transition-colors">Federal Compliance (CMMC)</Link></li>
            <li><Link href="/services" className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm transition-colors">Growth Strategy</Link></li>
            <li><Link href="/services" className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm transition-colors">Risk Assessment</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h2>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm transition-colors">Contact</Link></li>
            <li><Link href="/contact" className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm transition-colors">Careers</Link></li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h2>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-12 pt-8 border-t text-center text-sm text-muted-foreground px-4 md:px-8">
        &copy; {new Date().getFullYear()} Convergent Cyber Solutions. All rights reserved.
      </div>
    </footer>
  );
}
