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
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen transition-opacity duration-1000"
        style={{ backgroundImage: `url('${slides[currentSlide].bgImage}')` }}
      />
      
      {/* Tokyo Night Moody Gradients */}
      <div className={`absolute inset-0 z-10 bg-gradient-to-tr ${slides[currentSlide].accentColor} to-background/95 transition-colors duration-1000`}></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/40 to-background/90"></div>

      {/* Main Slide Content */}
      <div className="relative z-20 flex-grow container mx-auto px-4 md:px-8 flex items-center justify-center">
        <div key={currentSlide} className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          <div className="flex justify-center">
            {slides[currentSlide].icon}
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground whitespace-pre-line">
            {slides[currentSlide].title}
          </h1>
          
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-xl lg:text-2xl mb-12 leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {slides[currentSlide].buttons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="h-14 px-8 text-lg shadow-lg shadow-primary/20" asChild>
                <Link href="/contact">
                  Book a Meeting <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/20 hover:bg-primary/10" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          )}

          {slides[currentSlide].features && (
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
              {slides[currentSlide].features.map((feature, i) => (
                <div key={i} className="flex items-center text-foreground font-medium text-lg bg-card/50 px-6 py-3 rounded-full border border-border/50 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                  {feature}
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Slider Controls */}
      <div className="relative z-30 container mx-auto px-4 md:px-8 pb-12 flex items-center justify-between">
        <div className="flex gap-2">
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
        
        <div className="flex gap-4">
          <Button variant="outline" size="icon" className="rounded-full bg-background/50 border-border/50 hover:bg-card hover:text-primary backdrop-blur-sm" onClick={prevSlide}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full bg-background/50 border-border/50 hover:bg-card hover:text-primary backdrop-blur-sm" onClick={nextSlide}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
