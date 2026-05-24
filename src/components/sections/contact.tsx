"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Award } from "lucide-react";
import { CurvedAccent } from "@/components/ui/curved-accent";
import { SectionTag } from "@/components/ui/section-tag";
import { GoldDivider } from "@/components/ui/gold-divider";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const CONTACT_CARDS = [
  {
    icon: MapPin,
    title: "Clinic Address",
    lines: ["Shop No. 5, Medical Complex, Near Civil Hospital", "City – 442001, Maharashtra"],
    urgent: false,
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    lines: ["+91-7599002076", "+91-6369310669"],
    href: "tel:+917599002076",
    urgent: false,
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["care@agrawalcare.in", "appointments@agrawalcare.in"],
    href: "mailto:care@agrawalcare.in",
    urgent: false,
  },
  {
    icon: Award,
    title: "Emergency Helpline",
    lines: ["+91-75990-02076 (24/7)", "Available round the clock"],
    href: "tel:+917599002076",
    urgent: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-ivory">
      <CurvedAccent className="bottom-10 right-10 w-80 h-80" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp}><SectionTag icon={MapPin} label="Find Us" /></motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold font-serif text-brand-dark">Location &amp; Contact</motion.h2>
          <motion.div variants={fadeInUp}><GoldDivider className="mt-5 max-w-xs mx-auto" /></motion.div>
          <motion.p variants={fadeInUp} className="mt-4 text-sm text-brand-muted">We&apos;re here to help — reach out any time</motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Google Maps Embed */}
          <motion.div variants={fadeInUp} className="rounded-3xl overflow-hidden h-[420px] border border-gold/15 shadow-gold-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1235!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzQ1LjAiTiA3OcKwMDUnMTcuNSJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Agrawal Care Clinic Location"
              className="w-full h-full"
            />
          </motion.div>

          {/* Contact cards */}
          <motion.div variants={staggerContainer} className="flex flex-col gap-4">
            {CONTACT_CARDS.map(({ icon: Icon, title, lines, href, urgent }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className={`rounded-2xl p-5 border flex items-start gap-4 transition-shadow hover:shadow-gold-md ${urgent ? "border-burgundy/10" : "border-gold/10"
                  } bg-warm-white shadow-gold-sm`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${urgent ? "bg-burgundy/[0.08]" : "bg-gold/10"
                  }`}>
                  <Icon className={`w-5 h-5 ${urgent ? "text-burgundy" : "text-gold"}`} />
                </div>
                <div>
                  <div className="font-bold text-sm mb-1.5 font-serif text-brand-dark">{title}</div>
                  {href ? (
                    lines.map((l, i) => (
                      <a
                        key={i}
                        href={i === 0 ? href : undefined}
                        className={`block text-sm transition-colors hover:underline ${i === 0 ? (urgent ? "text-burgundy" : "text-gold") : "text-brand-muted"
                          }`}
                      >
                        {l}
                      </a>
                    ))
                  ) : (
                    lines.map((l, i) => (
                      <p key={i} className="text-sm text-brand-text">{l}</p>
                    ))
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
