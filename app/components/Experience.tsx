"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Piercing",
      description: "Especialista em piercings de precisão, higiene e conforto.",
      image: "/piercingartistico.png",
    },
    {
      title: "Hair Styling",
      description: "Coloração e styling personalizados para realçar sua beleza.",
      image: "/hairstyling.png",
    },
    {
      title: "Atendimento Premium",
      description: "Atendimento com hora marcada, atenção aos detalhes e conforto total.",
      image: "/atendimentopremium.png",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-offWhite text-blackPremium">
      <h2 className="text-4xl md:text-5xl font-heading text-center mb-12">
        Experiência Premium
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-lg opacity-80">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}