import {
  Heart, Shield, Clock, Star, Phone, Mail, MapPin, Calendar,
  User, MessageCircle, Stethoscope, Baby, Activity, Scissors,
  Zap, Eye, Users, Award, CheckCircle, Gem, Quote,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Navigation ──────────────────────────────────────────────────────

export const NAV_LINKS: [string, string][] = [
  ["home", "Home"],
  ["about", "About"],
  ["doctors", "Doctors"],
  ["services", "Services"],
  ["appointment", "Appointment"],
  ["fees", "Fees"],
  ["reviews", "Reviews"],
  ["contact", "Contact"],
];

// ─── Trust Indicators ────────────────────────────────────────────────

export interface TrustItem {
  icon: LucideIcon;
  label: string;
  sub: string;
}

export const TRUST_ITEMS: TrustItem[] = [
  { icon: Award, label: "Experienced Doctors", sub: "15+ Years of Excellence" },
  { icon: Phone, label: "Emergency Support", sub: "24/7 Available" },
  { icon: Stethoscope, label: "Modern Equipment", sub: "State-of-the-Art" },
  { icon: Baby, label: "Safe Maternity Care", sub: "Expert Obstetric Team" },
  { icon: Shield, label: "Hygienic Environment", sub: "ISO Certified" },
];

// ─── Doctors ─────────────────────────────────────────────────────────

export interface Doctor {
  name: string;
  role: string;
  qual: string;
  exp: string;
  image: string;
  bio: string;
  tags: string[];
  timings: string;
  langs: string;
}

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Arpit Agrawal",
    role: "General Surgeon",
    qual: "MBBS, MS (General Surgery)",
    exp: "12+ Years Experience",
    image: "https://images.unsplash.com/photo-1645066928295-2506defde470?w=380&h=460&fit=crop&auto=format",
    bio: "Dr. Arpit Agrawal is a highly skilled general surgeon specialising in laparoscopic and minimally invasive procedures. His commitment to patient safety and surgical excellence has earned him the trust of thousands of patients.",
    tags: ["Laparoscopic Surgery", "Hernia Repair", "Appendectomy", "Gallbladder"],
    timings: "Mon–Sat: 9 AM – 1 PM, 5 PM – 8 PM",
    langs: "Hindi, English, Marathi",
  },
  {
    name: "Dr. Shubhangi Agrawal",
    role: "Gynaecologist & Obstetrician",
    qual: "MBBS, MD (Obstetrics & Gynecology)",
    exp: "10+ Years Experience",
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=380&h=460&fit=crop&auto=format",
    bio: "Dr. Shubhangi Agrawal is an expert obstetrician and gynaecologist dedicated to women's health at every stage of life. From routine gynecological care to high-risk pregnancies, she provides compassionate, evidence-based treatment.",
    tags: ["Maternity Care", "PCOS/PCOD", "High-Risk Pregnancy", "Laparoscopy"],
    timings: "Mon–Sat: 10 AM – 2 PM, 6 PM – 9 PM",
    langs: "Hindi, English, Gujarati",
  },
];

// ─── Services ────────────────────────────────────────────────────────

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const SERVICES: ServiceItem[] = [
  { icon: Scissors, title: "General Surgery", desc: "Expert laparoscopic and open surgical care for hernias, gallbladder, appendix, and abdominal conditions." },
  { icon: Baby, title: "Maternity Care", desc: "Comprehensive antenatal, intrapartum, and postnatal care by our expert obstetric team." },
  { icon: Shield, title: "Women Wellness", desc: "Preventive screenings, vaccinations, and personalised wellness programs for women of all ages." },
  { icon: Heart, title: "Pregnancy Care", desc: "Personalised antenatal consultations, risk assessment, nutritional guidance, and emotional support." },
  { icon: Stethoscope, title: "General Consultation", desc: "Comprehensive health assessments and expert medical consultations for all general health concerns." },
  { icon: Eye, title: "Ultrasound Guidance", desc: "High-resolution imaging for accurate diagnosis, routine scans, and procedure guidance." },
  { icon: Activity, title: "PCOS/PCOD Treatment", desc: "Evidence-based hormonal therapy, lifestyle management, and long-term care plans for PCOS." },
  { icon: Zap, title: "Minor Surgery", desc: "Day-care minor surgical procedures under local anaesthesia with quick recovery times." },
];

// ─── Fees ────────────────────────────────────────────────────────────

export interface FeeItem {
  type: string;
  price: string;
  dur: string;
  desc: string;
  hot: boolean;
}

