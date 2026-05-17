"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  media_type: string;
}

export default function Instagram() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    async function fetchInstagram() {
      try {
        const res = await fetch("/api/instagram");
        const data = await res.json();
        if (data.data) setPosts(data.data.slice(0, 6));
      } catch (error) {
        console.error("Erro ao buscar posts do Instagram:", error);
      }
    }
    fetchInstagram();
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-offWhite text-blackPremium">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading mb-4">Instagram</h2>
        <p className="text-lg md:text-xl opacity-80">
          Acompanhe nosso trabalho no Instagram e veja o que está acontecendo no estúdio.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 relative bg-white"
          >
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <img
                src={post.media_url}
                alt={post.caption || "Instagram"}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity">
                Ver no Instagram
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}