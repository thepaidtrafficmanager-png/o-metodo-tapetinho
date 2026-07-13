import React from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  AlertCircle, 
  Sparkles,
  ArrowRight,
  Lock,
  Award
} from "lucide-react";
import { DoodleCircle, DoodleUnderline } from "./Doodles";
import { MagneticButton } from "./Doodles";
import { TiltCard } from "./TiltCard";
import { SpotlightOverlay } from "./SpotlightOverlay";

export const PricingSection: React.FC = () => {
  const inclusions = [
    "Curso Completo em Vídeo (5 partes práticas)",
    "Plano de Prática Detalhado (2 a 4 semanas)",
    "Método totalmente positivo, sem brigas",
    "Acesso imediato e vitalício às aulas",
    "Suporte integrado para tirar dúvidas"
  ];

  return (
    <section id="oferta" className="relative bg-brand-cream py-20 md:py-28 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-brand-sage/5 pointer-events-none" />
      <div className="absolute inset-y-0 right-1/4 w-[1px] bg-brand-sage/5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="mb-8 max-w-2xl mx-auto"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-brand-sage font-bold block mb-2">Acesso Imediato</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-brand-charcoal tracking-tight leading-none">
            Comece hoje a{" "}
            <span className="relative inline-block text-brand-charcoal font-serif italic">
              ensinar seu cão
            </span>
          </h2>
        </motion.div>

        {/* Core Pricing Card */}
        <TiltCard className="w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
          className="relative w-full bg-gradient-to-br from-brand-sage to-[#26271a] text-white rounded-irregular p-6 md:p-10 shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 border border-brand-sage-dark/20 overflow-hidden ring-1 ring-brand-yellow-lima/15"
        >
          <div className="absolute inset-0 rounded-[inherit] pointer-events-none" style={{ background: "radial-gradient(120% 90% at 15% 0%, rgba(255,255,255,0.10), transparent 55%)" }} />
          <SpotlightOverlay />
          {/* Subtle geometric dots */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none" />
          
          {/* Secure Purchase Tag */}
          <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 rounded-full border border-white/10 mb-6">
            <ShieldCheck className="w-4 h-4 text-brand-yellow-lima" />
            <span className="font-mono text-[10px] uppercase font-bold text-brand-yellow-lima tracking-wider">Compra 100% Segura</span>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
            
            {/* Left Col - Deliverables (7 cols) */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-display text-xl font-extrabold text-white leading-tight">
                Método Casa Limpa em Rotina
              </h3>
              
              <ul className="space-y-3">
                {inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow-lima shrink-0" />
                    <span className="font-sans text-sm text-brand-sage-light leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Col - Checkout Offer Box (5 cols) */}
            <div className="md:col-span-5 bg-white/85 backdrop-blur-xl text-brand-charcoal rounded-[2rem] p-5 text-center border border-brand-sage/10 shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 relative rotate-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-terracotta text-white font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs whitespace-nowrap">
                Valor Promocional
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase text-brand-sage tracking-wider font-semibold">Preço único</div>
              
              {/* Giant Price */}
              <div className="my-2 flex items-baseline justify-center gap-1.5 text-brand-charcoal">
                <span className="font-display text-lg font-bold">R$</span>
                <span className="font-display text-4xl font-black tracking-tight">47</span>
                <span className="font-mono text-xs text-brand-sage/70">,98</span>
              </div>

              {/* Secure Checkout Button */}
              <MagneticButton>
              <motion.a
                href="#"
                className="block w-full mt-4 py-3 px-4 bg-brand-yellow-lima text-brand-charcoal font-bold text-sm uppercase tracking-widest rounded-full shadow-[0_6px_0_#5A5A40] hover:translate-y-1 hover:shadow-[0_3px_0_#5A5A40] transition-all text-center"
              >
                Quero Ensinar
              </motion.a>
              </MagneticButton>

              {/* Security Indicators */}
              <div className="mt-4 flex flex-col items-center justify-center gap-2 text-brand-sage/60">
                <div className="flex items-center gap-1 text-[9px] font-mono font-semibold">
                  <CreditCard className="w-3 h-3" />
                  <span>Pix · Cartão · Boleto</span>
                </div>
                
                <div className="flex items-center justify-center gap-3 text-[8px] font-mono">
                  <div className="flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5" />
                    <span>Site seguro · SSL</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-2.5 h-2.5" />
                    <span>Seus dados protegidos · LGPD</span>
                  </div>
                </div>
              </div>

              {/* Warranty Placeholder */}
              <div className="mt-5 pt-4 border-t border-brand-sage/10 flex items-start gap-3 text-left">
                <div className="w-8 h-8 rounded-full bg-brand-yellow-lima/20 text-brand-charcoal flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-brand-charcoal leading-tight">
                    Garantia de [X] dias — <span className="bg-brand-sage/10 text-brand-sage px-1 rounded text-[9px] font-mono uppercase tracking-widest">A confirmar</span>
                  </h4>
                  <p className="font-sans text-[9px] text-brand-sage/80 mt-0.5 leading-snug">
                    Se você aplicar o método e não vir resultado, devolvemos seu dinheiro. Sem burocracia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Savings argument box */}
          <div className="relative z-10 mt-6 pt-4 border-t border-white/10 text-left">
            <p className="font-sans text-[11px] text-brand-sage-light leading-relaxed">
              <strong className="text-brand-yellow-lima">Economia comprovada:</strong> Este investimento único sai bem mais barato do que ficar comprando produto de limpeza toda semana e pagando higienização profissional de móveis.
            </p>
          </div>
        </motion.div>
        </TiltCard>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[10px] md:text-[11px] font-sans text-brand-sage/80"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-sage/5 border border-brand-sage/10 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-sage" />
            <span>Método do especialista Eric Martins</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-sage/5 border border-brand-sage/10 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-sage" />
            <span>Passo a passo positivo, sem brigas</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-sage/5 border border-brand-sage/10 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-sage" />
            <span>No seu ritmo (2 a 4 semanas)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-sage/5 border border-brand-sage/10 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-sage" />
            <span>Acesso vitalício às aulas</span>
          </div>
        </motion.div>

        {/* Legal Disclaimer */}
        <div className="mt-8 max-w-xl mx-auto flex items-start gap-2 text-left px-4">
          <AlertCircle className="w-3.5 h-3.5 text-brand-sage/50 shrink-0 mt-0.5" />
          <p className="font-sans text-[10px] text-brand-sage/60 leading-normal">
            <strong>Disclaimer:</strong> Conteúdo educativo para cães saudáveis. Não substitui avaliação veterinária nem consulta comportamental individual personalizada de adestramento presencial.
          </p>
        </div>
      </div>
    </section>
  );
};
