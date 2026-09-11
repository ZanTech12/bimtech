"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getIcon } from "../lib/icons";

export function ServiceHero({ service }) {
  const Icon = getIcon(service.icon);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Icon className="w-4 h-4 text-accent-400" />
              <span className="text-xs font-medium text-accent-300 uppercase tracking-wider">
                {service.shortTitle}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
              {service.title}
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 text-white font-medium rounded-xl hover:bg-accent-600 transition-colors"
              >
                Request Demo
              </Link>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-colors"
              >
                View Features
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {Object.entries(service.stats).map(([key, val], i) => (
              <div
                key={key}
                className={`p-6 rounded-2xl bg-white/5 border border-white/10 text-center ${
                  i === 1 ? "lg:-translate-y-4" : i === 2 ? "lg:translate-y-2" : ""
                }`}
              >
                <div className="text-3xl font-semibold text-accent-400">{val}</div>
                <div className="mt-1 text-xs text-slate-400 uppercase tracking-wider capitalize">
                  {key}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}