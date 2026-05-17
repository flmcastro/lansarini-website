"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 px-6 md:px-20 bg-goldChampagne text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-heading text-blackPremium mb-6">
          Agende seu horário agora
        </h2>
        <p className="text-lg md:text-xl text-blackPremium opacity-80 mb-8">
          Atendimento premium com hora marcada. Entre em contato e garanta sua experiência única.
        </p>

        {/* Botão animado */}
        <motion.a
          href="https://wa.me/message/WWQ35CZQROO3M1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-blackPremium text-goldChampagne font-bold rounded-md shadow-md inline-block transition-transform duration-300"
        >
          Agendar pelo WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}