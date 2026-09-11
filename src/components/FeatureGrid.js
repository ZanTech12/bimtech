"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function FeatureGrid({ features, title }) {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-950 text-white text-xs font-medium rounded-full uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight">
            {title || "What's Included"}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group p-6 bg-white rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-50 transition-colors">
                <Check className="w-5 h-5 text-brand-900 group-hover:text-accent-600 transition-colors" />
              </div>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}