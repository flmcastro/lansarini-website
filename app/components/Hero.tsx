"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-blackPremium overflow-hidden">
      {/* Placeholder para vídeo */}
      <div className="absolute inset-0 bg-gray-800">
        <p className="text-center text-offWhite opacity-20 mt-40">[Video Placeholder]</p>
      </div>

      {/* Texto principal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-8xl font-heading mb-4">LANSARINI</h1>
        <h2 className="text-2xl md:text-4xl mb-8">Piercing & Beauty Studio</h2>
        <p className="mb-8 text-lg md:text-xl opacity-70">
          Estética autoral, precisão e identidade
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-goldChampagne text-blackPremium font-bold rounded-md hover:scale-105 transition-transform">
            Agendar Horário
          </button>
          <button className="px-6 py-3 border border-offWhite rounded-md hover:bg-goldChampagne hover:text-blackPremium transition-all">
            Ver Trabalhos
          </button>
        </div>
      </motion.div>
    </section>
  );
}