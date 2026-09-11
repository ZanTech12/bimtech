"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getIcon } from "../lib/icons";

export function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const Icon = getIcon(service.icon);

  const colorMap = {
    sky: { bg: "bg-sky-50", icon: "text-sky-600", rgb: "14, 165, 233" },
    blue: { bg: "bg-blue-50", icon: "text-blue-600", rgb: "59, 130, 246" },
    orange: { bg: "bg-orange-50", icon: "text-orange-600", rgb: "249, 115, 22" },
    emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", rgb: "16, 185, 129" },
    violet: { bg: "bg-violet-50", icon: "text-violet-600", rgb: "139, 92, 246" },
    amber: { bg: "bg-amber-50", icon: "text-amber-600", rgb: "245, 158, 11" },
    rose: { bg: "bg-rose-50", icon: "text-rose-600", rgb: "244, 63, 94" },
  };

  const c = colorMap[service.color] || colorMap.sky;

  // Update CSS variables for mouse tracking spotlight without causing re-renders
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
      onMouseMove={handleMouseMove}
    >
      <Link
        href={service.href}
        className={`group relative h-full block p-8 rounded-2xl border border-slate-100 bg-white overflow-hidden transition-all duration-500 hover:border-transparent hover:-translate-y-1`}
      >
        {/* Dynamic Glow Box-Shadow on Hover */}
        <style>{`
          .group:hover {
            box-shadow: 0 10px 40px -10px rgba(${c.rgb}, 0.25), 0 0 0 1px rgba(${c.rgb}, 0.1);
          }
        `}</style>

        {/* Mouse-following Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(${c.rgb}, 0.08), transparent 40%)`,
          }}
        />

        {/* Background Accent Blob */}
        <div className={`absolute -top-12 -right-12 w-32 h-32 ${c.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

        <div className="relative z-10 flex flex-col h-full">
          <div
            className={`w-14 h-14 ${c.bg} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
          >
            <Icon className={`w-7 h-7 ${c.icon}`} />
          </div>

          <h3 className="text-xl font-semibold text-brand-950 group-hover:text-accent-500 transition-colors duration-300">
            {service.title}
          </h3>

          <p className="mt-3 text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">
            {service.description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-500 group-hover:gap-3 transition-all duration-300">
            Learn more 
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}