import { ShieldCheck, Target, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const arms = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Strategic Advisory",
      description:
        "We serve as trusted strategic partners to growing cybersecurity firms — helping them navigate market positioning, competitive landscapes, and partnership strategy with the confidence of battle-tested advisors who have been in the trenches.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Virtual CISO",
      description:
        "Executive-level security leadership, on demand. Our vCISO practice gives organizations access to seasoned security executives without the full-time overhead — from board-level reporting and risk management to compliance program buildout.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "AI-Driven GRC",
      description:
        "We bring a tech-forward, AI-accelerated approach to governance, risk, and compliance. Whether navigating CMMC, NIST 800-171, or commercial frameworks, we help small businesses build programs that are audit-ready without the enterprise price tag.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative py-24 bg-card/50 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/90 to-background/50" />
        <div className="container relative z-20 mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-foreground">
            Built by Practitioners.
          </h1>
          <p className="text-xl text-muted-foreground">
            Convergent Cyber Solutions is a boutique advisory firm founded by cybersecurity veterans who got tired of watching great firms struggle with the same solvable problems — strategic direction, compliance readiness, and sustainable growth.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We exist to give cybersecurity firms — and the businesses that depend on them — access to the kind of strategic, technical, and operational expertise that used to be reserved for Fortune 500 enterprises. Boutique in size. Enterprise in depth.
          </p>
        </div>
      </section>

      {/* Three Arms */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {arms.map((arm, index) => (
              <div key={index} className="flex flex-col p-8 rounded-2xl border border-border bg-card">
                <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mb-6">
                  {arm.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{arm.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{arm.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
