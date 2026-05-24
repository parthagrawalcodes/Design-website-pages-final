"use client";

import { motion } from "framer-motion";
import { Heart, CheckCircle } from "lucide-react";
import { CurvedAccent } from "@/components/ui/curved-accent";
import { SectionTag } from "@/components/ui/section-tag";
import { GoldDivider } from "@/components/ui/gold-divider";
import { ABOUT_STATS, ABOUT_TAGS } from "@/lib/data";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-ivory">
      <CurvedAccent className="top-10 right-10 w-80 h-80" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute -top-5 -left-5 w-72 h-72 rounded-3xl bg-gold/[0.06] border border-gold/10" />
            <img
              src="https://images.unsplash.com/photo-1710698936989-500f359c6482?w=620&h=500&fit=crop&auto=format"
              alt="Luxury clinic interior"
              className="relative w-full h-[460px] object-cover rounded-3xl border border-gold/10 shadow-hero-image"
            />
            {/* Gold badge */}
            <div className="absolute -bottom-7 -right-5 rounded-2xl p-6 gradient-gold shadow-gold-lg">
              <div className="text-2xl font-bold leading-none font-serif text-warm-white">ISO</div>
              <div className="text-xs font-semibold mt-1 opacity-90 text-warm-white">Certified</div>
              <div className="text-xs opacity-75 text-warm-white">Facility</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <SectionTag icon={Heart} label="About Our Clinic" />
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl font-bold leading-tight mb-5 font-serif text-brand-dark">
              Dedicated to Your
              <br />
              <span className="text-burgundy">Health &amp; Wellbeing</span>
            </motion.h2>

            <motion.div variants={fadeInUp}>
              <GoldDivider className="mb-6 max-w-sm" />
            </motion.div>

            <motion.p variants={fadeInUp} className="leading-relaxed mb-4 text-[15px] text-brand-text">
              Agrawal Care – Surgery &amp; Maternity Centre is a state-of-the-art private medical
              facility providing comprehensive surgical and gynecological care. Founded with a vision
              to deliver world-class healthcare with warmth and compassion.
            </motion.p>

            <motion.p variants={fadeInUp} className="leading-relaxed mb-8 text-[15px] text-brand-text">
              Our mission is to provide evidence-based, patient-centred care in a safe, elegant,
              and welcoming environment. We believe every patient deserves the highest standard of
              healthcare — delivered with dignity, expertise, and genuine empathy.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {ABOUT_TAGS.map((tag) => (
                <div key={tag} className="flex items-center gap-1.5 text-sm font-medium text-brand-dark">
                  <CheckCircle className="w-4 h-4 text-gold" fill="#C89B3C" />
                  {tag}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
              {ABOUT_STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl p-4 text-center border border-gold/15 bg-warm-white shadow-gold-sm transition-shadow hover:shadow-gold-md"
                >
                  <div className="text-2xl font-bold font-serif text-gold">{value}</div>
                  <div className="text-xs font-medium mt-1 leading-tight text-brand-muted">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
