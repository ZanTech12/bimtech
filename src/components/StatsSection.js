"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { GraduationCap, Users, Briefcase, CalendarClock } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Schools Served", icon: GraduationCap },
  { value: 300, suffix: "K+", label: "Students Reached", icon: Users },
  { value: 65, suffix: "+", label: "Team Members", icon: Briefcase },
  { value: 9, suffix: "+", label: "Years of Impact", icon: CalendarClock },
];

export function StatsSection() {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    containerRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseMove={handleMouseMove}
          className="relative overflow-hidden rounded-3xl bg-brand-950 p-12 md:p-16 shadow-2xl shadow-brand-950/20"
        >
          {/* Background Tech Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
          
          {/* Background Accent Glows */}
          <div className="absolute -top-20 -left-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-brand-700/30 rounded-full blur-3xl" />

          {/* Mouse-Tracking Spotlight */}
          <div
            className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.06), transparent 40%)`,
            }}
          />

          {/* Top Inner Glow Border */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col items-center text-center lg:px-8 ${i !== 0 ? "lg:border-l lg:border-white/10" : ""}`}
              >
                <div className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center mb-5 text-accent-500 transition-transform duration-300 hover:scale-110 hover:bg-white/10 cursor-default">
                  <stat.icon className="w-5 h-5" />
                </div>
                
                <div className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 flex items-center justify-center">
                  <Counter value={stat.value} />
                  <span className="ml-1">{stat.suffix}</span>
                </div>
                
                <div className="mt-3 text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Separate component to handle the count-up animation logic cleanly
function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}