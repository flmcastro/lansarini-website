"use client";

import { motion } from "framer-motion";

export default function Instagram() {
  // Placeholder de posts (substituir depois por fotos reais ou integração API)
  const posts = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="py-20 px-6 md:px-20 bg-offWhite text-blackPremium">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-heading mb-12">Instagram</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {posts.map((post) => (
            <motion.div
              key={post}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-300 h-32 w-full rounded-lg flex items-center justify-center relative overflow-hidden"
            >
              <span className="text-gray-500">Post {post}</span>
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 hover:opacity-20 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        <button className="mt-10 px-6 py-3 bg-goldChampagne text-blackPremium font-bold rounded-md hover:scale-105 transition-transform">
          Seguir no Instagram
        </button>
      </motion.div>
    </section>
  );
}