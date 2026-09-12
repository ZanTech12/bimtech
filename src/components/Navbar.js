"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Cpu, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/services";

// Premium easing curve (matches the rest of the site)
const ease = [0.22, 1, 0.36, 1];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  // ✨ NEW: page scroll progress → thin bar along the navbar's top edge
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // ✨ NEW: close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ✨ NEW: lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-b border-slate-200/70"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      {/* ═══ ✨ NEW: Scroll Progress Bar (top edge, emerald gradient) ═══ */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute top-0 left-0 right-0 h-[2.5px] origin-left bg-gradient-to-r from-accent-500 via-emerald-400 to-accent-500 z-10"
      />

      {/* ✨ NEW: subtle top hairline gradient (sophisticated edge) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* ═══ Logo — logo.svg with Cpu fallback + hover glow ═══ */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            {/* ✨ glow halo behind the logo on hover */}
            <div
              className="absolute -inset-1.5 rounded-2xl bg-accent-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
            <div className="relative w-10 h-10 bg-accent-500 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300 shadow-sm">
              {!logoError ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src="/logo.svg"
                  alt="BimTech logo"
                  className="w-full h-full object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <Cpu className="w-5 h-5 text-white" />
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-brand-950 leading-tight tracking-tight">
              BimTech
            </span>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-[0.2em]">
              Solutions
            </span>
          </div>
        </Link>

        {/* ═══ Desktop Nav — magic sliding pill on the active link ═══ */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-accent-600"
                    : "text-slate-600 hover:text-brand-950"
                }`}
              >
                {/* ✨ magic pill — physically slides between links on route change */}
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-lg bg-accent-50 ring-1 ring-accent-100"
                  />
                )}
                <span className="relative z-10">{link.label}</span>
                {/* ✨ tiny underline dot */}
                {active && (
                  <motion.span
                    layoutId="nav-active-dot"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-500"
                  />
                )}
              </Link>
            );
          })}

          {/* ✨ CTA — gradient + shine sweep on hover */}
          <Link
            href="/contact"
            className="group relative ml-4 inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-medium rounded-xl overflow-hidden bg-gradient-to-br from-brand-900 to-brand-950 shadow-lg shadow-brand-950/20 transition-all duration-300 hover:shadow-xl hover:shadow-brand-950/30 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            {/* shine sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
        </div>

        {/* ═══ Mobile Toggle — animated icon morph ═══ */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative p-2 rounded-xl hover:bg-slate-100 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 90 : 0 }}
            transition={{ duration: 0.25, ease }}
            className="block"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </motion.span>
        </button>
      </div>

      {/* ═══ Mobile Menu — animated slide-down with staggered items ═══ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1.5">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.3, delay: 0.05 + i * 0.05, ease }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        active
                          ? "text-accent-600 bg-accent-50 ring-1 ring-accent-100"
                          : "text-slate-600 hover:bg-slate-50 hover:text-brand-950"
                      }`}
                    >
                      {link.label}
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />}
                    </Link>
                  </motion.div>
                );
              })}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, delay: 0.05 + navLinks.length * 0.05, ease }}
                className="mt-3"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-br from-brand-900 to-brand-950 text-white text-sm font-semibold rounded-xl shadow-lg shadow-brand-950/20 hover:shadow-xl transition-all"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}