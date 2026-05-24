"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { CurvedAccent } from "@/components/ui/curved-accent";
import { TIME_SLOTS } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";

export function AppointmentSection() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", doctor: "", date: "", time: "", symptoms: "",
  });

  return (
    <section id="appointment" className="py-24 relative overflow-hidden gradient-burgundy">
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-16 left-16 w-64 h-64 rounded-full blur-3xl bg-gold/[0.07]" />
        <div className="absolute bottom-8 right-8 w-80 h-80 rounded-full blur-3xl bg-white/[0.04]" />
      </div>
      <CurvedAccent className="top-0 right-20 w-72 h-72 opacity-[0.08]" />

      <div className="max-w-4xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5 border border-champagne/20 bg-white/10 text-champagne backdrop-blur-sm">
            <Calendar className="w-3 h-3" />
            Book Now
          </div>
          <h2 className="text-4xl font-bold font-serif text-champagne">
            Schedule Your Appointment
          </h2>
          <p className="mt-3 text-sm text-champagne/60">
            Get expert care from our specialists — book a slot that works for you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl p-7 lg:p-10 border border-champagne/10 glass-burgundy"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { key: "name", type: "text", label: "Full Name", ph: "Enter your full name" },
              { key: "phone", type: "tel", label: "Phone Number", ph: "+91 98765 43210" },
              { key: "email", type: "email", label: "Email Address", ph: "you@email.com" },
            ].map(({ key, type, label, ph }) => (
              <div key={key}>
                <label className="block mb-2 text-[11px] font-semibold tracking-wider uppercase text-champagne/80">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={ph}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 text-sm border border-champagne/20 bg-white/10 text-champagne placeholder:opacity-40 focus-gold"
                />
              </div>
            ))}
            <div>
              <label className="block mb-2 text-[11px] font-semibold tracking-wider uppercase text-champagne/80">
                Select Doctor
              </label>
              <select
                value={form.doctor}
                onChange={(e) => setForm({ ...form, doctor: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm border border-champagne/20 bg-white/10 text-champagne focus-gold"
              >
                <option className="text-slate-800">Choose a doctor</option>
                <option className="text-slate-800">Dr. Arpit Agrawal – General Surgery</option>
                <option className="text-slate-800">Dr. Shubhangi Agrawal – Gynecology</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-[11px] font-semibold tracking-wider uppercase text-champagne/80">
                Preferred Date
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm border border-champagne/20 bg-white/10 text-champagne focus-gold"
              />
            </div>
            <div>
              <label className="block mb-2 text-[11px] font-semibold tracking-wider uppercase text-champagne/80">
                Time Slot
              </label>
              <select
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm border border-champagne/20 bg-white/10 text-champagne focus-gold"
              >
                <option className="text-slate-800">Select time</option>
                {TIME_SLOTS.map((s) => (
                  <option key={s} className="text-slate-800">{s}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-[11px] font-semibold tracking-wider uppercase text-champagne/80">
                Symptoms / Reason
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your symptoms or reason for visit..."
                value={form.symptoms}
                onChange={(e) => setForm({ ...form, symptoms: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm border border-champagne/20 bg-white/10 text-champagne placeholder:opacity-40 resize-none focus-gold"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-7">
            <button className="flex-1 py-4 rounded-2xl text-sm font-bold transition-all duration-200 hover:scale-[1.01] gradient-gold text-warm-white shadow-gold-lg">
              Confirm Appointment
            </button>
            <button className="flex-1 py-4 rounded-2xl text-sm font-semibold border border-champagne/20 bg-white/[0.08] text-champagne transition-all duration-200 hover:scale-[1.01] hover:bg-white/[0.12]">
              Pay Online
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
