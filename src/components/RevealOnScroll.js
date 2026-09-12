"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, Children } from "react";

const ease = [0.22, 1, 0.36, 1];

/* Fade + rise reveal */
export function Reveal({ children, delay = 0, y = 32, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Word-by-word title reveal */
export function RevealWords({ text, className = "", delay = 0 }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 -mb-1 align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay + i * 0.08, ease }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ✅ FIXED: Clip-path curtain unveil — starts MOSTLY VISIBLE (fails safe).
   Previous version started at inset(100%...) = 100% hidden, so if the
   intersection observer misfired the image stayed invisible forever. */
export function RevealImage({ children, className = "", delay = 0 }) {
  return (
    <div className={className}>
      <motion.div
        initial={{
          clipPath: "inset(8% 4% 8% 4% round 28px)",
          opacity: 0,
          scale: 1.05,
        }}
        whileInView={{
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true, amount: 0.2 }} // fires when just 20% is visible
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* Scroll-drawing vertical line (timeline spine) */
export function DrawingLine({ className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 40%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="w-0.5 h-full bg-gradient-to-b from-brand-950 via-accent-500 to-accent-500/40 rounded-full"
      />
    </div>
  );
}

/* 3D flip-up card reveal (for grid children) */
export function FlipCards({ children, className = "", itemClassName = "" }) {
  const items = Children.toArray(children);
  return (
    <div className={className}>
      {items.map((child, i) => (
        <motion.div
          key={i}
          className={itemClassName}
          initial={{ opacity: 0, y: 44, rotateX: -18, transformPerspective: 900 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: i * 0.12, ease }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}