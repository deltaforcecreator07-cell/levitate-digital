import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

const WHATSAPP_URL = "https://wa.me/";

export function AspaButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -3, rotateX: -4, rotateY: 4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow transition-shadow hover:shadow-glow-strong ${className}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
}
