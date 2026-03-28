"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Target, TrendingUp, ChevronLeft, ChevronRight, Lock, Users } from "lucide-react";

const services = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Virtual CISO",
    description: "Fractional, executive-level security leadership to guide your teams and manage enterprise risk.",
    href: "/services",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Federal Compliance",
    description: "Navigate CMMC, NIST 800-171, and FedRAMP to unlock government contracts.",
    href: "/services",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Growth Strategy",
    description: "GTM strategies for cybersecurity firms looking to scale ARR and market penetration.",
    href: "/services",
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Security Architecture",
    description: "Comprehensive review of technical controls and zero-trust implementation.",
    href: "/services",
  },
];

const slides = [
  {
    id: "hero",
    title: "Strategic Direction for\nCybersecurity Innovators.",
    description: "Convergent Cyber Solutions provides elite vCISO, federal compliance, and growth consulting to security firms navigating complex markets.",
    icon: <ShieldCheck className="h-16 w-16 text-primary mb-6" />,
    buttons: true,
    bgImage: "/hero-bg-cyber.png",
    accentColor: "from-primary/20",
  },
  {
    id: "service-1",
    title: "Virtual CISO (vCISO)",
    description: "Executive-level security leadership on demand. Drive your security program, manage risk, and align cyber initiatives with business goals without the full-time overhead.",
    icon: <ShieldCheck className="h-16 w-16 text-primary mb-6" />,
    features: ["Strategic Planning", "Board Reporting", "Incident Leadership"],
    bgImage: "/hero-bg-cyber.png",
    accentColor: "from-primary/20",
  },
  {
    id: "service-2",
    title: "Federal Compliance",
    description: "Navigate complex regulatory landscapes with confidence. We specialize in gap assessments and implementation strategies for CMMC, NIST 800-171, and FedRAMP.",
    icon: <Target className="h-16 w-16 text-secondary mb-6" />,
    features: ["Gap Assessments", "SSP & POA&M Creation", "Audit Preparation"],
    bgImage: "/hero-bg-cyber.png",
    accentColor: "from-secondary/20",
  },
  {
    id: "service-3",
    title: "Cyber Growth Strategy",
    description: "Accelerate your cybersecurity firm\'s market penetration. We architect robust partner programs and optimize product-led growth pipelines tailored for technical sales.",
    icon: <TrendingUp className="h-16 w-16 text-accent-foreground mb-6" />,
    features: ["Channel Architecture", "GTM Optimization", "Competitive Intelligence"],
    bgImage: "/hero-bg-cyber.png",
    accentColor: "from-accent-foreground/20",
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % slides.length), []);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <>
    <div
      className="relative w-full min-h-[calc(100vh-4rem)] bg-background overflow-hidden flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-75 mix-blend-screen transition-opacity duration-1000"
        style={{ backgroundImage: `url('${slides[currentSlide].bgImage}')` }}
      />
      
      {/* Bull watermark — left third, above dark overlay */}
      <div className="absolute inset-0 z-[15] pointer-events-none overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/bull-watermark.png"
          alt=""
          className="absolute opacity-[0.12]"
          style={{
            width: "87.5vw",
            top: "calc(50% - 85px)",
            right: "48%",
            transform: "translateY(-50%)",
          }}
        />
      </div>
      {/* Dark overlay — pure black on left, transparent on right */}
      <div className={`absolute inset-0 z-10 bg-gradient-to-tr ${slides[currentSlide].accentColor} to-background/95 transition-colors duration-1000`}></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black from-25% via-black/80 via-45% to-transparent"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>

      {/* Main Slide Content */}
      <div className="relative z-20 flex-grow container mx-auto px-4 md:px-8 flex items-center justify-center">
        <div key={currentSlide} className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          <div className="flex justify-center mb-2 drop-shadow-lg">
            {slides[currentSlide].icon}
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground whitespace-pre-line drop-shadow-[0_0_15px_rgba(192,202,245,0.15)]">
            <span className="text-primary/40 font-mono text-3xl md:text-5xl mr-3 font-light">{"<"}</span>
            {slides[currentSlide].title}
            <span className="text-primary/40 font-mono text-3xl md:text-5xl ml-3 font-light">{"/>"}</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-xl lg:text-2xl mb-12 leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {slides[currentSlide].buttons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="h-14 px-8 text-lg bg-primary text-white hover:bg-primary/80 transition-all duration-300" asChild>
                <Link href="/contact">
                  Book a Meeting <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/30 text-foreground hover:bg-primary/20 hover:border-primary/50 shadow-[0_0_15px_rgba(176,112,112,0.05)] hover:shadow-[0_0_20px_rgba(176,112,112,0.2)] transition-all duration-300" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          )}

          {slides[currentSlide].features && (
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
              {slides[currentSlide].features.map((feature, i) => (
                <div key={i} className="group flex items-center text-foreground font-medium text-lg bg-card/70 px-6 py-3 rounded-md backdrop-blur-sm hover:shadow-[0_0_25px_rgba(176,112,112,0.1)] transition-all duration-300 cursor-default">
                  <span className="text-primary/70 font-mono mr-3 group-hover:text-primary transition-colors">{"//"}</span>
                  <span className="tracking-wide">{feature}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Left Arrow */}
      <Button variant="outline" size="icon" className="absolute left-8 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full bg-background/50 border-border/50 hover:bg-card hover:text-primary backdrop-blur-sm" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft className="h-9 w-9" />
      </Button>

      {/* Right Arrow */}
      <Button variant="outline" size="icon" className="absolute right-8 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full bg-background/50 border-border/50 hover:bg-card hover:text-primary backdrop-blur-sm" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight className="h-9 w-9" />
      </Button>

      {/* Dot Indicators */}
      <div className="relative z-30 pb-10 flex justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="flex items-center justify-center min-w-[24px] min-h-[24px] p-2"
            aria-label={`Go to slide ${index + 1}: ${slide.title.split("\n")[0]}`}
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-12 bg-primary" : "w-4 bg-muted hover:bg-muted-foreground"
              }`}
            />
          </button>
        ))}
      </div>
    </div>

    {/* Services Cards Section */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
            How We Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized advisory services designed exclusively for high-growth cybersecurity firms navigating complex technical and regulatory landscapes.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group flex flex-col p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-[0_0_30px_rgba(176,112,112,0.08)] transition-all duration-300"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{service.description}</p>
              <span className="mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="inline h-4 w-4 ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* About / Trust Section */}
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
              Built by Practitioners.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Convergent Cyber Solutions is a boutique advisory firm founded by cybersecurity veterans who got tired of watching great firms struggle with the same solvable problems — strategic direction, compliance readiness, and sustainable growth.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Boutique in size. Enterprise in depth. We bring the strategic, technical, and operational expertise that used to be reserved for Fortune 500 enterprises.
            </p>
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/20 hover:border-primary/50">
              <Link href="/about">About Our Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["CMMC Registered", "NIST 800-171", "FedRAMP", "SOC 2"].map((label, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 rounded-xl border border-border bg-card/50 text-muted-foreground font-medium text-sm tracking-wider"
              >
                <ShieldCheck className="h-5 w-5 text-primary mr-3 shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA Strip */}
    <section className="py-20 bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
          Ready to Elevate Your Security Posture?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Schedule a consultation with our advisory team to discuss your challenges and goals.
        </p>
        <Button size="lg" className="h-14 px-10 text-lg bg-primary text-white hover:bg-primary/80 transition-all duration-300" asChild>
          <Link href="/contact">
            Book a Meeting <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
    </>
  );
}
