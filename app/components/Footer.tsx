"use client";

export default function Footer() {
  return (
    <footer className="bg-blackPremium text-offWhite py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Informações de contato */}
        <div className="space-y-2 text-center md:text-left">
          <p>📍 Estúdio: Av. Italo Politi 624 - Jardim Garavello - Guariba, SP</p>
          <p>📱 WhatsApp: <a href="https://wa.me/message/WWQ35CZQROO3M1" className="underline">Clique para agendar</a></p>
          <p>📸 Instagram: <a href="https://www.instagram.com/priscilabodypiercing/" target="_blank" rel="noopener noreferrer" className="underline">@priscilabodypiercing</a></p>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right opacity-70">
          &copy; {new Date().getFullYear()} LANSARINI Piercing & Beauty Studio
        </div>
      </div>
    </footer>
  );
}