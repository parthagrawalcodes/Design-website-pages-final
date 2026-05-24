"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SectionTag } from "@/components/ui/section-tag";
import { GoldDivider } from "@/components/ui/gold-divider";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function FAQSection() {
  return (
    <section className="py-24 bg-warm-white">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp}><SectionTag icon={MessageCircle} label="FAQs" /></motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold font-serif text-brand-dark">
            Frequently Asked Questions
          </motion.h2>
          <motion.div variants={fadeInUp}><GoldDivider className="mt-5 max-w-xs mx-auto" /></motion.div>
          <motion.p variants={fadeInUp} className="mt-4 text-sm text-brand-muted">
            Everything you need to know before your visit
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQS.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl overflow-hidden border border-gold/10 bg-warm-white shadow-gold-sm data-[state=open]:border-gold/30 data-[state=open]:shadow-gold-md transition-all duration-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-sm leading-snug font-serif text-brand-dark hover:no-underline data-[state=open]:text-gold">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 -mt-1 text-sm leading-relaxed text-brand-text">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
