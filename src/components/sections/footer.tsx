"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Leaf } from "lucide-react";
import { GoldDivider } from "@/components/ui/gold-divider";
import { FOOTER_LINKS, FOOTER_SERVICES } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="pt-16 pb-8" style={{ background: "#2B0F1A" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <GoldDivider className="mb-12" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[15px] font-bold border border-gold/30 gradient-gold text-warm-white font-serif">
                A
              </div>
              <div>
                <div className="font-bold text-[15px] leading-tight font-serif text-champagne">
                  AGRAWAL
                </div>
                <div className="text-[10px] tracking-widest uppercase text-gold/60">
                  Surgery &amp; Maternity Care
                </div>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed mb-5 text-champagne/45">
              Advanced surgical and women&apos;s healthcare delivered with compassion, expertise, and an
              unwavering commitment to patient wellbeing.
            </p>
            <div className="flex items-center gap-2 mb-1">
              <Leaf className="w-3.5 h-3.5 text-gold/45" />
              <span className="text-[11px] tracking-widest uppercase text-gold/45">
                Expert Care · Compassionate Touch
              </span>
            </div>
            <div className="flex gap-2.5 mt-4">
              {["f", "in", "tw", "yt"].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer border border-gold/15 bg-gold/[0.06] text-champagne/50 text-[10px] font-bold transition-all duration-200 hover:scale-110 hover:bg-gold/15 hover:border-gold/30"
                >
                  {s}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-sm mb-4 tracking-wide text-gold">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => go(id)}
                    className="text-[13px] text-left text-champagne/40 hover:text-gold transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-sm mb-4 tracking-wide text-gold">Our Services</h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <span className="text-[13px] text-champagne/40">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-sm mb-4 tracking-wide text-gold">Contact Info</h4>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gold/45" />
                <span className="text-[13px] leading-relaxed text-champagne/40">
                  Shop No. 5, Medical Complex, Near Civil Hospital, City – 442001
                </span>
              </div>
              <a href="tel:+917599002076" className="flex items-center gap-2.5 text-[13px] text-champagne/40 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold/45" />
                +91-75990-02076
              </a>
              <a href="mailto:care@agrawalcare.in" className="flex items-center gap-2.5 text-[13px] text-champagne/40 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold/45" />
                care@agrawalcare.in
              </a>
              <div className="flex items-center gap-2.5 text-[13px] text-champagne/40">
                <Clock className="w-4 h-4 text-gold/45" />
                Mon–Sat: 9 AM – 9 PM
              </div>
            </div>
          </motion.div>
        </motion.div>

        <GoldDivider className="mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-champagne/28">
            © 2024 Agrawal Surgery &amp; Maternity Care. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms & Conditions"].map((l) => (
              <a key={l} href="#" className="text-xs text-champagne/28 hover:text-gold transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
