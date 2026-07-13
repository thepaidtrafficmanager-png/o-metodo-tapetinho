import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { DoodleCircle } from "./Doodles";

export const PivotSection: React.FC = () => {
  return (
    <section className="relative bg-brand-cream py-20 md:py-28 px-4 overflow-hidden">
      {/* Decorative hairline grid overlay */}
      <div className="absolute inset-0 pointer-events-none border-y border-brand-sage/5 max-w-7xl mx-auto flex justify-between">
        <div className="w-[1px] h-full bg-brand-sage/5" />
        <div className="w-[1px] h-full bg-brand-sage/5" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-brand-charcoal tracking-tight leading-tight max-w-3xl mx-auto mb-8"
        >
          O cão não está te desafiando. Ele{" "}
          <span className="relative inline-block text-brand-charcoal font-serif italic px-1">
            só não aprendeu
          </span>{" "}
          a rotina ainda.
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
          className="font-sans text-base sm:text-lg md:text-xl text-brand-sage max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Cachorro aprende por repetição e por recompensa. Quando o ambiente ajuda, com o tapetinho no lugar certo e menos espaço livre para errar, e você conduz o cão nos momentos certos, o acerto vira hábito. Com calma, sem castigo e sem estresse para os dois.
        </motion.p>

        {/* Interactive Highlight quote footer */}
        <div className="mt-12 inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-sage/10 bg-[#FAF8F5]/80 font-mono text-xs text-brand-sage">
          <Sparkles className="w-4 h-4 text-brand-terracotta" />
          Metodologia de Adestramento Positivo
        </div>

      </div>
    </section>
  );
};
