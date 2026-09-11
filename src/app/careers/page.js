"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Briefcase, 
  HeartPulse, 
  TrendingUp, 
  Globe2,
  Send,
  ClipboardCheck,
  Globe,
  MonitorCheck,
  BookOpenCheck,
  NotebookPen,
  BellRing,
  Fingerprint
} from "lucide-react";

// Modern easing curve for smooth, premium animations
const ease = [0.22, 1, 0.36, 1];

// Our detailed services
const services = [
  {
    icon: ClipboardCheck,
    title: "Online Grading System",
    desc: "Automate student result computation with our intelligent grading engine. Supports custom grading scales, multi-subject processing, and instant report card generation."
  },
  {
    icon: Globe,
    title: "School Website Development",
    desc: "Professional, mobile-responsive school websites with portals for students, parents, and staff. Integrated LMS, fee payment, and communication tools."
  },
  {
    icon: MonitorCheck,
    title: "JAMB CBT Practice",
    desc: "Computer-Based Test practice platform mirroring the real JAMB UTME environment. Timed exams, subject combinations, and detailed performance analytics."
  },
  {
    icon: BookOpenCheck,
    title: "WAEC CBT Practice",
    desc: "Prepare for WAEC with thousands of past questions in CBT format. Covers WASSCE, BECE, and private candidate exams with authentic question styles."
  },
  {
    icon: NotebookPen,
    title: "NECO CBT Practice",
    desc: "NECO exam practice platform with SSCE, BECE, and Common Entrance past questions. Experience the real exam format with detailed explanations."
  },
  {
    icon: BellRing,
    title: "IoT Automation Bell",
    desc: "Smart school bell system powered by IoT. Schedules ring automatically, supports multiple zones, emergency alerts, and remote management via web/dashboard."
  },
  {
    icon: Fingerprint,
    title: "Biometrics Attendance",
    desc: "Fingerprint & face-recognition attendance system for students and staff. Real-time dashboards, late-comer tracking, and seamless payroll integration."
  }
];

const perks = [
  {
    icon: TrendingUp,
    title: "Growth & Learning",
    desc: "We invest in your continuous development with access to courses, certifications, and mentorship programs."
  },
  {
    icon: HeartPulse,
    title: "Health & Wellness",
    desc: "Comprehensive health insurance and wellness initiatives to keep you and your family secure."
  },
  {
    icon: Globe2,
    title: "Flexible & Remote",
    desc: "We trust our team. Enjoy flexible working hours and the ability to work remotely."
  },
  {
    icon: Briefcase,
    title: "Meaningful Work",
    desc: "Build technology that directly impacts education and enterprise solutions across Nigeria."
  },
];

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-50 text-accent-600 text-xs font-semibold rounded-full uppercase tracking-wider mb-6 border border-accent-100"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Careers at BimTech
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl md:text-6xl font-bold text-brand-950 tracking-tight leading-[1.1]"
          >
            Build the future of African EdTech
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            While we are not actively hiring right now, we are always looking for exceptional talent. Explore the solutions we build and see how you can make an impact.
          </motion.p>
        </div>
      </section>

      {/* ─── Our Solutions / Services ─── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 tracking-tight leading-[1.1]">
              What we build
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We develop integrated educational platforms and enterprise-grade IoT solutions tailored for modern African institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="group relative flex flex-col p-8 rounded-2xl border border-slate-100 hover:border-accent-500/30 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-accent-500 transition-colors duration-300 mb-6">
                  <item.icon className="w-5 h-5 text-accent-600 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-950">{item.title}</h3>
                <p className="mt-3 text-slate-500 leading-relaxed flex-grow">{item.desc}</p>
                
                {/* Learn More Link */}
                <Link 
                  href="/services" 
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                >
                  Learn more 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Perks & Benefits ─── */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 tracking-tight leading-[1.1]">
              Why you’ll love working here
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We prioritize our people. When you thrive, BimTech thrives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="group relative p-6 rounded-2xl border border-slate-200/60 bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mb-5 border border-accent-100 group-hover:bg-accent-500 transition-colors duration-300">
                  <perk.icon className="w-5 h-5 text-accent-600 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-semibold text-brand-950">{perk.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── General CTA ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl md:text-4xl font-bold text-brand-950 tracking-tight"
          >
            Want to join our talent network?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-4 text-lg text-slate-500"
          >
            We are always looking for exceptional talent. Send us your CV and a note about what you do best, and we’ll reach out when a role opens up.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white text-sm font-semibold rounded-full hover:bg-accent-600 transition-colors duration-300"
            >
              Send your CV <Send className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}