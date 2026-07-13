import React from "react";
import { motion } from "motion/react";
import { Clock, CheckCircle, ArrowRight, Printer, AlertTriangle } from "lucide-react";
import { DoodleUnderline } from "./Doodles";

export const FirstWeekSection: React.FC = () => {
  const timeline = [
    {
      day: "Dia 1",
      title: "Preparar o terreno",
      desc: "Definir o lugar do tapetinho, limitar o espaço inicial e eliminar odores antigos. Levar ao tapetinho ao acordar, depois de comer e depois de brincar."
    },
    {
      day: "Dias 2-3",
      title: "Conduzir e marcar",
      desc: "Conduzir nos momentos de maior chance, marcar e recompensar o acerto na hora. Manter a supervisão alta."
    },
    {
      day: "Dias 4-7",
      title: "Consolidar",
      desc: "Reduzir a supervisão aos poucos, manter a rotina e liberar um cômodo por vez."
    }
  ];

  return (
    <section id="primeira-semana" className="relative bg-brand-cream py-20 md:py-28 px-4 overflow-hidden">
      {/* Background hairlines */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-brand-sage/10 max-w-7xl mx-auto" />
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-brand-sage/5 pointer-events-none hidden lg:block" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-10 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1 bg-brand-sage/10 rounded-full text-brand-sage text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
            Plano de Ação
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-brand-charcoal tracking-tight leading-[0.9] mb-4">
            Sua primeira semana,{" "}
            <span className="relative inline-block text-brand-charcoal font-serif italic">
              dia a dia
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-sage/80 max-w-md mx-auto">
            Um exemplo de como começar. A consolidação total leva de 2 a 4 semanas, no ritmo do cão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-sage text-white flex items-center justify-center font-bold text-xs shrink-0 z-10 shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300">
                    {idx + 1}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-brand-sage/20 mt-2" />
                  )}
                </div>
                <div className="pb-6 pt-1">
                  <span className="font-mono text-[10px] text-brand-terracotta uppercase font-bold tracking-wider mb-1 block">
                    {item.day}
                  </span>
                  <h3 className="font-display text-lg font-bold text-brand-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-sage leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Pocket Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-5"
          >
            <div className="p-6 md:p-8 bg-white border border-brand-sage/10 rounded-irregular shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 rotate-[1deg] hover:rotate-0 transition-transform relative print:shadow-none print:rotate-0 print:border-brand-charcoal">
              
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-yellow-lima text-brand-charcoal font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm print:hidden">
                Cartão de Bolso
              </div>

              <div className="mb-6 pb-4 border-b border-brand-sage/10">
                <h4 className="font-display text-lg font-bold text-brand-charcoal flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-sage" />
                  Leve ao tapetinho quando:
                </h4>
                <ul className="mt-2 space-y-1">
                  {["Ao acordar", "Depois de comer ou beber", "Depois de brincar", "Antes de dormir"].map((txt, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-brand-sage font-sans">
                      <CheckCircle className="w-3 h-3 text-brand-terracotta" /> {txt}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 pb-4 border-b border-brand-sage/10">
                <h4 className="font-display text-lg font-bold text-brand-charcoal flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-brand-sage" />
                  Sinais de que ele vai fazer:
                </h4>
                <p className="mt-2 text-sm text-brand-sage font-sans leading-relaxed">
                  Cheira o chão em círculos • Fica inquieto • Começa a rodar.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-display text-lg font-bold text-brand-charcoal flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-brand-terracotta" />
                  Sem supervisão, evite:
                </h4>
                <p className="mt-2 text-sm text-brand-sage font-sans leading-relaxed">
                  Deixá-lo solto perto de: sofá, tapete da sala, cama.
                </p>
              </div>

              <button 
                onClick={() => window.print()}
                className="w-full py-3 bg-brand-sage-light text-brand-sage rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-sage hover:text-white transition-colors print:hidden"
              >
                <Printer className="w-4 h-4" />
                Imprimir Cartão
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
