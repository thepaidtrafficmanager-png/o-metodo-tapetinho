import React from "react";
import { HeroSection } from "./components/HeroSection";
import { ProblemsSection } from "./components/ProblemsSection";
import { PivotSection } from "./components/PivotSection";
import { TransformationSection } from "./components/TransformationSection";
import { MethodSection } from "./components/MethodSection";
import { FirstWeekSection } from "./components/FirstWeekSection";
import { InclusionsSection } from "./components/InclusionsSection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TargetSection } from "./components/TargetSection";
import { FAQSection } from "./components/FAQSection";
import { PricingSection } from "./components/PricingSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal font-sans selection:bg-brand-yellow-lima selection:text-brand-charcoal bg-texture">
      {/* Global material layer: soft directional light + fine paper grain so surfaces read as lit material, never flat swatches */}
      <div className="pointer-events-none fixed inset-0 z-[45]" aria-hidden="true">
        <div className="absolute inset-0 mix-blend-soft-light opacity-[0.38]" style={{ background: "radial-gradient(50% 38% at 32% 6%, rgba(255,255,255,0.42), rgba(255,255,255,0) 55%), radial-gradient(125% 130% at 50% 55%, rgba(0,0,0,0) 56%, rgba(20,15,6,0.48) 100%)" }} />
        <svg className="absolute inset-0 h-full w-full opacity-[0.32] mix-blend-multiply" width="100%" height="100%" preserveAspectRatio="none">
          <filter id="grain-noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" /></filter>
          <rect width="100%" height="100%" filter="url(#grain-noise)" />
        </svg>
      </div>
      {/* Premium Minimalist Top Branding Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-xl px-6 py-4 border-b border-brand-charcoal/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-xs font-bold tracking-[0.2em] uppercase italic text-brand-charcoal">
              Método Casa Limpa
            </span>
          </div>
          <div className="flex gap-8 text-[11px] uppercase tracking-widest font-semibold text-brand-charcoal/60 hidden md:flex">
            <a href="#metodo" className="hover:text-brand-charcoal transition-colors">O Método</a>
            <a href="#especialista" className="hover:text-brand-charcoal transition-colors">Especialista</a>
            <a href="#faq" className="hover:text-brand-charcoal transition-colors">FAQ</a>
          </div>
          <a 
            href="#oferta"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2 border border-brand-charcoal rounded-full text-[11px] uppercase tracking-widest font-bold text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all duration-300"
          >
            Entrar
          </a>
        </div>
      </header>

      {/* Main Single Page Layout */}
      <main>
        <HeroSection />
        <ProblemsSection />
        <PivotSection />
        <TransformationSection />
        <TargetSection />
        <MethodSection />
        <FirstWeekSection />
        <InclusionsSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <PricingSection />
      </main>

      {/* Footer & Conversion Closer */}
      <FooterSection />
    </div>
  );
}
