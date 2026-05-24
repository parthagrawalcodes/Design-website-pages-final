"use client";

import { motion } from "framer-motion";
import { Users, Clock, User } from "lucide-react";
import { SectionTag } from "@/components/ui/section-tag";
import { GoldDivider } from "@/components/ui/gold-divider";
import { DOCTORS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function DoctorsSection() {
  return (
    <section id="doctors" className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp}>
            <SectionTag icon={Users} label="Our Specialists" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold font-serif text-brand-dark">
            Meet Our Expert Doctors
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <GoldDivider className="mt-5 max-w-xs mx-auto" />
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-4 text-sm max-w-md mx-auto text-brand-muted">
            Experienced, compassionate, and dedicated to your health and recovery
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {DOCTORS.map((doc) => (
            <motion.div
              key={doc.name}
              variants={fadeInUp}
              whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(107,23,54,0.1), 0 4px 24px rgba(200,155,60,0.12)" }}
              className="rounded-3xl overflow-hidden transition-all duration-300 group border border-gold/15 bg-warm-white shadow-burgundy-sm"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Photo */}
                <div className="w-full sm:w-44 lg:w-52 shrink-0 bg-champagne">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-60 sm:h-full sm:min-h-[340px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                {/* Info */}
                <div className="flex-1 p-6">
                  <span className="text-[11px] px-2.5 py-1 rounded-full font-semibold inline-block mb-3 tracking-wide bg-burgundy/[0.08] text-burgundy">
                    {doc.role}
                  </span>
                  <h3 className="text-xl font-bold leading-tight font-serif text-brand-dark">
                    {doc.name}
                  </h3>
                  <p className="text-xs mt-0.5 mb-0.5 text-brand-muted">{doc.qual}</p>
                  <p className="text-sm font-semibold mb-3 text-gold">{doc.exp}</p>
                  <p className="text-[13px] leading-relaxed mb-4 line-clamp-3 text-brand-text">{doc.bio}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {doc.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 rounded-full font-medium bg-champagne text-brand-text">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs flex items-start gap-1.5 mb-1.5 text-brand-muted">
                    <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gold" />
                    {doc.timings}
                  </div>
                  <div className="text-xs flex items-center gap-1.5 mb-5 text-brand-muted">
                    <User className="w-3.5 h-3.5 shrink-0 text-gold" />
                    {doc.langs}
                  </div>
                  <button
                    onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-[1.02] gradient-gold text-warm-white shadow-gold-md"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
