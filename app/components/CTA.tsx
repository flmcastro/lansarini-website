"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 px-6 md:px-20 bg-goldChampagne text-blackPremium">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-heading">
          Agende seu horário agora
        </h2>
        <p className="text-lg md:text-xl opacity-80">
          Experiência premium em piercing e beauty styling, com atendimento exclusivo.
        </p>
        <a
          href="https://wa.me/551632510704"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-blackPremium text-goldChampagne font-bold rounded-md hover:scale-105 transition-transform"
        >
          Agendar pelo WhatsApp
        </a>
      </motion.div>
    </section>
  );
}