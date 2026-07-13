import React from "react";
import { motion } from "motion/react";
import { Award, Users, MapPin, CheckCircle } from "lucide-react";
import { DoodleUnderline } from "./Doodles";
import { ImageReveal } from "./ImageReveal";
import { TiltCard } from "./TiltCard";

import trainerImg from "../assets/images/trainer_eric_1783910925794.jpg";

export const AboutSection: React.FC = () => {
  return (
    <section id="especialista" className="relative bg-brand-cream py-20 md:py-28 px-4 overflow-hidden">
      {/* Structural Hairlines */}
      <div className="absolute inset-y-0 left-[10%] w-[1px] bg-brand-sage/5 pointer-events-none" />
      <div className="absolute inset-y-0 right-[10%] w-[1px] bg-brand-sage/5 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1: Trainer Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard>
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ rotate: 0 }}
              className="relative p-3 bg-white rounded-irregular shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 border border-brand-cream-dark max-w-[280px] md:max-w-sm"
            >
              
              <div className="relative aspect-square rounded-[1.5rem] overflow-hidden bg-brand-sage">
                <ImageReveal
                  src={trainerImg}
                  alt="Eric Martins - Adestrador Canino"
                  color="bg-brand-sage"
                  className="w-full h-full"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-brand-charcoal/90 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/10 flex items-center gap-2 z-20">
                  <MapPin className="w-3.5 h-3.5 text-brand-yellow-lima shrink-0" />
                  <span className="font-mono text-[9px] text-white font-medium uppercase tracking-wider">Barra Velha / SC</span>
                </div>
              </div>
              <div className="pt-3 pb-1 text-center">
                <span className="font-mono text-[10px] text-brand-sage font-semibold">Eric Martins & amigo canino</span>
              </div>
            </motion.div>
            </TiltCard>
          </div>

          {/* Column 2: Specialist Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            className="lg:col-span-7"
          >
            <span className="inline-block px-4 py-1 bg-brand-sage/10 rounded-full text-brand-sage text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Com quem você vai aprender</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-brand-charcoal tracking-tight leading-[0.9] mb-4">
              O adestrador por trás do{" "}
              <span className="relative inline-block text-brand-charcoal font-serif italic">
                método
              </span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-sage leading-relaxed mb-6">
              <strong className="text-brand-charcoal font-semibold">Eric Martins</strong>, Adestrador e Comportamentalista Canino. Seu método foi desenvolvido com base no atendimento de casos reais todos os dias, com o passo a passo que funciona na casa de verdade.
            </p>

            {/* Credentials / Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3 bg-[#FAF8F5]/80 rounded-xl border border-brand-sage/10 flex items-start gap-3">
                <div className="p-1.5 bg-brand-sage-light rounded-lg text-brand-sage shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-brand-charcoal">Especialista Qualificado</h4>
                  <p className="font-sans text-[10px] text-brand-sage/80 leading-normal mt-0.5">
                    Pós-graduado em Etologia Clínica Veterinária.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-[#FAF8F5]/80 rounded-xl border border-brand-sage/10 flex items-start gap-3">
                <div className="p-1.5 bg-brand-sage-light rounded-lg text-brand-sage shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-brand-charcoal">+2.000 Famílias Atendidas</h4>
                  <p className="font-sans text-[10px] text-brand-sage/80 leading-normal mt-0.5">
                    Resultados práticos provados em casas de verdade.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-brand-sage text-white rounded-irregular-sm border border-brand-sage-dark flex items-start gap-3 shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300">
              <CheckCircle className="w-4 h-4 text-brand-yellow-lima shrink-0 mt-0.5" />
              <p className="font-sans text-xs text-brand-sage-light">
                O método foi gravado por quem atende casos reais todos os dias, com o passo a passo que funciona na casa de verdade.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
