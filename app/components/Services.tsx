"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Piercing",
      description: "Perfuração com precisão, cuidado e higiene total.",
    },
    {
      title: "Cabelo",
      description: "Alisamento Plástica dos Fios, Alisamento Lisoterapia, Hidratação, Escova, Escova Modelada, Babyliss.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-blackPremium text-offWhite">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-heading mb-12">Serviços</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-grafiteProfundo p-6 rounded-lg shadow-lg transition-transform"
            >
              {/* Placeholder para ícone */}
              <div className="h-16 w-16 bg-gray-500 mx-auto mb-4 rounded-full flex items-center justify-center">
                <span className="text-blackPremium">Icon</span>
              </div>

              <h3 className="text-2xl font-heading mb-2">{service.title}</h3>
              <p className="opacity-80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}