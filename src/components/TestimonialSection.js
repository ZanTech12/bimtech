"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, Star, GraduationCap, TrendingUp, Clock, Headphones } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Oluwayemi Oluwabunmilofe",
    role: "Lecturer, Federal College Agriculture, Ibadan",
    text: "BimTech's grading system saved us 80% of result processing time. What used to take weeks now takes hours.",
    image: "/chairman.jpg",
  },
  {
    name: "Mrs. Oluwatoyin Christianah",
    role: "IT Director, Kingsway Academy",
    text: "The IoT Bell system is a game-changer. No more manual bell ringing, and the emergency feature gives us peace of mind.",
    image: "/chairman 2.jpg",
  },
  {
    name: "Mrs. Oluwabukola Ibrahim",
    role: "Propritress, Hazifad Schools",
    text: "Our JAMB and WAEC practice platforms from BimTech helped our students achieve a 95% pass rate last year.",
    image: "/chairman 3.jpg",
  },
];

const stats = [
  { value: "50+", label: "Schools Powered", icon: GraduationCap },
  { value: "95%", label: "Pass Rate Increase", icon: TrendingUp },
  { value: "80%", label: "Time Saved", icon: Clock },
  { value: "24/7", label: "Support", icon: Headphones },
];

export function TestimonialSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-white">
      {/* Decorative background grid and blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-950/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 backdrop-blur-md border border-brand-950/10 text-brand-950 text-xs font-medium rounded-full uppercase tracking-wider mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-950 tracking-tight leading-[1.1]">
            Trusted by{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent-500 to-brand-950 bg-clip-text text-transparent">
                leading industries
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  d="M2 9C75 3 225 3 298 9"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#0f172a" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            Real stories from educators and administrators transforming their institutions with BimTech.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} i={i} />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:flex flex-wrap items-center justify-center gap-y-8 md:gap-x-16 p-8 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/60 shadow-sm"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 text-center md:text-left justify-center">
              <div className="w-12 h-12 rounded-xl bg-brand-950/5 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-accent-500" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-brand-950 to-accent-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Extracted Card Component for cleaner mouse tracking logic
function TestimonialCard({ t, i }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative h-full"
    >
      <div className="relative h-full p-8 bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2">
        
        {/* Mouse-tracking Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(245, 158, 11, 0.06), transparent 40%)`,
          }}
        />

        {/* Massive Watermark Quote Icon */}
        <Quote 
          className="absolute top-6 right-4 w-24 h-24 text-slate-50 fill-slate-50 transition-colors duration-500 group-hover:text-accent-50/50 group-hover:fill-accent-50/20 group-hover:rotate-3" 
          strokeWidth={1}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Star rating */}
          <div className="flex gap-0.5 mb-4">
            {[...Array(5)].map((_, idx) => (
              <Star
                key={idx}
                className="w-4 h-4 fill-accent-500 text-accent-500"
              />
            ))}
          </div>

          {/* Testimonial text */}
          <p className="text-slate-700 text-base leading-relaxed font-medium flex-grow">
            &ldquo;{t.text}&rdquo;
          </p>

          {/* Author section */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-brand-950 text-sm truncate group-hover:text-accent-500 transition-colors duration-300">
                {t.name}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 truncate">
                {t.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}