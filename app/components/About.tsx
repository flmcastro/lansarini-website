"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 px-6 md:px-20 bg-offWhite text-blackPremium">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-14"
      >
        {/* IMAGEM SEM FUNDO - CLEAN + PREMIUM */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className="flex-shrink-0 w-full md:w-1/2"
        >
          <img
            src="/aboutnew.png"
            alt="Priscila Lansarini / Estúdio"
            className="
              w-full 
              h-auto 
              object-contain 
              rounded-xl 
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
            "
          />
        </motion.div>

        {/* TEXTO MAIS ENCAIXADO E LEVE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-heading leading-tight">
            Sobre o Estúdio
          </h2>

          <p className="text-lg md:text-xl opacity-80 leading-relaxed">
            A LANSARINI Piercing & Beauty Studio é dedicada à estética autoral,
            oferecendo atendimento personalizado com precisão, cuidado e identidade artística.
            Cada procedimento é realizado com atenção aos mínimos detalhes.
          </p>

          <p className="text-lg md:text-xl opacity-80 leading-relaxed">
            A fundadora, Priscila Lansarini, combina experiência em piercing e hair styling,
            criando resultados únicos que unem técnica e criatividade.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}