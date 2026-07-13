import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Play, 
  CheckCircle, 
  Calendar, 
  Video, 
  ChevronRight,
  Award
} from "lucide-react";
import { DoodleUnderline } from "./Doodles";

export const InclusionsSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState(0);
  const modules = [
    {
      num: "Parte 1",
      title: "O Que Está Acontecendo",
      desc: "Entenda a fisiologia e padrões.",
      duration: "22 min"
    },
    {
      num: "Parte 2",
      title: "Preparando A Casa",
      desc: "Delimitar espaço sem ansiedade.",
      duration: "28 min"
    },
    {
      num: "Parte 3",
      title: "Ensinando O Tapetinho",
      desc: "Condução ativa, marcação do acerto.",
      duration: "35 min"
    },
    {
      num: "Parte 4",
      title: "Ajustando Quando Trava",
      desc: "Erros fora, ansiedade leve.",
      duration: "18 min"
    },
    {
      num: "Parte 5",
      title: "Consolidando O Hábito",
      desc: "Transição para liberdade.",
      duration: "20 min"
    }
  ];

  return (
    <section id="conteudo" className="relative bg-[#F5F2EA] py-20 md:py-28 px-4 overflow-hidden">
      {/* Background elements */}
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-6 max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full text-brand-sage text-[9px] uppercase tracking-[0.2em] font-bold mb-3">Material Premium</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-brand-charcoal tracking-tight leading-[0.9] mb-3">
            Tudo que você precisa para{" "}
            <span className="relative inline-block text-brand-charcoal font-serif italic">
              ensinar, passo a passo
            </span>
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Column 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between p-4 md:p-5 rounded-irregular bg-brand-sage text-white shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 border border-brand-sage-dark/15"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white/10 rounded-lg border border-white/10 text-brand-yellow-lima">
                    <Video className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white">Curso em Vídeo</h3>
                  </div>
                </div>
                <span className="font-mono text-[9px] text-brand-yellow-lima bg-white/10 px-2 py-0.5 rounded-full font-bold">
                  5 Módulos
                </span>
              </div>

              {/* Main player mockup - Ultra Compacted */}
              <div className="relative w-full rounded-xl bg-brand-charcoal overflow-hidden border border-white/10 shadow-lg mb-3 min-h-[120px] flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541882352824-2c67677d20fb?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                
                <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-end">
                  <div>
                    <h4 className="font-display text-xs font-bold text-brand-yellow-lima leading-tight mb-0.5">
                      {modules[activeModule].title}
                    </h4>
                    <p className="font-sans text-[9px] text-white/80 max-w-[160px] line-clamp-1">
                      {modules[activeModule].desc}
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded text-white text-[9px] flex items-center gap-1">
                    <Play className="w-2.5 h-2.5 text-brand-yellow-lima fill-brand-yellow-lima" />
                    <span className="font-medium font-mono">{modules[activeModule].duration}</span>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-brand-yellow-lima text-brand-charcoal flex items-center justify-center shadow-lg cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-brand-charcoal stroke-brand-charcoal ml-0.5" />
                  </motion.div>
                </div>
              </div>

              {/* Module selection */}
              <div className="space-y-1">
                {modules.map((mod, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveModule(index)}
                    className={`w-full text-left p-1.5 rounded-md transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                      activeModule === index
                        ? "bg-white text-brand-charcoal border-white shadow-sm"
                        : "bg-white/5 text-white/80 border-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-[9px] font-bold ${activeModule === index ? "text-brand-terracotta" : "text-white/40"}`}>
                        0{index + 1}
                      </span>
                      <div>
                        <span className="font-display text-[10px] md:text-xs font-bold">{mod.title}</span>
                      </div>
                    </div>
                    <ChevronRight className={`w-3 h-3 transition-transform ${activeModule === index ? "rotate-90 text-brand-terracotta" : "text-white/30"}`} />
                  </button>
                ))}
              </div>
            </div>
            
          </motion.div>

          {/* Column 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between p-4 md:p-5 rounded-irregular bg-white text-brand-charcoal shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 border border-brand-sage/10 relative"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-brand-sage-light rounded-lg border border-brand-sage/5 text-brand-sage">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-extrabold text-brand-charcoal">Plano de Prática</h3>
                </div>
              </div>

              <div className="p-4 bg-brand-cream rounded-irregular-sm border border-brand-sage/10 mb-4 shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-brand-terracotta" />
                  <span className="font-display text-xs font-bold text-brand-charcoal">Evolução passo a passo</span>
                </div>
                <p className="font-sans text-[10px] text-brand-sage/80 mt-1 leading-relaxed">
                  Plano dia a dia, de 2 a 4 semanas. Estruturado para aplicar com calma e acompanhar o ritmo natural de aprendizado do seu cão.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-sage shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display text-[10px] font-bold text-brand-charcoal">Roteiro Diário</h5>
                    <p className="font-sans text-[9px] text-brand-sage/80 mt-0.5 leading-tight">
                      Checklist do que observar nos horários críticos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-sage shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display text-[10px] font-bold text-brand-charcoal">Foco no Seu Tempo</h5>
                    <p className="font-sans text-[9px] text-brand-sage/80 mt-0.5 leading-tight">
                      Desenhado para rotina de quem trabalha fora.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-brand-sage/10 flex items-center justify-between">
              <span className="font-mono text-[9px] text-brand-sage font-medium">Bônus Especial</span>
              <span className="bg-brand-yellow-lima text-brand-charcoal font-display text-[8px] font-bold px-2 py-0.5 rounded-full uppercase shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300">Incluso</span>
            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mt-10 text-center flex flex-col items-center justify-center"
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
