"use client";

export const metadata = {
  title: "Home", // Renders as "Home | BimTech SOLUTIONS"
  description: "Welcome to BimTech SOLUTIONS. Nigeria's leading integrated education technology provider offering online grading, CBT practice, IoT bells, and biometrics.",
  alternates: {
    canonical: "https://bimtech.com.ng",
  },
};

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Smartphone,
  Bot,
  Router,
  Headset, 
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { services } from "@/lib/services";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";

// Modern easing curve for smooth, premium animations
const ease = [0.22, 1, 0.36, 1];

export default function HomePage() {
  const whySectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!whySectionRef.current) return;
    const rect = whySectionRef.current.getBoundingClientRect();
    whySectionRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    whySectionRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="bg-white">
      {/* ─── Hero ─── */}
      <HeroSection />

      {/* ─── Services Grid ─── */}
      <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
        {/* Modern dotted background pattern */}
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-50 text-accent-600 text-xs font-semibold rounded-full uppercase tracking-wider mb-5 border border-accent-100">
              <Sparkles className="w-3.5 h-3.5" />
              Our Solutions
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-950 tracking-tight leading-[1.1]">
              Everything your school or organization needs
            </h2>
            <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Explore our integrated educational platforms alongside enterprise-grade 
              mobile, AI, and IoT engineering solutions tailored for modern businesses.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mt-16 flex justify-center"
          >
            <Link
              href="/services"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-950 text-white text-sm font-semibold rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand-950/20 hover:-translate-y-0.5"
            >
              <span className="relative z-10">View all services</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <StatsSection />

      {/* ─── Hardware & Devices Showcase ─── */}
      <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-50 text-accent-600 text-xs font-semibold rounded-full uppercase tracking-wider mb-5 border border-accent-100">
              <ShieldCheck className="w-3.5 h-3.5" />
              Hardware & Devices
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-950 tracking-tight leading-[1.1]">
              State-of-the-Art Biometric & IoT Systems
            </h2>
            <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              From high-accuracy biometric attendance tracking to automated IoT bell systems, our hardware is built for seamless and secure school management.
            </p>
          </motion.div>

          {/* 3-Column Grid for reduced image size */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="group flex justify-center"
            >
              <Image
                src="/bm.jpeg"
                alt="Biometric fingerprint scanning device"
                width={400}
                height={300}
                className="rounded-2xl shadow-xl border border-slate-100 object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="group flex justify-center"
            >
              <Image
                src="/bm2.jpeg"
                alt="Facial recognition interface"
                width={400}
                height={300}
                className="rounded-2xl shadow-xl border border-slate-100 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="group flex justify-center"
            >
              <Image
                src="/bell 1.jpg"
                alt="IoT Automation Bell"
                width={400}
                height={300}
                className="rounded-2xl shadow-xl border border-slate-100 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Why BimTech Section ─── */}
      <section 
        ref={whySectionRef} 
        onMouseMove={handleMouseMove} 
        className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden"
      >
        {/* Soft gradient blobs */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-brand-950/5 rounded-full blur-3xl"></div>

        {/* Mouse-Tracking Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(245, 158, 11, 0.04), transparent 40%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/10 text-accent-600 text-xs font-semibold rounded-full uppercase tracking-wider mb-6 border border-accent-500/20">
                Why BimTech
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-950 tracking-tight leading-[1.1]">
                Built for African institutions, by African engineers
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                We understand the unique challenges of Nigerian and West African
                schools and businesses — from unreliable power to scaling IT infrastructure. 
                Every BimTech product, whether for education or enterprise, is designed to work 
                in real-world conditions: robust, easy to deploy, and supported locally.
              </p>

              <div className="mt-12 space-y-6">
                {[
                  { icon: Smartphone, title: "Mobile & Desktop Apps", desc: "Custom software development for mobile and desktop, built to scale with your business needs." },
                  { icon: Bot, title: "Robotics, AI & Embedded", desc: "Cutting-edge robotics, artificial intelligence, and embedded system engineering solutions." },
                  { icon: Router, title: "Full-Stack IoT Engineering", desc: "End-to-end IoT infrastructure, from hardware design to cloud integration and deployment." },
                  { icon: Headset, title: "Local Support Team", desc: "In-country engineers available 24/7 via phone, chat, or on-site for all your tech needs." },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="group relative flex items-start gap-5 p-4 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-sm transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-slate-100 shadow-sm group-hover:shadow-md group-hover:border-accent-500/30 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-accent-500 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-brand-950 group-hover:text-accent-500 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image / Visuals */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
              className="relative"
            >
              {/* Gradient glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent-500/20 via-brand-950/10 to-transparent rounded-[2rem] blur-2xl"></div>

              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="/map.jpg"
                  alt="BimTech technology solutions in action"
                  className="w-full h-full object-cover"
                />
                {/* Image overlay tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating stat card - Glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease }}
                className="absolute -bottom-8 -left-8 sm:-left-12 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/60 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-950 tracking-tight">
                    99.9%
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">Uptime SLA</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <TestimonialSection />

      {/* ─── CTA ─── */}
      <CTASection />
    </div>
  );
}