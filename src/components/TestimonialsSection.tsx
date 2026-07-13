import React from "react";
import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { DoodleUnderline } from "./Doodles";

export const TestimonialsSection: React.FC = () => {
  const placeholders = [
    {
      initials: "N",
      name: "[Nome do tutor]",
      meta: "[Raça · idade]",
      city: "[Cidade/UF]",
      time: "[X dias]",
      before: "[o que acontecia antes]",
      after: "[o resultado depois]"
    },
    {
      initials: "N",
      name: "[Nome do tutor]",
      meta: "[Raça · idade]",
      city: "[Cidade/UF]",
      time: "[X dias]",
      before: "[o que acontecia antes]",
      after: "[o resultado depois]"
    },
    {
      initials: "N",
      name: "[Nome do tutor]",
      meta: "[Raça · idade]",
      city: "[Cidade/UF]",
      time: "[X dias]",
      before: "[o que acontecia antes]",
      after: "[o resultado depois]"
    }
  ];

  return (
    <section id="depoimentos" className="relative bg-[#F5F2EA] py-20 md:py-28 px-4 overflow-hidden">
      {/* --- Kinetic wordmark: one quiet living line. Whisper of brand on a hairline curve, olive on cream, the single restrained motion that eases the eye down. --- */}
      <div className="relative w-full overflow-hidden py-16 md:py-24 select-none pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1200 120" width="100%" preserveAspectRatio="xMidYMid meet" className="w-full h-auto overflow-visible">
          <defs>
            <path id="casaLimpaThread" d="M0,74 C 300,44 500,44 700,68 S 1050,94 1200,62" fill="none" />
          </defs>
          <use href="#casaLimpaThread" className="stroke-brand-sage" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" opacity="0.18" />
          <text className="fill-brand-sage font-mono uppercase" fontSize="20" letterSpacing="6" opacity="0.5">
            <textPath href="#casaLimpaThread" startOffset="0%" dominantBaseline="middle">
              método casa limpa em rotina · método casa limpa em rotina · método casa limpa em rotina · método casa limpa em rotina · método casa limpa em rotina · método casa limpa em rotina · 
              <animate attributeName="startOffset" from="0%" to="-33.333%" dur="34s" repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>
        {/* eye-cue: a thin down-stroke with a single lime bead */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1 flex flex-col items-center gap-1.5">
          <span className="block w-px h-8 bg-brand-sage/25" />
          <span className="block w-1.5 h-1.5 rounded-full bg-brand-yellow-lima" />
        </div>
      </div>
      {/* Structural hair line divider */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-brand-sage/15 max-w-7xl mx-auto" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1 bg-brand-sage/10 rounded-full text-brand-sage text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
            Histórias de quem já ensinou
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-brand-charcoal tracking-tight leading-[0.9] mb-4">
            A transformação,{" "}
            <span className="relative inline-block text-brand-charcoal font-serif italic">
              na prática
            </span>
          </h2>
          <div className="inline-flex flex-col items-center mt-4">
            <span className="font-sans text-[10px] md:text-xs text-brand-sage/80 bg-brand-sage-light/60 px-4 py-2 rounded-full border border-brand-sage/10">
              Todos os casos são reais e publicados com autorização do tutor.
            </span>
            <span className="mt-2 text-[9px] font-bold uppercase tracking-widest text-brand-terracotta bg-brand-terracotta/10 px-2 py-0.5 rounded-sm">
              [DEPOIMENTOS REAIS A INSERIR]
            </span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {placeholders.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.19, 1, 0.22, 1] }}
              className={`relative p-5 sm:p-6 rounded-irregular-sm bg-white border border-brand-sage/10 shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 flex flex-col justify-between ${
                idx === 0 ? "rotate-[-1deg]" : 
                idx === 2 ? "rotate-[1deg]" : ""
              }`}
            >
              {/* Top Meta Area */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-cream border border-brand-sage/20 flex items-center justify-center shrink-0">
                    <span className="font-display text-sm font-bold text-brand-sage">{p.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-brand-charcoal leading-tight">
                      {p.name}
                    </h4>
                    <p className="font-sans text-[9px] sm:text-[10px] text-brand-sage/70 mt-0.5">
                      {p.meta} • {p.city}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-1.5">
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-brand-sage-light text-brand-sage rounded text-[9px] font-bold uppercase tracking-wider">
                    <Clock className="w-2.5 h-2.5" />
                    <span>{p.time}</span>
                  </div>
                  <span className="text-[7px] font-bold uppercase tracking-widest text-brand-charcoal/30 bg-black/5 px-1.5 py-0.5 rounded-sm">
                    A CONFIRMAR
                  </span>
                </div>
              </div>

              {/* Before / After */}
              <div className="space-y-4 grow flex flex-col justify-center">
                {/* Before */}
                <div className="p-3 sm:p-4 rounded-xl bg-brand-terracotta/5 border border-brand-terracotta/10 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-terracotta/30" />
                  <span className="block font-mono text-[9px] font-bold text-brand-terracotta uppercase mb-1">
                    Antes:
                  </span>
                  <p className="font-sans text-xs text-brand-charcoal/80 italic leading-relaxed">
                    "{p.before}"
                  </p>
                </div>
                
                {/* After */}
                <div className="p-3 sm:p-4 rounded-xl bg-brand-sage/5 border border-brand-sage/10 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-sage/40" />
                  <span className="block font-mono text-[9px] font-bold text-brand-sage uppercase mb-1">
                    Depois:
                  </span>
                  <p className="font-sans text-xs text-brand-charcoal/90 font-medium leading-relaxed">
                    "{p.after}"
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mt-12 text-center flex flex-col items-center justify-center"
        >
          <a
            href="#oferta"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-brand-yellow-lima text-brand-charcoal font-bold text-xs md:text-sm uppercase tracking-widest rounded-full shadow-[0_6px_0_#5A5A40] hover:translate-y-1 hover:shadow-[0_4px_0_#5A5A40] transition-all cursor-pointer"
          >
            Quero ensinar meu cachorro a usar o tapetinho
          </a>
          <span className="font-sans text-[10px] text-brand-sage/70 mt-3">
            No seu ritmo • Passo a passo positivo • Acesso vitalício
          </span>
        </motion.div>
      </div>
    </section>
  );
};

