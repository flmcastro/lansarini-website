"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  // Placeholder de imagens (substituir por fotos reais depois)
  const placeholders = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="py-20 px-6 md:px-20 bg-offWhite text-blackPremium">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-heading mb-12">Galeria Editorial</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {placeholders.map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="h-60 bg-gray-300 rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg"
            >
              <span className="text-gray-500 text-lg">[Imagem {i}]</span>
              {/* Placeholder para overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 hover:opacity-20 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}