
"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
} from "framer-motion";

import {
  ArrowRight,
  Smartphone,
  Bot,
  Router,
  Headset,
  Sparkles,
  ShieldCheck,
  Building2,
  GraduationCap,
  Cpu,
  ChevronRight,
} from "lucide-react";

import { services } from "@/lib/services";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";

// ======================================================
// GLOBAL ANIMATION SETTINGS
// ======================================================

const ease = [0.22, 1, 0.36, 1];

// ======================================================
// TRUSTED INSTITUTIONS DATA
// Replace initials with approved official logos when available.
// ======================================================

const institutions = [
  {
    id: 1,
    name: "Redemption Gate Secondary School",
    short: "RGSS",
    location: "Nigeria",
    type: "Educational Institution",
    icon: GraduationCap,
  },
  {
    id: 2,
    name: "DDTech",
    short: "DD",
    location: "Nigeria",
    type: "Technology",
    icon: Cpu,
  },
  {
    id: 3,
    name: "King's College",
    short: "KC",
    location: "Lagos State",
    type: "Educational Institution",
    icon: GraduationCap,
  },
  {
    id: 4,
    name: "Queen's College",
    short: "QC",
    location: "Lagos State",
    type: "Educational Institution",
    icon: GraduationCap,
  },
  {
    id: 5,
    name: "Federal Government College",
    short: "FGC",
    location: "Nigeria",
    type: "Educational Institution",
    icon: GraduationCap,
  },
  {
    id: 6,
    name: "BimTech Academy",
    short: "BA",
    location: "Nigeria",
    type: "Technology & Training",
    icon: Cpu,
  },
  {
    id: 7,
    name: "Fountain Hills School",
    short: "FH",
    location: "Imo State",
    type: "Educational Institution",
    icon: GraduationCap,
  },
  {
    id: 8,
    name: "Divine Solar Hub",
    short: "DSH",
    location: "Benue State",
    type: "Business & Technology",
    icon: Building2,
  },
];

// ======================================================
// 3D TILT COMPONENT
// ======================================================

