"use client";

import { motion } from "framer-motion";

const galleryImages = [
  { src: "/piercingartistico.png", alt: "Piercing Artístico" },
  { src: "/clientesatisfeito.png", alt: "Cliente Satisfeito" },
  { src: "/hairstyling.png", alt: "Hair Styling" },
  { src: "/piercingdetalhe.png", alt: "Piercing Detalhe" },
  { src: "/piercing.png", alt: "Coloração Criativa" },
  { src: "/piercing3.png", alt: "Ambiente do Estúdio" },
];

export default function Gallery() {
  return (
    <section id="portfolio" className="py-20 bg-offWhite text-blackPremium">
      <h2 className="text-4xl font-heading text-center mb-12">Galeria</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}