export const FEES: FeeItem[] = [
  { type: "General Consultation", price: "₹500", dur: "30 min", desc: "Routine check-up and general health consultation with our specialists.", hot: false },
  { type: "Surgery Consultation", price: "₹800", dur: "45 min", desc: "Pre-operative assessment, case review, and surgical planning session.", hot: true },
  { type: "Gynecology Consultation", price: "₹600", dur: "30 min", desc: "Women's health examination, diagnostics, and personalised treatment plan.", hot: false },
  { type: "Pregnancy Consultation", price: "₹700", dur: "45 min", desc: "Comprehensive antenatal check-up, scan review, and dietary guidance.", hot: false },
  { type: "Follow-up Visit", price: "₹300", dur: "20 min", desc: "Post-treatment review, prescription renewal, and progress assessment.", hot: false },
];

// ─── Reviews ─────────────────────────────────────────────────────────

export interface Review {
  name: string;
  role: string;
  text: string;
  img: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Priya Sharma",
    role: "Maternity Care Patient",
    text: "Dr. Shubhangi guided me through my entire pregnancy with such warmth and professionalism. The clinic's atmosphere is calming and beautiful. Truly a premium experience in healthcare.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Rahul Mehta",
    role: "Hernia Surgery Patient",
    text: "Dr. Arpit performed my laparoscopic hernia repair with exceptional skill. Minimal pain, fast recovery — I was back to work in a week. Outstanding surgical care and follow-up.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Anjali Patel",
    role: "PCOS Treatment Patient",
    text: "After years of struggling with PCOS, Dr. Shubhangi finally gave me a clear diagnosis and a treatment plan that worked beautifully. I feel completely transformed.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Vikram Singh",
    role: "General Surgery Patient",
    text: "Exceptional facility. Dr. Arpit took time to explain everything before my gallbladder removal. The recovery was seamlessly monitored. Highly recommend Agrawal Care.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
  },
];

// ─── Schedule ────────────────────────────────────────────────────────

export interface ScheduleDay {
  day: string;
  morning: string;
  evening: string;
}

export const SCHEDULE: ScheduleDay[] = [
  { day: "Monday", morning: "9:00 AM – 1:00 PM", evening: "5:00 PM – 8:00 PM" },
  { day: "Tuesday", morning: "9:00 AM – 1:00 PM", evening: "5:00 PM – 8:00 PM" },
  { day: "Wednesday", morning: "9:00 AM – 1:00 PM", evening: "5:00 PM – 8:00 PM" },
  { day: "Thursday", morning: "9:00 AM – 1:00 PM", evening: "5:00 PM – 8:00 PM" },
  { day: "Friday", morning: "9:00 AM – 1:00 PM", evening: "5:00 PM – 8:00 PM" },
  { day: "Saturday", morning: "9:00 AM – 2:00 PM", evening: "5:00 PM – 9:00 PM" },
  { day: "Sunday", morning: "Emergency Only", evening: "—" },
];

// ─── FAQs ────────────────────────────────────────────────────────────

export interface FAQ {
  q: string;
  a: string;
}

export const FAQS: FAQ[] = [
  {
    q: "How do I book an appointment?",
    a: "You can book online through our website, call us at +91-7599002076, or message us on WhatsApp. Walk-in appointments are also welcome subject to slot availability.",
  },
  {
    q: "Is online payment available?",
    a: "Yes — we accept UPI (Google Pay, PhonePe, Paytm), credit/debit cards, and net banking. Cash is also accepted at the clinic. Receipts are provided for all payments.",
  },
  {
    q: "Do you provide emergency services?",
    a: "Yes. Our emergency helpline (+91-75990-02076) is available 24/7. For life-threatening emergencies, also dial 108. Our team is always available to guide you to the right care.",
  },
  {
    q: "What are the consultation fees?",
    a: "Consultation fees range from ₹300 (follow-up) to ₹800 (surgery consultation). All fees are displayed transparently in our Fees section — there are no hidden charges.",
  },
  {
    q: "Is online consultation available?",
    a: "Yes — we offer video consultations for follow-ups and non-emergency cases on weekdays from 6 PM – 9 PM. Book online and mention 'video consultation' in the reason field.",
  },
];

// ─── Time Slots ──────────────────────────────────────────────────────

export const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
];

// ─── Stats ───────────────────────────────────────────────────────────

export const HERO_STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "8,500+", label: "Happy Patients" },
  { value: "2,000+", label: "Surgeries" },
];

export const ABOUT_STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "8,500+", label: "Happy Patients" },
  { value: "2,000+", label: "Surgeries Done" },
];

export const ABOUT_TAGS = ["NABH Accredited", "Expert Team", "Patient-First Care"];

// ─── Footer ──────────────────────────────────────────────────────────

export const FOOTER_LINKS: [string, string][] = [
  ["home", "Home"],
  ["about", "About Us"],
  ["doctors", "Our Doctors"],
  ["services", "Services"],
  ["appointment", "Appointment"],
  ["fees", "Fees"],
  ["contact", "Contact"],
];

export const FOOTER_SERVICES = [
  "General Surgery",
  "Maternity Care",
  "Gynecology",
  "PCOS/PCOD Treatment",
  "Pregnancy Consultation",
  "Minor Surgery",
  "Ultrasound Guidance",
];
