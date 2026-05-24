"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917599002076"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 gradient-burgundy border-2 border-gold/25"
      style={{ boxShadow: "0 8px 32px rgba(107, 23, 54, 0.6)" }}
    >
      <MessageCircle className="w-6 h-6 text-champagne" fill="rgba(232,220,203,0.5)" />
    </a>
  );
}
