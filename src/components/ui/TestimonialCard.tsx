"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

export default function TestimonialCard({ quote, name, role, company, avatar }: TestimonialCardProps) {
  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-4">
        {avatar && (
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <blockquote className="text-white/90 italic">
            &quot;{quote}&quot;
          </blockquote>
          <div className="mt-4">
            <div className="font-semibold text-white">{name}</div>
            <div className="text-sm text-white/60">
              {role} {company && `• ${company}`}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
