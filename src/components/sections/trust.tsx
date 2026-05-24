"use client";

import { motion } from "framer-motion";
import { TRUST_ITEMS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function TrustSection() {
  return (
    <section className="py-10 border-y border-gold/10 bg-warm-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {TRUST_ITEMS.map(({ icon: Icon, label, sub }) => (
            <motion.div
              key={label}
              variants={fadeInUp}
              className="flex flex-col items-center text-center px-4 py-5 rounded-2xl transition-all duration-200 cursor-default hover:bg-gold/[0.05] group"
            >
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-3 bg-gold/10 transition-colors group-hover:bg-gold/15">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <div className="font-semibold text-sm mb-0.5 text-brand-dark">{label}</div>
              <div className="text-xs text-brand-muted">{sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
