import React from "react";
import { motion } from "motion/react";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";
import { DoodleUnderline } from "./Doodles";

export const TargetSection: React.FC = () => {
  const isFor = [
    "Para você que mora em apartamento ou casa e quer parar de limpar xixi pelos cantos.",
    "Para filhote ou adulto de porte pequeno/médio.",
    "Para quem quer um passo a passo calmo, sem brigar com o cão.",
    "Para quem já tentou de tudo e quer um método claro e positivo."
  ];

  const isNotFor = [
    "Quem busca solução mágica sem aplicar uma rotina.",
    "Casos de saúde ou físicos que pedem avaliação veterinária.",
    "Quem não pode manter uma rotina mínima nos primeiros dias."
  ];

  return (
    <section id="adequacao" className="relative bg-brand-cream py-20 md:py-28 px-4 overflow-hidden">
      {/* Structural vertical hairlines */}
      <div className="absolute inset-y-0 left-1/3 w-[1px] bg-brand-sage/5 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 right-1/3 w-[1px] bg-brand-sage/5 pointer-events-none hidden lg:block" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-10 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1 bg-brand-sage/10 rounded-full text-brand-sage text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Transparência Total</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-brand-charcoal tracking-tight leading-[0.9] mb-4">
            Este método é para o{" "}
            <span className="relative inline-block text-brand-charcoal font-serif italic">
              seu caso?
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-sage/80 max-w-md mx-auto">
            Queremos que você faça a compra certa. Veja abaixo quem se beneficia mais do curso.
          </p>
        </motion.div>

        {/* Side by Side Split Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            className="p-6 md:p-8 rounded-irregular bg-brand-sage text-white shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 border border-brand-sage-dark/15 flex flex-col justify-between rotate-[-1deg] hover:rotate-0 transition-transform"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-brand-yellow-lima text-brand-charcoal flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <span className="font-mono text-[9px] text-brand-yellow-lima/80 block uppercase tracking-wider">Perfeito para seu perfil</span>
                  <h3 className="font-display text-xl font-bold text-white">É para você que:</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {isFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="p-1 bg-brand-yellow-lima/20 text-brand-yellow-lima rounded-lg shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3px]" />
                    </div>
                    <p className="font-sans text-sm text-brand-sage-light leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-brand-yellow-lima font-mono text-[10px]">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Resultados práticos e amigáveis</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="p-6 md:p-8 rounded-irregular bg-white text-brand-charcoal shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 border border-brand-sage/10 flex flex-col justify-between rotate-[1deg] hover:rotate-0 transition-transform"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-orange-50 text-brand-terracotta flex items-center justify-center font-bold text-sm">
                  !
                </div>
                <div>
                  <span className="font-mono text-[9px] text-brand-terracotta/80 block uppercase tracking-wider">Alerta importante</span>
                  <h3 className="font-display text-xl font-bold text-brand-charcoal">Não é para quem:</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {isNotFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="p-1 bg-orange-50 text-brand-terracotta rounded-lg shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[3px]" />
                    </div>
                    <p className="font-sans text-sm text-brand-sage leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-brand-sage/10 flex items-center gap-2 text-brand-terracotta font-mono text-[10px]">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Saúde e bem-estar em primeiro lugar</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
