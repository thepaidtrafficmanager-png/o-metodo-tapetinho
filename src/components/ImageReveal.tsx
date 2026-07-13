import { motion, useReducedMotion } from "framer-motion";

export function ImageReveal({ src, alt, className, color = "bg-brand-sage" }: { src: string, alt: string, className?: string, color?: string }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`relative overflow-hidden ${className}`}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Curtain */}
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{ y: "100%" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.95, // 0.4s down + 0.55s out ~ 0.95s
          ease: [0.19, 1, 0.22, 1],
        }}
        className={`absolute inset-0 z-10 ${color}`}
      />
      {/* Image Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.01,
          delay: 0.4, // reveals exactly when the curtain is covering the whole frame
        }}
        className="w-full h-full"
      >
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
