"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <motion.header
      className={`mb-8 ${center ? "text-center mx-auto max-w-3xl" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xs font-semibold uppercase tracking-widest text-amber-300/90"
        >
          {eyebrow}
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white/95 ${
          center ? "mx-auto" : ""
        }`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`mt-3 text-white/70 ${center ? "mx-auto" : ""} max-w-2xl`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  );
}
