"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Target, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: "hero",
    title: "Strategic Direction for\nCybersecurity Innovators.",
    description: "Convergent Cyber Solutions provides elite vCISO, federal compliance, and growth consulting to security firms navigating complex markets.",
    icon: <ShieldCheck className="h-16 w-16 text-primary mb-6" />,
    buttons: true,
    bgImage: "/hero-bg.png",
    accentColor: "from-primary/20",
  },
  {
    id: "service-1",
    title: "Virtual CISO (vCISO)",
    description: "Executive-level security leadership on demand. Drive your security program, manage risk, and align cyber initiatives with business goals without the full-time overhead.",
    icon: <ShieldCheck className="h-16 w-16 text-primary mb-6" />,
    features: ["Strategic Planning", "Board Reporting", "Incident Leadership"],
    bgImage: "/hero-bg.png",
    accentColor: "from-primary/20",
  },
  {
    id: "service-2",
    title: "Federal Compliance",
    description: "Navigate complex regulatory landscapes with confidence. We specialize in gap assessments and implementation strategies for CMMC, NIST 800-171, and FedRAMP.",
    icon: <Target className="h-16 w-16 text-secondary mb-6" />,
    features: ["Gap Assessments", "SSP & POA&M Creation", "Audit Preparation"],
    bgImage: "/hero-bg.png",
    accentColor: "from-secondary/20",
  },
  {
    id: "service-3",
    title: "Cyber Growth Strategy",
    description: "Accelerate your cybersecurity firm\'s market penetration. We architect robust partner programs and optimize product-led growth pipelines tailored for technical sales.",
    icon: <TrendingUp className="h-16 w-16 text-accent-foreground mb-6" />,
    features: ["Channel Architecture", "GTM Optimization", "Competitive Intelligence"],
    bgImage: "/hero-bg.png",
    accentColor: "from-accent-foreground/20",
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] bg-background overflow-hidden flex flex-col">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-65 mix-blend-screen transition-opacity duration-1000"
        style={{ backgroundImage: `url('${slides[currentSlide].bgImage}')` }}
      />
      
      {/* Tokyo Night Moody Gradients */}
      <div className={`absolute inset-0 z-10 bg-gradient-to-tr ${slides[currentSlide].accentColor} to-background/95 transition-colors duration-1000`}></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/50 via-background/10 to-background/60"></div>

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
              <Button size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground shadow-[0_0_20px_rgba(122,162,247,0.3)] hover:shadow-[0_0_35px_rgba(122,162,247,0.6)] transition-all duration-300" asChild>
                <Link href="/contact">
                  Book a Meeting <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/30 text-foreground hover:bg-primary/20 hover:border-primary/50 shadow-[0_0_15px_rgba(122,162,247,0.05)] hover:shadow-[0_0_20px_rgba(122,162,247,0.2)] transition-all duration-300" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          )}

          {slides[currentSlide].features && (
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
              {slides[currentSlide].features.map((feature, i) => (
                <div key={i} className="group flex items-center text-foreground font-medium text-lg bg-card/70 px-6 py-3 rounded-md backdrop-blur-sm hover:shadow-[0_0_25px_rgba(122,162,247,0.1)] transition-all duration-300 cursor-default">
                  <span className="text-primary/70 font-mono mr-3 group-hover:text-primary transition-colors">{"//"}</span>
                  <span className="tracking-wide">{feature}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Left Arrow */}
      <Button variant="outline" size="icon" className="absolute left-8 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full bg-background/50 border-border/50 hover:bg-card hover:text-primary backdrop-blur-sm" onClick={prevSlide}>
        <ChevronLeft className="h-9 w-9" />
      </Button>

      {/* Right Arrow */}
      <Button variant="outline" size="icon" className="absolute right-8 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full bg-background/50 border-border/50 hover:bg-card hover:text-primary backdrop-blur-sm" onClick={nextSlide}>
        <ChevronRight className="h-9 w-9" />
      </Button>

      {/* Dot Indicators */}
      <div className="relative z-30 pb-10 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-12 bg-primary" : "w-4 bg-muted hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
