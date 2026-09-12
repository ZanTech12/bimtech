// src/app/about/AboutClient.js
"use client"; // ✅ REQUIRED — enables framer-motion reveals

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
import { motion } from "framer-motion";
import {
  Reveal,
  RevealWords,
  RevealImage,
  DrawingLine,
  FlipCards,
} from "@/components/RevealOnScroll";

const ease = [0.22, 1, 0.36, 1];

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

  return (
    <>
      {/* ═══ Hero — ambient orbs + word-by-word title reveal ═══ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950" />

        {/* ✨ breathing ambient orbs */}
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          aria-hidden="true"
        />
        <motion.div
          animate={{ y: [0, -24, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-24 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <Reveal delay={0.2}>
            <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 text-xs font-medium rounded-full uppercase tracking-wider mb-6 ring-1 ring-accent-500/20">
              About BimTech
            </span>
          </Reveal>

          {/* ✨ word-by-word title reveal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
            <RevealWords text="Our Story" delay={0.35} />
          </h1>

          <Reveal delay={0.7}>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              From a 3-person startup to a leading African technology company
              — here&apos;s how we got here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ Founder — curtain-unveil photo + corner accents + staggered text ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Owner Portrait — ✨ clip-path curtain reveal */}
            <RevealImage className="relative" delay={0.1}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-slate-100 shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/owner.jpg"
                    alt="Miss. Omiyale Abimbola Olayemi, CEO of BimTech"
                    width={506}
                    height={554}
                    className="w-full h-auto object-cover"
                    priority // Good! Keeps this loading fast for LCP
                  />
                </div>

                {/* ✨ animated corner accents */}
                <div className="absolute -top-3 -left-3 w-14 h-14 border-t-4 border-l-4 border-accent-500 rounded-tl-2xl" aria-hidden="true" />
                <div className="absolute -bottom-3 -right-3 w-14 h-14 border-b-4 border-r-4 border-brand-950 rounded-br-2xl" aria-hidden="true" />

                {/* Years Badge — springs in after the photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9, type: "spring", bounce: 0.4 }}
                  className="absolute -bottom-6 -right-6 bg-brand-950 text-white p-6 rounded-2xl shadow-2xl"
                >
                  <div className="text-3xl font-semibold">
                    {new Date().getFullYear() - companyHistory.founded}+
                  </div>
                  <div className="text-xs text-slate-300 uppercase tracking-wider">
                    Years
                  </div>
                </motion.div>
              </div>
            </RevealImage>

            {/* Founder Info — ✨ staggered reveals */}
            <div>
              <Reveal>
                <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 text-xs font-medium rounded-full uppercase tracking-wider mb-4">
                  Founder &amp; CEO
                </span>
              </Reveal>

              <RevealWords
                text="Miss. Omiyale Abimbola Olayemi"
                className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight block"
                delay={0.15}
              />

              <Reveal delay={0.4}>
                <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> Lagos, Nigeria
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" /> Founded{" "}
                    {companyHistory.founded}
                  </span>
                </div>
              </Reveal>

              <div className="mt-8 space-y-4">
                {paragraphs.map((p, i) => (
                  <Reveal key={i} delay={0.5 + i * 0.12}>
                    <p className="text-slate-600 leading-relaxed text-base">
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Timeline — ✨ scroll-drawing spine + alternating 3D slide-ins ═══ */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
              <span className="inline-block px-4 py-1.5 bg-brand-950 text-white text-xs font-medium rounded-full uppercase tracking-wider mb-4">
                Timeline
              </span>
            </Reveal>
            <RevealWords
              text="Our Journey"
              className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight"
              delay={0.15}
            />
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* ✨ spine draws itself as you scroll */}
            <DrawingLine className="absolute left-6 top-0 bottom-0 hidden sm:block" />

            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: left ? -48 : 48, rotateY: left ? 12 : -12 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.7, ease }}
                  style={{ transformPerspective: 900 }}
                  className="flex gap-6 items-start group cursor-pointer mb-2"
                >
                  <div className="flex flex-col items-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-12 h-12 bg-brand-950 rounded-xl flex items-center justify-center text-white text-sm font-semibold shrink-0 group-hover:bg-accent-500 transition-colors duration-300 shadow-lg"
                    >
                      {m.year.slice(2)}
                    </motion.div>
                  </div>

                  <div className="pb-12 p-4 -m-1 rounded-xl transition-all duration-300 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-slate-200/70 group-hover:border-accent-300 border border-transparent flex-1">
                    <div className="text-xs text-accent-600 font-bold uppercase tracking-widest">
                      {m.year}
                    </div>
                    <div className="text-base text-brand-950 font-medium mt-1">
                      {m.event}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Values — ✨ 3D flip-up cards with spotlight hover ═══ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <RevealWords
              text="Our Values"
              className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight"
            />
          </div>

          <FlipCards className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" itemClassName="h-full">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  whileHover={{ y: -8, rotateX: 4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative h-full p-8 rounded-2xl bg-brand-50 border border-brand-100 text-center cursor-pointer hover:bg-white hover:border-accent-400 hover:shadow-2xl hover:shadow-accent-500/10 transition-colors duration-300 overflow-hidden group"
                >
                  {/* ✨ spotlight sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 via-accent-500/0 to-accent-500/0 group-hover:from-accent-500/5 group-hover:to-transparent transition-all duration-500" aria-hidden="true" />

                  <div className="relative w-14 h-14 bg-brand-950 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent-500 transition-colors duration-300 [transform:translateZ(30px)]">
                    <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="relative text-lg font-semibold text-brand-950 [transform:translateZ(20px)]">
                    {v.title}
                  </h3>
                  <p className="relative mt-3 text-sm text-slate-600 leading-relaxed [transform:translateZ(10px)]">
                    {v.text}
                  </p>
                </motion.div>
              );
            })}
          </FlipCards>
        </div>
      </section>
    </>
  );
}