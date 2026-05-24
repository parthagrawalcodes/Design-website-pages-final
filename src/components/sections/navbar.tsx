"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

interface NavbarProps {
  active: string;
}

export function Navbar({ active }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
          ? "bg-ivory/92 backdrop-blur-2xl shadow-[0_1px_24px_rgba(107,23,54,0.07)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => go("home")} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[13px] font-bold border border-gold/40 gradient-gold text-warm-white font-serif tracking-wide">
            AC
          </div>
          <div className="text-left">
            <div className="font-bold text-[15px] leading-tight tracking-tight font-serif text-brand-dark">
              AGRAWAL CARE
            </div>
            <div className="text-[10px] tracking-widest uppercase text-gold">
              Surgery &amp; Maternity Centre
            </div>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`text-[13px] font-medium transition-colors duration-150 hover:text-gold ${active === id ? "text-gold" : "text-brand-dark"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+917599002076"
            className="flex items-center gap-1.5 text-[13px] font-medium text-brand-dark hover:text-gold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold" />
            +91-7599002076
          </a>
          <button
            onClick={() => go("appointment")}
            className="px-5 py-2.5 rounded-xl text-[13px] font-semibold border border-gold gradient-gold text-warm-white shadow-gold-md transition-all duration-200 hover:shadow-gold-lg hover:scale-[1.02]"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className="w-6 h-6 text-burgundy" />
          ) : (
            <Menu className="w-6 h-6 text-brand-dark" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gold/15 px-5 py-4 flex flex-col gap-2.5 bg-ivory/97 backdrop-blur-2xl"
          >
            {NAV_LINKS.map(([id, label]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`text-sm font-medium text-left py-1.5 transition-colors ${active === id ? "text-gold" : "text-brand-dark"
                  }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => go("appointment")}
              className="mt-2 py-3 rounded-xl text-sm font-semibold gradient-gold text-warm-white"
            >
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
