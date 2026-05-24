import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agrawal Care – Surgery & Maternity Centre | Expert Healthcare",
  description:
    "Agrawal Care is a premium surgery and maternity centre providing compassionate, expert healthcare. Book appointments with Dr. Arpit Agrawal (General Surgery) and Dr. Shubhangi Agrawal (Gynecology & Obstetrics).",
  keywords: [
    "Agrawal Care",
    "surgery centre",
    "maternity care",
    "gynecologist",
    "general surgeon",
    "healthcare clinic",
    "book appointment",
  ],
  openGraph: {
    title: "Agrawal Care – Surgery & Maternity Centre",
    description: "Expert surgical and women's healthcare delivered with compassion and excellence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
