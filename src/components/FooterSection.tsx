import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { MessageSquare, ArrowUp, ArrowRight, ShieldCheck } from "lucide-react";
import { DoodleUnderline, DoodlePaw } from "./Doodles";
import { SpotlightOverlay } from "./SpotlightOverlay";

export const FooterSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-charcoal text-white pt-24 pb-12 px-4 overflow-hidden">
      {/* Absolute design grid layer */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            {/* Glow Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div 
          className="rounded-full absolute"
          style={{
            width: "60vw",
            height: "60vw",
            top: "-10%",
            left: "20%",
            background: "radial-gradient(closest-side, rgba(205,216,74,0.10), transparent 70%)",
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

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Giant Final Reinforcement Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-2xl mx-auto mb-12"
        >
          <DoodlePaw className="w-10 h-10 text-brand-yellow-lima mx-auto mb-6 opacity-80" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[0.9]">
            Você não precisa de mais paciência para limpar. Precisa de um{" "}
            <span className="relative inline-block text-brand-yellow-lima font-serif italic">
              passo a passo claro
              <DoodleUnderline className="w-full -bottom-1.5 left-0 text-brand-yellow-lima/30" />
            </span>{" "}
            para o seu cão aprender o tapetinho.
          </h2>
        </motion.div>

        {/* Final Big Action CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
          className="mb-16"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-brand-yellow-lima text-brand-charcoal font-bold text-sm uppercase tracking-widest shadow-[0_8px_0_#5A5A40] hover:translate-y-1 hover:shadow-[0_4px_0_#5A5A40] cursor-pointer transition-all"
          >
            <span>Quero ensinar meu cachorro a usar o tapetinho</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5px]" />
          </motion.a>
        </motion.div>

        {/* Support Section */}
        <div className="mb-16 pt-12 border-t border-white/5 max-w-xl mx-auto">
          <p className="font-sans text-sm text-brand-sage-light/60 mb-4">
            Ainda tem dúvidas se o curso funciona para a raça ou idade do seu cão?
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 hover:border-white/25 hover:bg-white/5 font-mono text-xs text-brand-yellow-lima font-bold transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar Conosco no WhatsApp</span>
          </motion.a>
        </div>

        {/* Footer legalities and copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-left text-brand-sage-light/40">
          
          <div className="text-center md:text-left space-y-2">
            <p className="font-display text-sm font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow-lima" />
              Método Casa Limpa em Rotina
            </p>
            <p className="font-sans text-xs leading-normal max-w-md">
              © {new Date().getFullYear()} Método Casa Limpa em Rotina. Todos os direitos reservados. Não substitui avaliação veterinária.
            </p>
          </div>

          {/* Links and Back to top */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 font-mono text-[10px] uppercase font-bold tracking-wider">
            <a href="#" className="hover:text-brand-yellow-lima transition-colors">Política de Privacidade</a>
            <span className="hidden sm:inline text-white/10">•</span>
            <a href="#" className="hover:text-brand-yellow-lima transition-colors">Termos de Uso</a>
            <span className="hidden sm:inline text-white/10">•</span>
            <button 
              onClick={scrollToTop}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white cursor-pointer transition-all"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