function Tilt3D({
  children,
  className = "",
  max = 10,
  scale = 1.02,
}) {
  const ref = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(my, [-0.5, 0.5], [max, -max]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(mx, [-0.5, 0.5], [-max, max]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const handleMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className={className} style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={{ scale }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

// ======================================================
// FLOATING 3D COMPONENT
// ======================================================

function Float3D({
  children,
  className = "",
  duration = 6,
  delay = 0,
  intensity = 10,
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -intensity, 0],
        rotateX: [0, 4, 0, -4, 0],
        rotateY: [0, -5, 0, 5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

// ======================================================
// TRUSTED INSTITUTIONS SLIDER
// Responsive infinite slider with mobile touch support
// ======================================================

function TrustedInstitutions() {
  const sliderRef = useRef(null);

  // Duplicate the collection to create a seamless loop.
  const sliderItems = [...institutions, ...institutions];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">

      {/* Background decoration */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-amber-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 sm:text-xs">
            <ShieldCheck className="h-4 w-4" />
            Our Network
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-950 sm:text-4xl md:text-5xl">
            Building partnerships.
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-accent-500 bg-clip-text text-transparent">
              Powering possibilities.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Connecting educational institutions, businesses and
            technology-driven organisations through intelligent
            software, automation and digital innovation.
          </p>
        </motion.div>

        {/* Slider heading */}

        <div className="mb-6 flex items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Institutions & Organisations
            </span>
          </div>

          <span className="hidden text-xs font-medium text-slate-400 sm:block">
            Continuous showcase
          </span>
        </div>
      </div>

      {/* Infinite slider */}

      <div
        ref={sliderRef}
        className="trusted-slider group relative w-full"
      >
        <div className="trusted-slider-track flex w-max items-stretch">

          {sliderItems.map((institution, index) => {
            const InstitutionIcon = institution.icon;

            return (
              <div
                key={`${institution.id}-${index}`}
                aria-hidden={index >= institutions.length}
                className="w-[260px] shrink-0 px-2.5 sm:w-[310px] sm:px-3 lg:w-[350px]"
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.025,
                  }}
                  transition={{
                    duration: 0.3,
                    ease,
                  }}
                  className="group/card relative flex h-full min-h-[190px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] sm:min-h-[205px] sm:rounded-3xl sm:p-6"
                >

                  {/* Hover gradient */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-indigo-50/0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

                  {/* Decorative corner */}

                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/[0.04] blur-2xl transition-all duration-500 group-hover/card:bg-blue-500/10" />

                  {/* Card content */}

                  <div className="relative flex items-start gap-4">

                    {/* Institution initials */}

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm transition-all duration-500 group-hover/card:border-blue-200 group-hover/card:from-blue-600 group-hover/card:to-indigo-700 sm:h-16 sm:w-16">

                      <span className="text-lg font-black tracking-tight text-blue-700 transition-colors duration-500 group-hover/card:text-white sm:text-xl">
                        {institution.short}
                      </span>
                    </div>

                    {/* Name */}

                    <div className="min-w-0 flex-1 pt-1">

                      <h3 className="line-clamp-2 text-sm font-extrabold leading-snug text-brand-950 transition-colors duration-300 group-hover/card:text-blue-700 sm:text-base">
                        {institution.name}
                      </h3>

                      <p className="mt-1.5 text-xs font-medium text-slate-400">
                        {institution.location}
                      </p>
                    </div>

                    {/* Icon */}

                    <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover/card:bg-blue-600 group-hover/card:text-white sm:flex">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Card footer */}

                  <div className="relative mt-auto flex items-center justify-between gap-2 border-t border-slate-100 pt-5">

                    <div className="flex min-w-0 items-center gap-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-colors group-hover/card:bg-blue-50 group-hover/card:text-blue-600">
                        <InstitutionIcon className="h-3.5 w-3.5" />
                      </div>

                      <span className="truncate text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[11px]">
                        {institution.type}
                      </span>
                    </div>

                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-blue-600 sm:text-[11px]">
                      BimTech
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Bottom information */}

      <div className="relative mx-auto mt-9 max-w-7xl px-5 text-center sm:px-8">

        <p className="text-xs text-slate-400">
          Advancing education and enterprise through technology.
        </p>

      </div>
    </section>
  );
}

// ======================================================
// MAIN HOMEPAGE
// ======================================================

export default function HomeClient() {
  const whySectionRef = useRef(null);

  // Scroll parallax

  const { scrollY } = useScroll();

  const orbY1 = useTransform(scrollY, [0, 2400], [0, 260]);
  const orbY2 = useTransform(scrollY, [0, 2400], [0, -180]);
  const orbRotate = useTransform(scrollY, [0, 2400], [0, 90]);

  const handleMouseMove = (e) => {
    if (!whySectionRef.current) return;

    const rect = whySectionRef.current.getBoundingClientRect();

    whySectionRef.current.style.setProperty(
      "--x",
      `${e.clientX - rect.left}px`
    );

    whySectionRef.current.style.setProperty(
      "--y",
      `${e.clientY - rect.top}px`
    );
  };

  return (
    <div className="overflow-hidden bg-white">

      {/* ==================================================
          HERO
      ================================================== */}

      <HeroSection />

      {/* ==================================================
          TRUSTED INSTITUTIONS
      ================================================== */}

      <TrustedInstitutions />

      {/* ==================================================
          SERVICES
      ================================================== */}

      <section className="relative overflow-hidden bg-white py-24 sm:py-32">

        {/* Dotted background */}

        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Background orbs */}

        <motion.div
          style={{
            y: orbY1,
            rotate: orbRotate,
          }}
          className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-[3rem] bg-gradient-to-br from-accent-500/10 to-transparent blur-3xl"
        />

        <motion.div
          style={{ y: orbY2 }}
          className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 rounded-full bg-brand-950/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="mb-20 text-center"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-100 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-600">
              <Sparkles className="h-3.5 w-3.5" />
              Our Solutions
            </span>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-brand-950 md:text-6xl">
              Everything your school or organization needs
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
              Explore our integrated educational platforms alongside
              enterprise-grade mobile, AI, and IoT engineering
              solutions tailored for modern businesses.
            </p>
          </motion.div>

          {/* Service cards */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, i) => (
              <Tilt3D key={service.id} max={8} scale={1.03}>
                <ServiceCard service={service} index={i} />
              </Tilt3D>
            ))}

          </div>

          {/* View all */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mt-16 flex justify-center"
          >
            <Link
              href="/services"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand-950 px-8 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-brand-950/20"
            >
              <span className="relative z-10">
                View all services
              </span>

              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ==================================================
          STATS
      ================================================== */}

      <StatsSection />

      {/* ==================================================
          HARDWARE & DEVICES
      ================================================== */}

      <section className="relative overflow-hidden bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="mb-16 text-center"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-100 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-600">
              <ShieldCheck className="h-3.5 w-3.5" />
              Hardware & Devices
            </span>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-brand-950 md:text-5xl">
              State-of-the-Art Biometric & IoT Systems
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
              From high-accuracy biometric attendance tracking
              to automated IoT bell systems, our hardware is
              built for seamless and secure school management.
            </p>
          </motion.div>

          {/* Hardware cards */}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">

            {/* Fingerprint */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <Float3D duration={7} intensity={12}>
                <Tilt3D max={14} scale={1.05}>
                  <div className="relative [transform-style:preserve-3d]">

                    <div className="absolute inset-0 translate-y-4 translate-z-[-40px] rounded-2xl bg-brand-950/20 blur-2xl" />

                    <Image
                      src="/bm.jpeg"
                      alt="Biometric fingerprint scanning device"
                      width={400}
                      height={300}
                      className="relative rounded-2xl border-4 border-white object-cover shadow-xl [transform:translateZ(30px)]"
                      priority
                    />

                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-950 px-4 py-1.5 text-[11px] font-semibold text-white shadow-xl [transform:translateZ(60px)]">
                      Fingerprint Scanner
                    </div>

                  </div>
                </Tilt3D>
              </Float3D>
            </motion.div>

            {/* Facial recognition */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              <Float3D duration={8} delay={0.6} intensity={12}>
                <Tilt3D max={14} scale={1.05}>
                  <div className="relative [transform-style:preserve-3d]">

                    <div className="absolute inset-0 translate-y-4 translate-z-[-40px] rounded-2xl bg-brand-950/20 blur-2xl" />

                    <Image
                      src="/bm2.jpeg"
                      alt="Facial recognition interface"
                      width={400}
                      height={300}
                      className="relative rounded-2xl border-4 border-white object-cover shadow-xl [transform:translateZ(30px)]"
                    />

                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-950 px-4 py-1.5 text-[11px] font-semibold text-white shadow-xl [transform:translateZ(60px)]">
                      Face Recognition
                    </div>

                  </div>
                </Tilt3D>
              </Float3D>
            </motion.div>

            {/* IoT bell */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              <Float3D duration={7.5} delay={1.2} intensity={12}>
                <Tilt3D max={14} scale={1.05}>
                  <div className="relative [transform-style:preserve-3d]">

                    <div className="absolute inset-0 translate-y-4 translate-z-[-40px] rounded-2xl bg-brand-950/20 blur-2xl" />

                    <Image
                      src="/bell 1.jpg"
                      alt="IoT Automation Bell"
                      width={400}
                      height={300}
                      className="relative rounded-2xl border-4 border-white object-cover shadow-xl [transform:translateZ(30px)]"
                    />

                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-950 px-4 py-1.5 text-[11px] font-semibold text-white shadow-xl [transform:translateZ(60px)]">
                      IoT Smart Bell
                    </div>

                  </div>
                </Tilt3D>
              </Float3D>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================================================
          WHY BIMTECH
      ================================================== */}

      <section
        ref={whySectionRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
      >

        {/* Background blobs */}

        <motion.div
          style={{ y: orbY1 }}
          className="absolute left-0 top-20 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl"
        />

        <motion.div
          style={{ y: orbY2 }}
          className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-brand-950/5 blur-3xl"
        />

        {/* Mouse spotlight */}

        <div
          className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(245, 158, 11, 0.04), transparent 40%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* Left content */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >

              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-600">
                Why BimTech
              </span>

              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-brand-950 md:text-5xl">
                Built for African institutions, by African engineers
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                We understand the unique challenges of Nigerian
                and West African schools and businesses — from
                unreliable power to scaling IT infrastructure.
                Every BimTech product, whether for education or
                enterprise, is designed to work in real-world
                conditions: robust, easy to deploy, and supported locally.
              </p>

              <div className="mt-12 space-y-6">

                {[
                  {
                    icon: Smartphone,
                    title: "Mobile & Desktop Apps",
                    desc: "Custom software development for mobile and desktop, built to scale with your business needs.",
                  },
                  {
                    icon: Bot,
                    title: "Robotics, AI & Embedded",
                    desc: "Cutting-edge robotics, artificial intelligence, and embedded system engineering solutions.",
                  },
                  {
                    icon: Router,
                    title: "Full-Stack IoT Engineering",
                    desc: "End-to-end IoT infrastructure, from hardware design to cloud integration and deployment.",
                  },
                  {
                    icon: Headset,
                    title: "Local Support Team",
                    desc: "In-country engineers available 24/7 via phone, chat, or on-site for all your tech needs.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="group relative flex items-start gap-5 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-slate-200 hover:bg-white hover:shadow-sm"
                    whileHover={{ x: 4 }}
                  >

                    <div className="relative">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 group-hover:border-accent-500/30 group-hover:shadow-md">
                        <item.icon
                          className="h-5 w-5 text-accent-500 transition-transform duration-300 group-hover:scale-110"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-brand-950 transition-colors duration-300 group-hover:text-accent-500">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-slate-500">
                        {item.desc}
                      </p>
                    </div>

                  </motion.div>
                ))}

              </div>
            </motion.div>

            {/* Right visual */}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
              className="relative"
            >

              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent-500/20 via-brand-950/10 to-transparent blur-2xl" />

              <Tilt3D max={12} scale={1.02}>
                <div className="relative [transform-style:preserve-3d]">

                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl [transform:translateZ(0)]">

                    <Image
                      src="/map.jpg"
                      alt="BimTech technology solutions in action"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />

                  </div>

                  {/* Uptime card */}

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, ease }}
                    className="absolute -bottom-8 -left-3 flex items-center gap-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-2xl backdrop-blur-xl sm:-left-12 sm:p-6 [transform:translateZ(70px)]"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50">
                      <ShieldCheck
                        className="h-6 w-6 text-emerald-600"
                        strokeWidth={2.5}
                      />
                    </div>

                    <div>
                      <div className="text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
                        99.9%
                      </div>

                      <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                        Uptime SLA
                      </div>
                    </div>

                  </motion.div>

                  {/* Deployment chip */}

                  <Float3D
                    duration={5}
                    className="absolute -right-2 -top-6 sm:-right-4 [transform:translateZ(90px)]"
                  >
                    <div className="flex items-center gap-2 rounded-2xl bg-brand-950 px-4 py-2.5 text-xs font-semibold text-white shadow-2xl">
                      <Sparkles className="h-4 w-4 text-accent-400" />
                      500+ Deployments
                    </div>
                  </Float3D>

                </div>
              </Tilt3D>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          TESTIMONIALS
      ================================================== */}

      <TestimonialSection />

      {/* ==================================================
          CALL TO ACTION
      ================================================== */}

      <CTASection />

    </div>
  );
}
