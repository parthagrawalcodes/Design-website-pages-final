"use client";

import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust";
import { AboutSection } from "@/components/sections/about";
import { DoctorsSection } from "@/components/sections/doctors";
import { ServicesSection } from "@/components/sections/services";
import { AppointmentSection } from "@/components/sections/appointment";
import { FeesSection } from "@/components/sections/fees";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { TimingsSection } from "@/components/sections/timings";
import { ContactSection } from "@/components/sections/contact";
import { FAQSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { useActiveSection } from "@/hooks/use-active-section";

export default function HomePage() {
  const active = useActiveSection();

  return (
    <main className="bg-ivory">
      <Navbar active={active} />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <DoctorsSection />
      <ServicesSection />
      <AppointmentSection />
      <FeesSection />
      <TestimonialsSection />
      <TimingsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
