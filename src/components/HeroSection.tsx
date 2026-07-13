import React from "react";
import { motion } from "motion/react";
import { 
  DoodleUnderline, 
  DoodleArrow, 
  DoodleSparkle
} from "./Doodles";
import { MagneticButton } from "./Doodles";
import frenchBulldogImg from "../assets/images/french_bulldog_puppy_1783910901961.jpg";
import pomeranianImg from "../assets/images/pomeranian_puppy_1783910912833.jpg";

const tunnelMedias = [
  { id: 1, src: pomeranianImg, alt: "Cachorro 1" },
  { id: 2, src: frenchBulldogImg, alt: "Cachorro 2" },
  { id: 3, src: pomeranianImg, alt: "Cachorro 3" },
  { id: 4, src: frenchBulldogImg, alt: "Cachorro 4" },
  { id: 5, src: pomeranianImg, alt: "Cachorro 5" },
  { id: 6, src: frenchBulldogImg, alt: "Cachorro 6" },
  { id: 7, src: pomeranianImg, alt: "Cachorro 7" },
  { id: 8, src: frenchBulldogImg, alt: "Cachorro 8" },
  { id: 9, src: pomeranianImg, alt: "Cachorro 9" },
  { id: 10, src: frenchBulldogImg, alt: "Cachorro 10" },
];

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-brand-cream overflow-hidden px-4 pt-32 pb-24 flex flex-col items-center justify-center">
      {/* Background 3D Tunnel */}
      <div className="hero-tunnel-container" aria-hidden="true">
        {tunnelMedias.map((media) => (
          <div key={media.id} className="tunnel-item bg-brand-cream-dark">
            <img 
              src={media.src} 
              alt={media.alt} 
              className="w-full h-full object-cover mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>

      {/* 2. Custom floating badge on right - "No seu ritmo" */}
      <motion.div 
        className="absolute right-4 md:right-[15%] top-[14%] md:top-[20%] z-20 bg-brand-sage text-white px-4 py-2.5 rounded-irregular-sm shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 border border-brand-sage-dark rotate-[5deg] hidden sm:flex items-center gap-2 animate-float-reverse"
        whileHover={{ scale: 1.08, rotate: "0deg" }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <DoodleSparkle className="w-4 h-4 text-brand-yellow-lima relative inline-block animate-pulse" />
        <span className="font-mono text-xs font-bold tracking-wider uppercase text-brand-yellow-lima">No seu ritmo</span>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center mt-8">
        
        {/* Eyebrow / Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="inline-block px-4 py-1.5 rounded-full bg-brand-sage-light text-brand-sage font-sans text-xs md:text-sm font-semibold mb-8 text-center max-w-xl shadow-xs border border-brand-sage/10 backdrop-blur-sm"
        >
          Para cães de pequeno e médio porte, de qualquer idade, que vivem em apartamento ou dentro de casa
        </motion.div>

        {/* Main Headline with doodle ring */}
        <div className="relative px-2">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-brand-charcoal tracking-tight leading-[0.9] mb-6 drop-shadow-md"
          >
            Seu cachorro fazendo <br className="hidden md:block" />xixi e cocô no{" "}
            <span className="relative inline-block px-1 text-brand-charcoal font-serif italic">
              tapetinho
              <DoodleUnderline className="absolute w-full -bottom-1 left-0 text-brand-terracotta/90" />
            </span>
            , do jeito certo.
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
          className="font-sans text-base sm:text-lg md:text-xl text-brand-charcoal/90 font-medium max-w-2xl leading-relaxed mb-10 md:mb-12 px-4 drop-shadow-sm"
        >
          Um passo a passo simples para o seu cão aprender a usar o tapetinho dentro de casa. Você começa a ver as primeiras respostas em <strong className="font-bold text-brand-charcoal">24 horas</strong> e segue um plano de prática de <strong className="font-bold text-brand-charcoal">2 a 4 semanas</strong>, no seu ritmo.
        </motion.p>

        {/* Action CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center px-4 relative mb-12"
        >
          {/* Scribble pointing to CTA */}
          <div className="absolute right-[5%] sm:right-[15%] md:right-[22%] -top-14 hidden sm:block">
            <DoodleArrow className="w-12 h-12 text-brand-terracotta -rotate-[20deg]" />
            <span className="absolute -top-6 -right-16 font-mono text-[10px] text-brand-terracotta font-medium tracking-wide drop-shadow-md">Comece aqui</span>
          </div>

          <MagneticButton>
          <motion.button 
            onClick={() => scrollToSection("oferta")}
            className="w-full sm:w-auto px-10 py-5 bg-brand-yellow-lima text-brand-charcoal font-bold text-sm uppercase tracking-widest rounded-full shadow-[0_8px_0_#5A5A40] hover:translate-y-1 hover:shadow-[0_4px_0_#5A5A40] transition-all cursor-pointer"
          >
            Quero ensinar meu cachorro a usar o tapetinho
          </motion.button>
          </MagneticButton>

          <motion.button 
            onClick={() => scrollToSection("metodo")}
            className="w-full sm:w-auto px-10 py-5 rounded-full border border-brand-charcoal bg-white/50 backdrop-blur-sm text-brand-charcoal font-bold text-sm uppercase tracking-widest hover:bg-brand-charcoal hover:text-white transition-all duration-300 cursor-pointer"
          >
            Ver como funciona
          </motion.button>
        </motion.div>

        {/* Trust/Disclaimer lines */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full max-w-xl px-4 pt-6"
        >
          <p className="font-sans text-[11px] md:text-xs text-brand-charcoal/60 leading-normal">
            24 horas significa as primeiras respostas do seu cão, não um cachorro treinado para sempre. Conteúdo para cães saudáveis. Não substitui avaliação veterinária.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
