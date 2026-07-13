import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { 
  ClipboardCheck, 
  MapPin, 
  Compass, 
  Sparkles, 
  ArrowRight
} from "lucide-react";
import { DoodleUnderline } from "./Doodles";
import { SpotlightOverlay } from "./SpotlightOverlay";
import { TiltCard } from "./TiltCard";

export const MethodSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const steps = [
    {
      number: "01",
      title: "Checar",
      icon: <ClipboardCheck className="w-5 h-5 text-brand-sage" />,
      description: "Entenda a rotina. Quando ele costuma fazer xixi? Em que lugares?",
      color: "bg-[#F3EFE9]",
      border: "border-brand-sage/15"
    },
    {
      number: "02",
      title: "Preparar",
      icon: <MapPin className="w-5 h-5 text-brand-sage" />,
      description: "Coloque o tapetinho no lugar certo e organize a casa.",
      color: "bg-brand-sage-light",
      border: "border-brand-sage/15"
    },
    {
      number: "03",
      title: "Conduzir",
      icon: <Compass className="w-5 h-5 text-brand-sage" />,
      description: "Leve ao tapetinho nos momentos de maior chance: ao acordar, após comer.",
      color: "bg-[#F3EFE9]",
      border: "border-brand-sage/15"
    },
    {
      number: "04",
      title: "Reforçar",
      icon: <Sparkles className="w-5 h-5 text-brand-terracotta" />,
      description: "Recompense acertos na hora. Quando erra, você limpa e previne.",
      color: "bg-orange-50",
      border: "border-brand-terracotta/20"
    }
  ];

  return (
    <section id="metodo" className="relative bg-gradient-to-b from-[#21231a] via-[#1a1b13] to-[#131409] py-20 md:py-28 px-4 overflow-hidden">
      {/* Structural Hairlines */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/[0.08] pointer-events-none hidden lg:block" />
      
      {/* Glow Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div 
          className="rounded-full absolute"
          style={{
            width: "60vw",
            height: "60vw",
            top: "-10%",
            left: "20%",
            background: "radial-gradient(closest-side, rgba(205,216,74,0.16), transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={prefersReducedMotion ? undefined : {
            x: ["-10%", "15%", "-10%"],
            y: ["-5%", "10%", "-5%"]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <SpotlightOverlay />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-10 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-brand-cream/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Ciclo de Aprendizado</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-brand-cream tracking-tight leading-[0.9] mb-4">
            Quatro passos simples que{" "}
            <span className="relative inline-block text-brand-cream font-serif italic">
              se repetem
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-cream/55 max-w-lg mx-auto">
            Uma rotina estruturada de adestramento que não sobrecarrega você nem estressa o seu melhor amigo.
          </p>
        </motion.div>

        {/* Steps Loop (Asymmetric timeline or connected grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, idx) => (
            <TiltCard key={idx} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ y: -4, rotate: idx % 2 === 0 ? "1deg" : "-1deg" }}
              className={`relative p-6 rounded-irregular-sm ${step.color} border-[0.5px] ${step.border} flex flex-col justify-between min-h-[220px] shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 transition-all`}
            >
              <div>
                {/* Step header with Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-3xl font-extrabold text-brand-charcoal/20 tracking-tight">
                    {step.number}
                  </span>
                  <div className="p-2 bg-white rounded-2xl shadow-xs border border-brand-sage/5">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-brand-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-brand-charcoal/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Loop connector helper (hidden on last step) */}
              {idx < 3 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center text-brand-sage/30 animate-pulse">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Floating background highlight */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-brand-sage text-white font-mono text-[10px] sm:text-xs font-bold shadow-md">
            <span className="w-2 h-2 rounded-full bg-brand-yellow-lima animate-pulse" />
            Consistência supera intensidade: repita todos os dias
          </div>
        </div>

      </div>
    </section>
  );
};
