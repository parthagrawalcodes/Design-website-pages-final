"use client";

import { motion } from "framer-motion";
import { Gem, ChevronRight } from "lucide-react";
import { CurvedAccent } from "@/components/ui/curved-accent";
import { SectionTag } from "@/components/ui/section-tag";
import { GoldDivider } from "@/components/ui/gold-divider";
import { SERVICES } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-ivory">
      <CurvedAccent className="bottom-10 right-0 w-96 h-96" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp}><SectionTag icon={Gem} label="Our Services" /></motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold font-serif text-brand-dark">
            Comprehensive Medical Services
          </motion.h2>
          <motion.div variants={fadeInUp}><GoldDivider className="mt-5 max-w-xs mx-auto" /></motion.div>
          <motion.p variants={fadeInUp} className="mt-4 text-sm max-w-md mx-auto text-brand-muted">
            Advanced healthcare services delivered with precision, compassion, and elegance
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(200,155,60,0.11), 0 2px 12px rgba(107,23,54,0.05)" }}
              className="rounded-2xl p-6 border border-gold/10 bg-warm-white shadow-gold-sm transition-all duration-300 cursor-default group"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-gold/10 group-hover:bg-gold/15 transition-colors">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-bold mb-2 text-[15px] font-serif text-brand-dark">{title}</h3>
              <p className="text-sm leading-relaxed text-brand-muted">{desc}</p>
              <div className="mt-4 flex items-center text-xs font-semibold text-gold">
                <span>Learn more</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
