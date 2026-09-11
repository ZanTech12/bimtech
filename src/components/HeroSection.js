"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, GraduationCap, Cpu, Star, ShieldCheck, Bell, Activity } from "lucide-react";
import { services } from "../lib/services";
import { getIcon } from "../lib/icons";

const liveActivities = [
  { icon: GraduationCap, text: "Redemption Gate Secondary School (RGSS) activate their Biometric Machine", color: "text-brand-600" },
  { icon: Activity, text: "120 students just completed a CBT practice", color: "text-emerald-500" },
  { icon: Bell, text: "IoT Bell synchronized at DDTech", color: "text-indigo-500" },
];

const partnerNames = [
  "Redemption Gate Secondary School (RGSS)",
  "DDTech",
  "King's College",
  "Queen's College",
  "Federal Govt College",
  "BimTech Academy",
];

export function HeroSection() {
  const [activityIndex, setActivityIndex] = useState(0);
  const [email, setEmail] = useState("");

  // Cycle through live activities
  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % liveActivities.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-accent-50" />
      {/* Subtle Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_60%,transparent_100%)]" />
      
      {/* Gradient Blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-950/5 rounded-full mb-8 border border-brand-950/5">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-brand-950 uppercase tracking-wider">
                Nigeria&apos;s #1 ModTech Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-950 tracking-tight leading-[1.1]">
              Technology that{" "}
              <span className="text-gradient">transforms</span> industries
            </h1>

            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-lg">
              From online grading to CBT practice, IoT bells to biometrics
              attendance — BimTech delivers integrated solutions for modern
              schools.
            </p>

            {/* Social Proof Stars */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600">
                Rated <span className="font-bold text-brand-950">4.9/5</span> by 500+ Educators
              </p>
            </div>

            {/* Inline Lead Capture Form */}
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md p-2 bg-white border border-slate-200 rounded-xl shadow-sm"
            >
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your school email" 
                className="flex-1 px-4 py-2.5 text-sm outline-none rounded-lg bg-transparent text-brand-950 placeholder:text-slate-400"
                required
              />
              <button 
                type="submit" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-950 text-white text-sm font-medium rounded-lg hover:bg-brand-900 transition-colors whitespace-nowrap"
              >
                Book a Demo <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Secondary CTA */}
            <div className="mt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-950 hover:text-accent-500 transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-brand-950/5 flex items-center justify-center group-hover:bg-accent-500/10 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </span>
                Watch our 2-min story
              </Link>
            </div>

            {/* Stats Row */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <span className="block text-base font-bold text-brand-950">500+</span>
                  <span className="block text-xs text-slate-500">Schools</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <span className="block text-base font-bold text-brand-950">7 Products</span>
                  <span className="block text-xs text-slate-500">Integrated Suite</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <span className="block text-base font-bold text-brand-950">99.9%</span>
                  <span className="block text-xs text-slate-500">Uptime SLA</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Concentric Circles */}
              <div className="absolute inset-0 rounded-full border border-brand-200/30" />
              <div className="absolute inset-8 rounded-full border border-brand-200/20" />
              <div className="absolute inset-16 rounded-full border border-accent-200/30" />

              {/* Central Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-brand-950 to-brand-900 rounded-3xl flex items-center justify-center shadow-2xl animate-float relative">
                  <Cpu className="w-20 h-20 text-white" />
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-accent-500"
                    animate={{ opacity: [0, 1, 0], scale: [1, 1.1, 1.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>

              {/* Floating Service Cards with Labels */}
              {services.slice(0, 4).map((s, i) => {
                const Icon = getIcon(s.icon);
                const positions = [
                  "top-0 left-12",
                  "top-12 right-0",
                  "bottom-12 left-0",
                  "bottom-0 right-12",
                ];
                return (
                  <motion.div
                    key={s.id}
                    className={`absolute ${positions[i]} flex items-center gap-2 p-3 pr-4 bg-white rounded-xl shadow-lg border border-slate-100 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-8 h-8 bg-brand-50 rounded-md flex items-center justify-center">
                      <Icon className="w-4 h-4 text-brand-600" />
                    </div>
                    <span className="text-xs font-medium text-brand-950 whitespace-nowrap">{s.title}</span>
                  </motion.div>
                );
              })}

              {/* Central Pulsing Dot */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Live Activity Notification */}
              <motion.div 
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-72 p-4 bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">Live Activity</span>
                </div>
                <div className="mt-2 h-10 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activityIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-2"
                    >
                      {(() => {
                        const ActivityIcon = liveActivities[activityIndex].icon;
                        return <ActivityIcon className={`w-4 h-4 ${liveActivities[activityIndex].color}`} />;
                      })()}
                      <p className="text-xs font-medium text-slate-700">{liveActivities[activityIndex].text}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trusted By Marquee */}
        <motion.div 
          className="mt-24 pt-10 border-t border-slate-200/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6">
            Trusted by leading institutions across Nigeria
          </p>
          <div className="relative w-full overflow-hidden mask-image-fade">
            <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
              {[...partnerNames, ...partnerNames].map((name, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-400 hover:text-brand-950 transition-colors cursor-default">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-sm font-medium whitespace-nowrap">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}