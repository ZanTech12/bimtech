"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "../lib/services";
import { ServiceHero } from "./ServiceHero";
import { CTASection } from "./CTASection";
import {
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  CalendarDays,
  BookOpen,
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
  Monitor,
  Lock,
  Search,
  Megaphone,
  GraduationCap,
  Check,
  Star,
} from "lucide-react";

const service = services.find((s) => s.id === "school-website");

export default function SchoolWebsiteContent() {
  const showcaseSites = [
    {
      name: "Gracefield College",
      location: "Lagos",
      image: "https://picsum.photos/seed/gracefield-school/600/400.jpg",
      tags: ["Portal", "LMS", "Payment"],
    },
    {
      name: "Kingsway Academy",
      location: "Abuja",
      image: "https://picsum.photos/seed/kingsway-academy/600/400.jpg",
      tags: ["Portal", "Events", "Blog"],
    },
    {
      name: "Al-Hikmah Schools",
      location: "Port Harcourt",
      image: "https://picsum.photos/seed/alhikmah-school/600/400.jpg",
      tags: ["Biometrics", "Attendance", "Results"],
    },
  ];

  const coreFeatures = [
    {
      icon: Palette,
      title: "Custom Brand Design",
      desc: "Every pixel tailored to your school's identity — colors, logo, typography, and layout. No templates.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Responsive",
      desc: "Perfect on every device. Parents check grades on phones, students on tablets, admin on desktops.",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Multi-Role Portals",
      desc: "Separate dashboards for students, parents, teachers, and administrators — each with relevant tools.",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: ShoppingCart,
      title: "Online Fee Payment",
      desc: "Integrated Paystack/Flutterwave. Parents pay tuition online. Auto-receipts and payment tracking.",
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: BookOpen,
      title: "LMS Integration",
      desc: "Online classes, assignments, quizzes, and resource sharing. Full e-learning capability built in.",
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: CalendarDays,
      title: "Events & News",
      desc: "Manage school calendar, publish news, send push notifications. Parents never miss important dates.",
      color: "from-teal-500 to-cyan-600",
    },
  ];

  const techStack = [
    { icon: Globe, name: "Next.js", desc: "Blazing fast, SEO-optimized" },
    { icon: ShieldCheck, name: "SSL/HTTPS", desc: "Enterprise-grade security" },
    { icon: Search, name: "SEO Ready", desc: "Rank on Google locally" },
    { icon: Zap, name: "CDN", desc: "Global edge caching" },
    { icon: Lock, name: "Auth", desc: "Secure role-based access" },
    { icon: Monitor, name: "Analytics", desc: "Track visitors & behavior" },
  ];

  const portalFeatures = [
    {
      role: "Student",
      color: "sky",
      features: [
        "View results & GPA",
        "Submit assignments",
        "Access e-library",
        "Check timetable",
        "Pay fees online",
      ],
    },
    {
      role: "Parent",
      color: "emerald",
      features: [
        "Monitor child's grades",
        "Pay school fees",
        "Receive alerts",
        "View attendance",
        "Message teachers",
      ],
    },
    {
      role: "Teacher",
      color: "violet",
      features: [
        "Upload results",
        "Manage assignments",
        "Take attendance",
        "View class analytics",
        "Communicate with parents",
      ],
    },
    {
      role: "Admin",
      color: "orange",
      features: [
        "Full site management",
        "User management",
        "Financial reports",
        "System settings",
        "Audit logs",
      ],
    },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "₦15,000",
      period: "/month",
      desc: "For small schools with basic needs",
      features: [
        "Custom responsive website",
        "Up to 500 students",
        "News & events management",
        "Contact form & map",
        "SSL certificate",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₦35,000",
      period: "/month",
      desc: "For growing schools that need portals",
      features: [
        "Everything in Starter",
        "Student & parent portals",
        "Online fee payment",
        "LMS integration",
        "Up to 2,000 students",
        "Push notifications",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₦75,000",
      period: "/month",
      desc: "For large school groups & chains",
      features: [
        "Everything in Professional",
        "Multi-campus support",
        "Custom integrations",
        "Biometrics integration",
        "UnlimitedS students",
        "Dedicated account manager",
        "24/7 phone support",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

  const colorMap = {
    sky: { bg: "bg-sky-50", border: "border-sky-200", text: "text-sky-700", badge: "bg-sky-100 text-sky-700" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700" },
    violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-700", badge: "bg-violet-100 text-violet-700" },
    orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", badge: "bg-orange-100 text-orange-700" },
  };

  return (
    <>
      <ServiceHero service={service} />

      {/* ═══════════════════════════════════════════
          CORE FEATURES SHOWCASE
          ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-950 text-white text-xs font-medium rounded-full uppercase tracking-wider mb-4">
              Core Features
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight">
              Everything a modern school website needs
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              Not just a brochure site — a fully functional digital campus that
              connects your entire school community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-2xl hover:border-slate-200 transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient orb background */}
                  <div
                    className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
                  />

                  <div
                    className={`relative w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="relative text-xl font-semibold text-brand-950">
                    {feature.title}
                  </h3>
                  <p className="relative mt-3 text-slate-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LIVE SHOWCASE / PORTFOLIO
          ═══════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-600 text-xs font-medium rounded-full uppercase tracking-wider mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight">
              Schools we&apos;ve built for
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              300+ schools across Nigeria trust BimTech with their digital presence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {showcaseSites.map((site, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">
                      {site.name}
                    </h3>
                    <p className="text-white/70 text-xs mt-0.5">
                      {site.location}, Nigeria
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {site.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 hover:text-accent-600 transition-colors group"
            >
              View more school websites
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MULTI-ROLE PORTALS
          ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-950 text-white text-xs font-medium rounded-full uppercase tracking-wider mb-4">
              Portals
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight">
              One website, four experiences
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              Each user role sees a tailored dashboard with the tools and
              information relevant to them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portalFeatures.map((portal, i) => {
              const c = colorMap[portal.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-6 rounded-2xl ${c.bg} border ${c.border}`}
                >
                  <span
                    className={`inline-block px-3 py-1 ${c.badge} text-xs font-semibold rounded-full mb-4`}
                  >
                    {portal.role}
                  </span>
                  <ul className="space-y-3">
                    {portal.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2.5 text-sm text-brand-950"
                      >
                        <Check className={`w-4 h-4 ${c.text} shrink-0`} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BROWSER PREVIEW MOCKUP
          ═══════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-brand-950 to-brand-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 text-xs font-medium rounded-full uppercase tracking-wider mb-4">
                Live Preview
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Beautiful on every screen
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Your school website adapts perfectly to phones, tablets, and
                desktops. Parents check grades on the go, teachers manage
                classes from laptops, and admin oversees everything from any
                device.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: Smartphone, label: "Mobile", pct: "65%" },
                  { icon: Monitor, label: "Desktop", pct: "28%" },
                  { icon: Zap, label: "Speed", pct: "98" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-4 bg-white/5 border border-white/10 rounded-xl text-center"
                    >
                      <Icon className="w-6 h-6 text-accent-400 mx-auto mb-2" />
                      <div className="text-lg font-semibold text-white">
                        {item.pct}
                      </div>
                      <div className="text-xs text-slate-400">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Browser Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 flex-1 bg-slate-700 rounded-md px-3 py-1.5">
                    <span className="text-xs text-slate-400">
                      https://www.gracefieldcollege.edu.ng
                    </span>
                  </div>
                </div>
                {/* Page Content Mockup */}
                <div className="p-6 bg-white">
                  {/* Mock Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-brand-950 rounded-lg" />
                      <span className="text-sm font-semibold text-brand-950">
                        Gracefield College
                      </span>
                    </div>
                    <div className="hidden sm:flex gap-4">
                      {["Home", "Portal", "Admissions", "Contact"].map(
                        (item) => (
                          <span
                            key={item}
                            className="text-xs text-slate-500"
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  {/* Mock Hero */}
                  <div className="bg-gradient-to-r from-brand-950 to-brand-800 rounded-xl p-6 mb-4">
                    <h3 className="text-white font-semibold text-lg">
                      Excellence in Education
                    </h3>
                    <p className="text-slate-300 text-xs mt-1">
                      Admissions now open for 2024/2025 session
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1 px-3 py-1.5 bg-accent-500 text-white text-xs font-medium rounded-lg">
                      Apply Now <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                  {/* Mock Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Check Results", icon: GraduationCap },
                      { label: "Pay Fees", icon: ShoppingCart },
                      { label: "E-Learning", icon: BookOpen },
                    ].map((card) => {
                      const Icon = card.icon;
                      return (
                        <div
                          key={card.label}
                          className="p-3 bg-slate-50 rounded-lg text-center"
                        >
                          <Icon className="w-5 h-5 text-brand-600 mx-auto mb-1" />
                          <span className="text-[10px] text-slate-600 font-medium">
                            {card.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TECH STACK
          ═══════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight">
              Built with the best technology
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Enterprise-grade infrastructure that&apos;s fast, secure, and
              reliable.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="p-6 bg-white rounded-2xl border border-slate-100 text-center hover:shadow-lg hover:border-slate-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-50 transition-colors">
                    <Icon className="w-6 h-6 text-brand-600 group-hover:text-accent-500 transition-colors" />
                  </div>
                  <h3 className="text-sm font-semibold text-brand-950">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{tech.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS
          ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-950 text-white text-xs font-medium rounded-full uppercase tracking-wider mb-4">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight">
              From brief to live in 14 days
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Brief",
                desc: "We learn about your school — brand colors, logo, structure, must-have features, and content needs.",
              },
              {
                step: "02",
                title: "Design & Prototype",
                desc: "Our designers create custom mockups. You review, suggest changes, and approve before any code is written.",
              },
              {
                step: "03",
                title: "Development & Integration",
                desc: "We build the site, integrate portals, payment gateways, LMS, and connect to your existing BimTech systems.",
              },
              {
                step: "04",
                title: "Training & Launch",
                desc: "We train your staff, migrate content, configure domains, and go live. Ongoing support from day one.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-8 items-start group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-950 rounded-2xl flex items-center justify-center text-white text-lg font-bold shrink-0 group-hover:bg-accent-500 transition-colors duration-300 shadow-lg">
                    {item.step}
                  </div>
                  {i < 3 && (
                    <div className="w-0.5 h-16 bg-slate-200 mt-3" />
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="text-lg font-semibold text-brand-950">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRICING
          ═══════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-600 text-xs font-medium rounded-full uppercase tracking-wider mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight">
              Plans for every school size
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              No hidden fees. Cancel anytime. All plans include hosting, SSL,
              and domain configuration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  tier.popular
                    ? "bg-brand-950 text-white border-brand-800 shadow-2xl scale-[1.02]"
                    : "bg-white border-slate-200 hover:shadow-xl"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <h3
                  className={`text-lg font-semibold ${
                    tier.popular ? "text-white" : "text-brand-950"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    tier.popular ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {tier.desc}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold ${
                      tier.popular ? "text-accent-400" : "text-brand-950"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.popular ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      className={`flex items-center gap-2.5 text-sm ${
                        tier.popular ? "text-slate-200" : "text-slate-600"
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 shrink-0 ${
                          tier.popular
                            ? "text-accent-400"
                            : "text-accent-500"
                        }`}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                    tier.popular
                      ? "bg-accent-500 text-white hover:bg-accent-600"
                      : "bg-brand-950 text-white hover:bg-brand-900"
                  }`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIAL
          ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Megaphone className="w-10 h-10 text-accent-500/30 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-semibold text-brand-950 leading-snug">
              &ldquo;Our school website by BimTech transformed how we
              communicate with parents. Fee collection went from 60% to 95%
              compliance in one term.&rdquo;
            </blockquote>
            <div className="mt-8">
              <div className="font-semibold text-brand-950">
                Mr. Adebayo Ogundimu
              </div>
              <div className="text-sm text-slate-500 mt-1">
                Director, Gracefield College, Lagos
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}