import React from "react";
import { motion } from "motion/react";
import { Sparkles, Users, DoorOpen, Wallet, Clock, Dog } from "lucide-react";
import { DoodleUnderline } from "./Doodles";
import { TiltCard } from "./TiltCard";

export const TransformationSection: React.FC = () => {
  const benefits = [
    { icon: Sparkles, title: "Cheiro de limpeza", desc: "Casa que cheira a limpo, não a acidente." },
    { icon: Users, title: "Visitas em paz", desc: "Receber visita sem susto nem vergonha." },
    { icon: DoorOpen, title: "Saídas tranquilas", desc: "Sair de casa tranquilo: ele acerta sozinho." },
    { icon: Wallet, title: "Mais economia", desc: "Fim do produto de limpeza caro toda semana." },
    { icon: Clock, title: "Menos pano no chão", desc: "Menos pano no chão, mais tempo com o cão." },
    { icon: Dog, title: "Cão confiante", desc: "Um cão confiante, que sabe onde fazer." }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="transformacao" className="relative bg-brand-cream py-20 md:py-28 px-4 overflow-hidden">
      {/* Background hairlines */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-brand-sage/10 max-w-7xl mx-auto" />
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-brand-sage/5 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 right-1/4 w-[1px] bg-brand-sage/5 pointer-events-none hidden lg:block" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-10 max-w-2xl mx-auto relative"
        >
          
          <span className="inline-block px-4 py-1 bg-brand-sage/10 rounded-full text-brand-sage text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
            A vida depois
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-brand-charcoal tracking-tight leading-[0.9]">
            Como fica a sua rotina{" "}
            <span className="relative inline-block text-brand-charcoal font-serif italic mt-2">
              quando ele aprende
            </span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <TiltCard key={idx} className="w-full h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className={`p-6 rounded-irregular-sm bg-white border border-brand-sage/10 shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 flex flex-col items-start gap-4 hover:shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 transition-all ${
                idx % 3 === 1 ? "rotate-[1deg] hover:rotate-0" : 
                idx % 3 === 2 ? "rotate-[-1deg] hover:rotate-0" : ""
              } h-full`}
            >
              <div className="p-3 bg-brand-sage-light rounded-xl text-brand-sage shrink-0">
                <benefit.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-brand-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="font-sans text-sm text-brand-sage leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="mt-12 text-center flex justify-center"
        >
          <a
            href="#oferta"
            onClick={(e) => handleScroll(e, "oferta")}
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-yellow-lima text-brand-charcoal font-bold text-sm uppercase tracking-widest rounded-full shadow-[0_6px_0_#5A5A40] hover:translate-y-1 hover:shadow-[0_4px_0_#5A5A40] transition-all cursor-pointer"
          >
            Quero essa rotina
          </a>
        </motion.div>

      </div>
    </section>
  );
};
