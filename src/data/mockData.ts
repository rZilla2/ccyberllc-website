export const siteConfig = {
  company: "Convergent Cyber Solutions",
  companyShort: "CONVERGENT",
  tagline: "Securing Your Digital Future",
  heroSubtext:
    "Advanced protection for enterprises in a rapidly evolving threat landscape.",
  ctaPrimary: "GET STARTED",
  ctaSecondary: "LEARN MORE",
  ctaFooter: "Initiate Strategic Briefing",
  footerCta: "Ready to fortify your organizational architecture?",
  email: "strategy@convergentcybersolutions.com",
  copyright: `\u00A9 ${new Date().getFullYear()} Convergent Cyber Solutions`,
} as const;

export const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Resources", href: "#resources" },
] as const;

export interface ServiceCard {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export const services: readonly ServiceCard[] = [
  {
    title: "Threat Detection",
    description:
      "AI-powered monitoring and rapid response systems that identify and neutralize threats before they reach your critical infrastructure.",
    icon: "shield_lock",
  },
  {
    title: "Compliance & GRC",
    description:
      "Navigate CMMC, NIST 800-171, and FedRAMP with automated governance, risk management, and continuous compliance monitoring.",
    icon: "verified_user",
  },
  {
    title: "Virtual CISO",
    description:
      "On-demand executive security leadership providing strategic guidance and governance without the full-time overhead.",
    icon: "admin_panel_settings",
  },
  {
    title: "Incident Response",
    description:
      "24/7 rapid response team with proven playbooks to contain, investigate, and recover from security incidents with minimal impact.",
    icon: "emergency",
  },
] as const;

export const differentiators = [
  {
    label: "Boutique Precision",
    text: "Two-person founding team. Every engagement gets senior-level attention, not a junior analyst behind a brand name.",
  },
  {
    label: "AI-Native Tooling",
    text: "Purpose-built AI workflows for compliance and risk assessment \u2014 faster audits, fewer gaps, continuous monitoring.",
  },
  {
    label: "Federal Depth",
    text: "Deep expertise in CMMC, NIST 800-171, and FedRAMP. Built for defense contractors and regulated industries.",
  },
] as const;
