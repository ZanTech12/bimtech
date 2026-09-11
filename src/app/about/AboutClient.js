"use client";

import { motion } from "framer-motion";
import { companyHistory } from "../../lib/services";
import {
  Award,
  Users,
  Target,
  Lightbulb,
  MapPin,
  Calendar,
} from "lucide-react";
import Image from "next/image";

export default function AboutClient() {
  const paragraphs = companyHistory.story.split("\n\n");

  const milestones = [
    { year: "2015", event: "BimTech founded in Lagos" },
    { year: "2016", event: "Launched JAMB CBT Practice platform" },
    { year: "2017", event: "IoT Automation Bell — ModTech Innovation Award" },
    { year: "2018", event: "Expanded into Enterprise Mobile App Development" },
    { year: "2019", event: "Biometrics Attendance & IoT systems deployed" },
    { year: "2020", event: "10x growth during COVID-19 digital shift" },
    { year: "2021", event: "Robotics, AI & Embedded Systems division launched" },
    { year: "2022", event: "Abuja & Port Harcourt offices opened" },
    { year: "2023", event: "500+ institutions & businesses partnered" },
    { year: "2024", event: "AI-powered analytics & Full-Stack IoT solutions launched" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      text: "Making world-class technology accessible to every African school and business.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      text: "We build what doesn't exist yet — from IoT infrastructure to AI and mobile apps.",
    },
    {
      icon: Users,
      title: "Customer Obsessed",
      text: "Every feature starts with a real problem from a real school or enterprise.",
    },
    {
      icon: Award,
      title: "Excellence Always",
      text: "99.9% uptime, 24/7 support, and zero tolerance for mediocrity.",
    },
  ];

  // Click handlers
  const handleMilestoneClick = (milestone) => {
    console.log("Milestone clicked:", milestone);
    // Add your logic here (e.g., open a modal, navigate, etc.)
  };

  const handleValueClick = (value) => {
    console.log("Value clicked:", value);
    // Add your logic here
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 text-xs font-medium rounded-full uppercase tracking-wider mb-6">
              About BimTech
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
              Our Story
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              From a 3-person startup to a leading African technology company
              — here&apos;s how we got here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Owner Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-slate-100 shadow-xl">
                  <Image
                    src="/owner.jpg"
                    alt="Miss. Omiyale Abimbola Olayemi, CEO of BimTech"
                    width={506}
                    height={554}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Years Badge */}
                <div className="absolute -bottom-6 -right-6 bg-brand-950 text-white p-6 rounded-2xl shadow-2xl">
                  <div className="text-3xl font-semibold">
                    {new Date().getFullYear() - companyHistory.founded}+
                  </div>
                  <div className="text-xs text-slate-300 uppercase tracking-wider">
                    Years
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Founder Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 text-xs font-medium rounded-full uppercase tracking-wider mb-4">
                Founder &amp; CEO
              </span>
              {/* Explicitly added CEO name here */}
              <h2 className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight">
                Miss. Omiyale Abimbola Olayemi
              </h2>

              <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> Lagos, Nigeria
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> Founded{" "}
                  {companyHistory.founded}
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-slate-600 leading-relaxed text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-950 text-white text-xs font-medium rounded-full uppercase tracking-wider mb-4">
              Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight">
              Our Journey
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => handleMilestoneClick(m)}
                className="flex gap-6 items-start group cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-brand-950 rounded-xl flex items-center justify-center text-white text-sm font-semibold shrink-0 group-hover:bg-accent-500 transition-colors">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-12 bg-slate-200 mt-2" />
                  )}
                </div>
                <div className="pb-12 p-3 -m-3 rounded-xl transition-all duration-300 group-hover:bg-white group-hover:shadow-md group-hover:border-accent-200 border border-transparent">
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    {m.year}
                  </div>
                  <div className="text-base text-brand-950 font-medium mt-1">
                    {m.event}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  onClick={() => handleValueClick(v)}
                  whileHover={{ scale: 1.03 }}
                  className="p-8 rounded-2xl bg-brand-50 border border-brand-100 text-center cursor-pointer hover:bg-white hover:border-accent-400 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-brand-950 rounded-xl flex items-center justify-center mx-auto mb-5 transition-colors group-hover:bg-accent-500">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-950">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {v.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}