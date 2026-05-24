"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Phone, ArrowRight, Star } from "lucide-react";
import { CurvedAccent } from "@/components/ui/curved-accent";
import { GoldDivider } from "@/components/ui/gold-divider";
import { HERO_STATS } from "@/lib/data";
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/animations";

export function HeroSection() {
  const [form, setForm] = useState({ doctor: "", department: "", date: "", phone: "" });

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20 gradient-hero">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute top-0 right-[-120px] w-[560px] h-[560px] rounded-full blur-3xl bg-gold/[0.08]" />
      <div className="pointer-events-none absolute bottom-0 left-[-80px] w-[400px] h-[400px] rounded-full blur-3xl bg-burgundy/[0.03]" />
      <CurvedAccent className="top-20 right-10 w-64 h-64" />
      <CurvedAccent className="bottom-32 left-5 w-48 h-48 opacity-[0.04]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-14 pb-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6 border border-gold/20 bg-champagne text-gold">
                <Heart className="w-3 h-3" fill="currentColor" />
                Trusted Since 2010 · Expert Care
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-4 tracking-tight font-serif text-brand-dark"
            >
              Compassionate
              <br />
              <span className="text-burgundy">Surgical &amp;</span>
              <br />
              <span className="gradient-gold-text">Women&apos;s Care</span>
            </motion.h1>

            <motion.div variants={fadeInUp}>
              <GoldDivider className="my-5 max-w-xs" />
            </motion.div>

            <motion.p variants={fadeInUp} className="text-base leading-relaxed mb-8 max-w-[420px] text-brand-text">
              Expert Healthcare with Compassion, Trust &amp; Excellence. Advanced surgical and
              maternity care from specialists who genuinely care.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] gradient-gold text-warm-white shadow-gold-lg"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+917599002076"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm border-2 border-burgundy text-burgundy bg-transparent transition-all duration-200 hover:scale-[1.02] hover:bg-burgundy/5"
              >
                <Phone className="w-4 h-4" />
                Emergency Contact
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="flex gap-4 mt-10 flex-wrap">
              {HERO_STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="px-5 py-3.5 rounded-2xl backdrop-blur-sm border border-gold/20 bg-warm-white/90 shadow-gold-sm"
                >
                  <div className="text-2xl font-bold font-serif text-gold">{value}</div>
                  <div className="text-xs font-medium mt-0.5 text-brand-muted">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block z-10"
          >
            <div className="absolute inset-0 rounded-3xl transform rotate-2 bg-gradient-to-br from-gold/15 to-burgundy/10" />
            <img
              src="/hero-image.png"
              alt="Agrawal Surgery & Maternity Care"
              className="relative w-full h-[520px] object-contain bg-[#FCFAF6] p-6 rounded-3xl border border-gold/20 shadow-hero-image"
            />



            {/* Rating card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -right-8 top-14 rounded-2xl p-4 border border-gold/15 bg-warm-white shadow-card-hover"
            >
              <div className="flex gap-0.5 mb-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold" fill="#C89B3C" />
                ))}
              </div>
              <div className="text-xs font-bold text-brand-dark">4.9 / 5 Rating</div>
              <div className="text-xs mt-0.5 text-brand-muted">500+ Reviews</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quick booking card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 rounded-3xl p-6 lg:p-8 border border-gold/20 backdrop-blur-xl bg-warm-white/50 shadow-gold-xl"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold font-serif text-burgundy">
                Quick Appointment Booking
              </h3>
              <p className="text-sm mt-0.5 text-brand-muted">
                Reserve your consultation in under a minute
              </p>
            </div>
            <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full hidden sm:block bg-gold/10 text-gold">
              Free First Visit
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <select
              value={form.doctor}
              onChange={(e) => setForm({ ...form, doctor: e.target.value })}
              className="rounded-xl px-4 py-3 text-sm border border-gold/20 bg-ivory text-brand-dark focus-gold"
            >
              <option>Select Doctor</option>
              <option>Dr. Arpit Agrawal</option>
              <option>Dr. Shubhangi Agrawal</option>
            </select>
            <select
              value={form.department}
              onChange={(e) => setForm({ ...form, department: e.target.value })}
              className="rounded-xl px-4 py-3 text-sm border border-gold/20 bg-ivory text-brand-dark focus-gold"
            >
              <option>Select Department</option>
              <option>General Surgery</option>
              <option>Gynecology</option>
              <option>Maternity Care</option>
            </select>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="rounded-xl px-4 py-3 text-sm border border-gold/20 bg-ivory text-brand-dark focus-gold"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="rounded-xl px-4 py-3 text-sm border border-gold/20 bg-ivory text-brand-dark focus-gold placeholder:text-brand-muted/50"
            />
            <button className="rounded-xl px-6 py-3 text-sm font-bold transition-all duration-200 hover:scale-[1.02] gradient-gold text-warm-white shadow-gold-md">
              Book Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
