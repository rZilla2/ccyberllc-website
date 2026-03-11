import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Target, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-slate-950 text-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm font-medium text-slate-300 backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            Accepting New Engagements
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mb-6">
            Strategic Direction for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Cybersecurity Innovators.
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
            Northstar Advisory provides elite vCISO and growth consulting to security firms navigating the federal and commercial sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-0" asChild>
              <Link href="/contact">
                Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="w-full py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Expertise That Scales.</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We bridge the gap between technical execution and business growth for cybersecurity service providers.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg border bg-card text-card-foreground shadow-sm h-full">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <ShieldCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Virtual CISO</h3>
              <p className="text-muted-foreground">Executive-level security leadership to guide your internal teams, manage risk, and align security with business goals.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg border bg-card text-card-foreground shadow-sm h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                <Target className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold">Federal Compliance</h3>
              <p className="text-muted-foreground">Navigating CMMC, NIST 800-171, and FedRAMP requirements to unlock multi-million dollar government contracts.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg border bg-card text-card-foreground shadow-sm h-full">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                <TrendingUp className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold">Growth Strategy</h3>
              <p className="text-muted-foreground">Go-to-market strategies tailored specifically for cybersecurity MSPs and consultancies looking to scale their ARR.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
