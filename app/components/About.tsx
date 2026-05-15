"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 md:px-20 bg-offWhite text-blackPremium">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        {/* Placeholder de imagem */}
        <div className="w-full md:w-1/2 h-80 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">[Foto da Priscila / Estúdio]</span>
        </div>

        {/* Texto sobre o estúdio */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-heading">Sobre o Estúdio</h2>
          <p className="text-lg opacity-80">
            A LANSARINI Piercing & Beauty Studio é dedicada à estética autoral,
            oferecendo atendimento personalizado com precisão, cuidado e
            identidade artística. Cada procedimento é realizado com atenção aos
            mínimos detalhes, respeitando seu estilo e sua essência.
          </p>
          <p className="text-lg opacity-80">
            A fundadora, Priscila Lansarini, combina experiência em piercing e
            hair styling, criando resultados únicos que unem técnica e
            criatividade.
          </p>
        </div>
      </motion.div>
    </section>
  );
}