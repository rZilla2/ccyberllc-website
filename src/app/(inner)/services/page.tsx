import { ShieldCheck, Target, TrendingUp, Lock, Users } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Virtual CISO (vCISO)",
      description: "Fractional, executive-level security leadership to guide your internal teams, align security with business goals, and manage enterprise risk.",
      icon: <Users className="h-6 w-6" />,
      features: ["Security Strategy & Roadmap", "Board-level Reporting", "Risk Management Frameworks", "Security Team Coaching"]
    },
    {
      title: "Federal Compliance & CMMC",
      description: "Navigating complex defense requirements (CMMC, NIST 800-171, FedRAMP) to unlock multi-million dollar government contracts.",
      icon: <Target className="h-6 w-6" />,
      features: ["CMMC Readiness Assessments", "NIST 800-171 Gap Analysis", "System Security Plan (SSP) Creation", "Continuous Monitoring"]
    },
    {
      title: "Go-to-Market Growth Strategy",
      description: "Tailored GTM strategies specifically for cybersecurity MSPs and consultancies looking to scale their Annual Recurring Revenue (ARR).",
      icon: <TrendingUp className="h-6 w-6" />,
      features: ["Service Portfolio Optimization", "Pricing Strategy", "Sales Engineering Support", "Market Positioning"]
    },
    {
      title: "Security Architecture & Validation",
      description: "Comprehensive review of your technical controls and cloud infrastructure to ensure zero-trust principles are properly implemented.",
      icon: <Lock className="h-6 w-6" />,
      features: ["Cloud Security Reviews", "Zero Trust Architecture", "Vendor Risk Assessments", "Technical Control Validation"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Services Header */}
      <section className="relative py-24 bg-card/50 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-screen" style={{ backgroundImage: "url('/hero-bg.png')" }} />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/90 to-background/50"></div>
        <div className="container relative z-20 mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-foreground">
            Strategic Security Expertise.
          </h1>
          <p className="text-xl text-muted-foreground">
            Convergent Cyber Solutions provides specialized advisory services designed exclusively for high-growth cybersecurity firms navigating complex technical and regulatory landscapes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col p-8 rounded-2xl border border-border bg-card shadow-sm hover:shadow-primary/5 transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                </div>
                <p className="text-muted-foreground mb-8 flex-grow">
                  {service.description}
                </p>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Core Capabilities</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
