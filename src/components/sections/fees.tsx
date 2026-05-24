"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { SectionTag } from "@/components/ui/section-tag";
import { GoldDivider } from "@/components/ui/gold-divider";
import { FEES } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function FeesSection() {
  return (
    <section id="fees" className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp}><SectionTag icon={Shield} label="Transparent Pricing" /></motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold font-serif text-brand-dark">Consultation Fees</motion.h2>
          <motion.div variants={fadeInUp}><GoldDivider className="mt-5 max-w-xs mx-auto" /></motion.div>
          <motion.p variants={fadeInUp} className="mt-4 text-sm text-brand-muted">
            No hidden charges — transparent and affordable for everyone
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {FEES.map(({ type, price, dur, desc, hot }) => (
            <motion.div
              key={type}
              variants={fadeInUp}
              whileHover={hot ? {} : { y: -4, boxShadow: "0 12px 40px rgba(200,155,60,0.12)" }}
              className={`rounded-2xl p-6 border flex flex-col transition-all duration-200 ${
                hot
                  ? "gradient-gold border-transparent shadow-gold-lg"
                  : "bg-warm-white border-gold/15 shadow-gold-sm"
              }`}
            >
              {hot && (
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full inline-block self-start mb-3 tracking-widest bg-white/25 text-warm-white">
                  MOST POPULAR
                </span>
              )}
              <div className={`text-3xl font-bold mb-1 font-serif ${hot ? "text-warm-white" : "text-gold"}`}>
                {price}
              </div>
              <div className={`text-sm font-bold mb-1 leading-tight ${hot ? "text-warm-white" : "text-brand-dark"}`}>
                {type}
              </div>
              <div className={`text-xs mb-3 font-medium ${hot ? "text-warm-white/60" : "text-brand-muted"}`}>
                {dur}
              </div>
              <p className={`text-xs leading-relaxed flex-1 ${hot ? "text-warm-white/70" : "text-brand-muted"}`}>
                {desc}
              </p>
              <button
                onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
                className={`mt-5 w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-[1.02] ${
                  hot ? "bg-warm-white text-gold" : "bg-gold/10 text-gold hover:bg-gold/15"
                }`}
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
