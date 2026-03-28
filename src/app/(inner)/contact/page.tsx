"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("first-name") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("last-name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "success" : "error");
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Header */}
      <section className="relative py-24 bg-card/50 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/90 to-background/50"></div>
        <div className="container relative z-20 mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-foreground">
            Let&apos;s Discuss Your Growth.
          </h1>
          <p className="text-xl text-muted-foreground">
            Whether you require immediate vCISO support or a comprehensive go-to-market strategy, our experts are ready to engage.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Direct Inquiries</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us directly through the channels below. For partnership or enterprise advisory requests, please allow 24 hours for a response from a managing partner.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">strategy@convergentcybersolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+1 (800) 555-0199</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office (HQ)</h3>
                    <p className="text-muted-foreground">
                      100 Cyber Innovation Way<br />
                      Suite 400<br />
                      Washington, D.C. 20001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Request a Consultation</h3>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-48 text-center gap-4">
                  <div className="p-4 bg-primary/10 text-primary rounded-full">
                    <Mail className="h-8 w-8" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">Message received.</p>
                  <p className="text-muted-foreground">We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                      <Input id="first-name" name="first-name" placeholder="John" className="bg-background" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                      <Input id="last-name" name="last-name" placeholder="Doe" className="bg-background" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Company Email</label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" className="bg-background" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                    <Input id="company" name="company" placeholder="Acme Cybersecurity" className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your current challenges..."
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-destructive">Something went wrong. Please email us directly at strategy@convergentcybersolutions.com</p>
                  )}

                  <Button type="submit" className="w-full" disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Submit Request"}
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
