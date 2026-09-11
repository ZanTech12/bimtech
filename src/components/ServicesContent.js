"use client";

import { motion } from "framer-motion";
import { services } from "../lib/services";
import { ServiceCard } from "./ServiceCard";
import { CTASection } from "./CTASection";

export default function ServicesContent() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 text-xs font-medium rounded-full uppercase tracking-wider mb-6">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
              Our Solutions
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Seven integrated platforms covering every aspect of school
              technology — from exams to infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}