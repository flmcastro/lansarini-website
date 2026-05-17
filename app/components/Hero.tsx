"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-blackPremium overflow-hidden">
      {/* Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/salaoestudio.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-blackPremium opacity-40"></div>
      </div>

      {/* Texto principal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-6xl md:text-8xl font-heading mb-4">LANSARINI</h1>
        <h2 className="text-2xl md:text-4xl mb-8">Piercing & Beauty Studio</h2>
        <p className="mb-8 text-lg md:text-xl opacity-70">
          Estética autoral, precisão e identidade
        </p>

        {/* Botões animados */}
        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/message/WWQ35CZQROO3M1"
            className="px-6 py-3 bg-blackPremium text-goldChampagne font-bold rounded-md transition-transform inline-block"
          >
            Agendar pelo WhatsApp
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-goldChampagne text-blackPremium font-bold rounded-md transition-transform"
          >
            Ver Trabalhos
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}