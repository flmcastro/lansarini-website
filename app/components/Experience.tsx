"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-20 px-6 md:px-20 bg-blackPremium text-offWhite">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center space-y-10"
      >
        <h2 className="text-4xl font-heading mb-6">Experiência Premium</h2>
        <p className="text-lg md:text-xl opacity-70">
          Com anos de experiência em piercing e beleza, Priscila Lansarini combina
          técnica precisa e estética autoral, garantindo resultados únicos e
          personalizados para cada cliente.
        </p>

        {/* Cards de habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-grafiteProfundo p-6 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-heading mb-2">Piercing</h3>
            <p className="opacity-80">
              Especialista em piercings de precisão, higiene e conforto.
            </p>
          </div>
          <div className="bg-grafiteProfundo p-6 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-heading mb-2">Hair Styling</h3>
            <p className="opacity-80">
              Coloração e styling personalizados para realçar sua beleza.
            </p>
          </div>
          <div className="bg-grafiteProfundo p-6 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-heading mb-2">Atendimento Premium</h3>
            <p className="opacity-80">
              Atendimento com hora marcada, atenção aos detalhes e conforto total.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}