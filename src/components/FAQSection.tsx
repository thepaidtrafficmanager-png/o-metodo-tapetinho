import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { DoodleUnderline } from "./Doodles";

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    {
      q: "2 a 4 semanas é muito tempo?",
      a: "É o tempo natural para um hábito se firmar. Em 24 horas você já organiza a casa e vê as primeiras respostas. As semanas seguintes são para praticar até virar rotina, sem pressa."
    },
    {
      q: "Já tentei o tapetinho e não funcionou.",
      a: "Quase sempre é uma dessas coisas: o tapetinho no lugar errado, o cão com liberdade demais cedo demais, cheiro antigo em outro canto ou falta de rotina fixa."
    },
    {
      q: "Eu trabalho fora.",
      a: "Você não precisa ficar em casa o dia todo. A ideia é reduzir o espaço livre nas horas sem supervisão e aproveitar bem os momentos em que você está em casa."
    },
    {
      q: "Moro em apartamento pequeno.",
      a: "É exatamente o cenário do método: onde colocar o tapetinho, como controlar o espaço e como recompensar o acerto."
    },
    {
      q: "E se for problema de saúde?",
      a: "O método tem um passo para você checar sinais de alerta. Se acender o sinal, o caminho é o veterinário, e a gente diz isso com clareza."
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenId(openId === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-[#F5F2EA] py-20 md:py-28 px-4 overflow-hidden">
      {/* Background hairlines */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-brand-sage/10 max-w-7xl mx-auto" />
      
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1 bg-brand-sage/10 rounded-full text-brand-sage text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Dúvidas Comuns</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-brand-charcoal tracking-tight leading-[0.9] mb-4">
            Respostas para as{" "}
            <span className="relative inline-block text-brand-charcoal font-serif italic">
              suas perguntas
            </span>
          </h2>
        </motion.div>

        {/* Accordions Stack */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openId === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="bg-white rounded-irregular-sm border border-brand-sage/10 shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 md:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-4 h-4 text-brand-sage/40 group-hover:text-brand-sage transition-colors shrink-0" />
                    <span className="font-display text-sm md:text-base font-bold text-brand-charcoal leading-tight">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`p-1.5 bg-brand-sage-light rounded-xl text-brand-sage transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 md:px-6 pb-4 pt-0 border-t border-brand-sage/5">
                        <p className="font-sans text-xs md:text-sm text-brand-sage leading-relaxed mt-4">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
