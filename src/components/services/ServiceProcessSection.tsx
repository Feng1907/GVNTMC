"use client";

import { motion } from "framer-motion";

interface Step {
  step: number;
  title: string;
  desc: string;
}

interface Props {
  process: Step[];
}

export default function ServiceProcessSection({ process }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-2xl font-bold text-text-primary mb-4">Quy trình thực hiện</h2>
      <div className="w-10 h-1 bg-primary rounded-full mb-7" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {process.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative bg-neutral-light rounded-2xl p-5 border border-neutral-border text-center group hover:border-primary/20 hover:bg-primary-50/30 transition-colors duration-200"
          >
            {/* Step connector line for non-last items */}
            {i < process.length - 1 && (
              <div className="hidden lg:block absolute top-8 -right-2 w-4 h-0.5 bg-primary/20 z-10" />
            )}

            {/* Step number circle */}
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-base">{step.step}</span>
            </div>

            <h3 className="font-bold text-text-primary text-sm mb-2 leading-snug">{step.title}</h3>
            <p className="text-text-secondary text-xs leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
