"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    school: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", school: "", service: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, label: "Address", value: "3, Awoyomi Crescent, Ahmadiyyah, Ojokoro, Lagos state." },
    { icon: Phone, label: "Phone", value: "+234706108 0995 " },
    { icon: Mail, label: "Email", value: "harbimbolaomiyale@gmail.com" },
    { icon: Clock, label: "Hours", value: "Mon - Fri: 8AM - 6PM" },
  ];

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
              Ready to transform your school? Request a demo or reach out with any questions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-semibold text-brand-950 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-brand-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">{c.label}</div>
                        <div className="text-sm text-brand-950 mt-1">{c.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 p-6 bg-accent-50 rounded-2xl border border-accent-100">
                <h3 className="font-semibold text-brand-950 text-sm">Free Demo Available</h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Schedule a free 30-minute demo of any BimTech solution. 
                  Our team will walk you through features and customize a package for your school.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-700 font-medium">
                    Thank you! We&apos;ll get back to you within 24 hours.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Full Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">School Name</label>
                    <input
                      value={form.school}
                      onChange={(e) => setForm({ ...form, school: e.target.value })}
                      className="mt-1.5 w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                      placeholder="Your school"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Service Interest</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="mt-1.5 w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="grading">Online Grading System</option>
                      <option value="website">School Website</option>
                      <option value="jamb">JAMB CBT Practice</option>
                      <option value="waec">WAEC CBT Practice</option>
                      <option value="neco">NECO CBT Practice</option>
                      <option value="iot">IoT Automation Bell</option>
                      <option value="biometrics">Biometrics Attendance</option>
                      <option value="all">All Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none"
                    placeholder="Tell us about your school's needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-950 text-white font-medium rounded-xl hover:bg-brand-900 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}