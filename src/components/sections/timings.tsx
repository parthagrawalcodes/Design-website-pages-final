"use client";

import { motion } from "framer-motion";
import { Clock, Phone, MessageCircle, Calendar } from "lucide-react";
import { SectionTag } from "@/components/ui/section-tag";
import { GoldDivider } from "@/components/ui/gold-divider";
import { SCHEDULE } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function TimingsSection() {
  return (
    <section className="py-24 bg-warm-white">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp}><SectionTag icon={Clock} label="Clinic Hours" /></motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold font-serif text-brand-dark">Clinic Timings</motion.h2>
          <motion.div variants={fadeInUp}><GoldDivider className="mt-5 max-w-xs mx-auto" /></motion.div>
          <motion.p variants={fadeInUp} className="mt-4 text-sm text-brand-muted">Plan your visit — we are open six days a week</motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Table */}
          <div className="md:col-span-2 rounded-3xl overflow-hidden border border-gold/10 shadow-gold-sm">
            <div className="px-6 py-4 flex items-center gap-2 gradient-gold">
              <Calendar className="w-4 h-4 text-warm-white/80" />
              <h3 className="font-bold text-sm tracking-wide text-warm-white">Weekly Schedule</h3>
            </div>
            <div>
              {SCHEDULE.map(({ day, morning, evening }) => (
                <div
                  key={day}
                  className={`flex items-center px-6 py-3.5 border-b border-gold/[0.06] transition-colors hover:bg-gold/[0.03] ${day === "Sunday" ? "opacity-55" : ""
                    }`}
                >
                  <span className="w-28 font-semibold text-sm text-brand-dark">{day}</span>
                  <span className="flex-1 text-sm text-brand-text">{morning}</span>
                  <span className="text-sm text-right text-brand-muted">{evening}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-4">
            {/* Emergency */}
            <div className="rounded-2xl p-5 border border-gold/10 bg-burgundy/[0.04]">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-burgundy/10">
                <Phone className="w-5 h-5 text-burgundy" />
              </div>
              <h4 className="font-bold text-sm mb-1 text-burgundy">Emergency</h4>
              <p className="text-xs mb-2 text-brand-muted">24/7 Emergency Support</p>
              <a href="tel:+917599002076" className="text-sm font-bold text-burgundy hover:underline">
                +91-75990-02076
              </a>
            </div>

            {/* Online Consultation */}
            <div className="rounded-2xl p-5 border border-gold/10 bg-gold/[0.04]">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-gold/10">
                <MessageCircle className="w-5 h-5 text-gold" />
              </div>
              <h4 className="font-bold text-sm mb-1 text-brand-dark">Online Consultation</h4>
              <p className="text-xs mb-2 text-brand-muted">Available via Video Call</p>
              <p className="text-xs font-semibold text-gold">Mon–Sat: 6 PM – 9 PM</p>
            </div>

            {/* Book a Slot */}
            <div className="rounded-2xl p-5 border border-gold/10 bg-gold/[0.04]">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-gold/[0.12]">
                <Calendar className="w-5 h-5 text-gold" />
              </div>
              <h4 className="font-bold text-sm mb-1 text-brand-dark">Book a Slot</h4>
              <p className="text-xs mb-3 text-brand-muted">Reserve your appointment</p>
              <button
                onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
                className="text-xs px-4 py-2 rounded-lg font-bold transition-opacity hover:opacity-90 gradient-gold text-warm-white"
              >
                Book Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
