"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { CurvedAccent } from "@/components/ui/curved-accent";
import { SectionTag } from "@/components/ui/section-tag";
import { GoldDivider } from "@/components/ui/gold-divider";
import { REVIEWS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-ivory">
      <CurvedAccent className="top-10 left-5 w-72 h-72" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp}><SectionTag icon={Star} label="Patient Reviews" /></motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold font-serif text-brand-dark">What Our Patients Say</motion.h2>
          <motion.div variants={fadeInUp}><GoldDivider className="mt-5 max-w-xs mx-auto" /></motion.div>
          <motion.p variants={fadeInUp} className="mt-4 text-sm text-brand-muted">Trusted by thousands of patients and their families</motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {REVIEWS.map(({ name, role, text, img }) => (
            <motion.div
              key={name}
              variants={fadeInUp}
              whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(107,23,54,0.07), 0 2px 16px rgba(200,155,60,0.09)" }}
              className="rounded-2xl p-6 border border-gold/10 bg-warm-white shadow-gold-sm flex flex-col transition-all duration-200"
            >
              <div className="mb-3">
                <Quote className="w-6 h-6 text-gold/30" fill="rgba(200,155,60,0.18)" />
              </div>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold" fill="#C89B3C" />
                ))}
              </div>
              <p className="text-[13px] leading-relaxed flex-1 italic text-brand-text">{text}</p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gold/10">
                <img
                  src={img}
                  alt={name}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-gold/20"
                />
                <div>
                  <div className="font-bold text-sm font-serif text-brand-dark">{name}</div>
                  <div className="text-xs text-brand-muted">{role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
