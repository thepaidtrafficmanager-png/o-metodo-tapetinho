import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { AlertTriangle } from "lucide-react";
import { DoodleUnderline } from "./Doodles";
import { ImageReveal } from "./ImageReveal";
import { TiltCard } from "./TiltCard";
import { SpotlightOverlay } from "./SpotlightOverlay";

import painCheiroImg from "../assets/images/pain_cheiro_1783918759028.jpg";
import testPocaImg from "../assets/images/test_poca_1783918772137.jpg";
import painVisitaImg from "../assets/images/pain_visita_1783918785052.jpg";
import testFracassoImg from "../assets/images/test_fracasso_1783918796025.jpg";
import guiltyDogImg from "../assets/images/french_bulldog_puppy_1783910901961.jpg";

const DeckTitle: React.FC<{ progress: any }> = ({ progress }) => {
  const opacity = useTransform(progress, [0.02, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(progress, [0.02, 0.1], [20, 0]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute top-0 left-0 right-0 z-50 pointer-events-none flex flex-col items-center text-center px-4 pt-28 md:pt-36 pb-32 bg-gradient-to-b from-black/60 via-black/30 to-transparent"
    >
       <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/25 rounded-full text-white text-[10px] uppercase tracking-[0.2em] font-bold mb-6 shadow-sm">
         Rotina exaustiva
       </span>
       <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[0.9] drop-shadow-md">
          Você se reconhece{" "}
          <span className="relative inline-block font-serif italic text-white mt-2 md:mt-0">
            nessa rotina?
          </span>
        </h2>
    </motion.div>
  );
};

const Panel: React.FC<{ panel: any; index: number; progress: any }> = ({ panel, index, progress }) => {
  const start = index * 0.25;
  const end = (index + 1) * 0.25;
  
  // clipVal goes from 100 to 0 during [start, end]
  const clipVal = useTransform(progress, [start, end], [100, 0]);
  const clipPath = useTransform(clipVal, val => `inset(${val}% 0 0 0)`);
  const finalClipPath = index === 0 ? "none" : clipPath;
  
  // Scale goes from 1 to 1.08 after it starts revealing, to simulate Ken Burns
  const scale = useTransform(progress, [start, 1], [1, 1.08]);

  return (
    <motion.div 
      style={{ clipPath: finalClipPath, zIndex: index + 1 }}
      className="absolute inset-0 w-full h-full overflow-hidden bg-[#F5F2EA]"
    >
      <motion.img 
        src={panel.img}
        alt=""
        style={{ scale }}
        className="absolute inset-0 w-full h-full object-cover origin-center opacity-100 [filter:brightness(1.16)_contrast(0.94)_saturate(0.9)]"
      />
      {/* Subtle gradient anchored at the bottom for text legibility */}
      <div className="absolute inset-0 bg-brand-cream/10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-[40%] bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex pointer-events-none">
        {/* Left Bar: Number + Rotated Label */}
        <div className="w-16 md:w-24 border-r border-white/10 flex flex-col items-center justify-between py-8 md:py-12 shrink-0">
           <span className="font-mono text-sm text-white/90 font-medium">{panel.id}</span>
           <div className="hidden md:block transform -rotate-90 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.3em] text-white/90 bg-white/10 backdrop-blur-md border border-white/25 px-3 py-1 rounded-full">
              A rotina de hoje
           </div>
           <div className="w-[1px] h-12 bg-white/20 hidden md:block" />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 sm:p-8 md:p-16 flex flex-col justify-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 mb-4 md:mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/25">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">{panel.context}</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] whitespace-pre-line drop-shadow-md">
              {panel.text}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProblemsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const panels = [
    {
      id: "01",
      context: "Odores",
      text: "O cheiro de xixi que não sai,\npor mais que você limpe.",
      img: painCheiroImg,
    },
    {
      id: "02",
      context: "Exaustão",
      text: "Limpar o mesmo canto todo dia,\nàs vezes duas ou três vezes.",
      img: testPocaImg,
    },
    {
      id: "03",
      context: "Constrangimento",
      text: "A vergonha quando\nalguém chega em casa.",
      img: painVisitaImg,
    },
    {
      id: "04",
      context: "Frustração",
      text: "A dúvida que cansa:\nserá que ele nunca vai aprender?",
      img: testFracassoImg,
    }
  ];

  return (
    <section id="problemas" className="relative bg-[#F5F2EA]">
      {/* Pinned Scroll Deck for Hero + Panels */}
      <div ref={containerRef} className="relative h-[500vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-brand-cream">

          {/* Panel Layers: 1 to 4 */}
          {panels.map((panel, idx) => (
            <Panel key={panel.id} panel={panel} index={idx} progress={scrollYProgress} />
          ))}

          {/* Global Title for the deck */}
          <DeckTitle progress={scrollYProgress} />
        </div>
      </div>

      {/* Warning Box & Image Reveal block */}
      <div className="relative bg-[#F5F2EA] py-24 px-4 z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Visual */}
            <div className="relative aspect-[4/3] w-full rounded-irregular-sm overflow-hidden bg-white shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 border border-brand-sage/10 rotate-1">
              <ImageReveal 
                src={guiltyDogImg} 
                alt="Cachorro que fez xixi no lugar errado" 
                color="bg-brand-sage" 
                className="w-full h-full grayscale-[30%] opacity-90"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-brand-sage/10 font-mono text-[9px] uppercase tracking-wider font-bold text-brand-terracotta flex items-center gap-1.5">
                <AlertTriangle className="w-3 h-3" />
                Problema
              </div>
            </div>

            {/* The Hidden Cost Warning box */}
            <TiltCard className="w-full h-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              className="relative p-8 rounded-irregular bg-gradient-to-br from-brand-sage to-[#26271a] text-white shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 border border-brand-sage-dark/20 flex flex-col justify-between overflow-hidden rotate-[-1deg] h-full ring-1 ring-brand-yellow-lima/15"
            >
              <div className="absolute inset-0 rounded-[inherit] pointer-events-none" style={{ background: "radial-gradient(120% 90% at 15% 0%, rgba(255,255,255,0.10), transparent 55%)" }} />
              <SpotlightOverlay />
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/15 mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow-lima animate-ping" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-brand-yellow-lima">Custo Oculto</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-light leading-tight mb-6">
                  E tem um <span className="font-serif italic">custo financeiro</span> que pouca gente soma.
                </h3>
                <p className="font-sans text-sm md:text-base text-brand-sage-light/90 leading-relaxed mb-6">
                  Quando o cão faz no lugar errado, não é só o tapete. É o sofá, o tapete da sala, o piso, o rodapé.
                </p>
                <p className="font-sans text-sm md:text-base text-brand-sage-light/90 leading-relaxed">
                  Aí vem a higienização dos móveis, a lavagem, o produto de limpeza caro toda semana. Prevenir sai muito mais barato e mais tranquilo do que ficar limpando e pagando limpeza o tempo todo.
                </p>
              </div>

              {/* Decorative mini comparison board */}
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <span className="font-mono text-[10px] text-white/50 block uppercase tracking-wider">Produtos + Lavagens</span>
                  <span className="font-display text-lg md:text-xl font-bold text-red-300">R$ 350+ <span className="text-xs font-normal text-white/40">/mês</span></span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-brand-yellow-lima/80 block uppercase tracking-wider">Investimento Método</span>
                  <span className="font-display text-lg md:text-xl font-bold text-brand-yellow-lima">R$ 47,98 <span className="text-xs font-normal text-brand-yellow-lima/80">único</span></span>
                </div>
              </div>
            </motion.div>
            </TiltCard>
        </div>
      </div>
    </section>
  );
};
