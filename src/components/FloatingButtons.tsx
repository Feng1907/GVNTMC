"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronUp } from "lucide-react";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            title="Lên đầu trang"
            className="group relative w-11 h-11 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
            aria-label="Lên đầu trang"
          >
            <ChevronUp className="w-5 h-5" />
            <span className="absolute right-full mr-2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Lên đầu trang
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Zalo button */}
      <motion.a
        href="https://zalo.me/0919704433"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        title="Chat Zalo"
        className="group relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-transform"
        style={{ background: "#0068FF" }}
        aria-label="Chat Zalo"
      >
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
          <path d="M24 4C13 4 4 12.1 4 22.1c0 5.6 2.8 10.6 7.2 14l-1.2 6.8 7.5-3.7c2 .5 4.2.8 6.5.8 11 0 20-8.1 20-18.1S35 4 24 4z" fill="white"/>
          <path d="M14 19h8.5M14 24h5M28 19l-5 10h7" stroke="#0068FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="absolute right-full mr-2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat Zalo
        </span>
      </motion.a>

      {/* Phone button */}
      <motion.a
        href="tel:+842862515094"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        title="Gọi ngay"
        className="group relative w-14 h-14 bg-primary hover:bg-primary-700 rounded-full shadow-lg flex items-center justify-center text-white transition-colors"
        aria-label="Gọi điện"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
        <span className="absolute right-full mr-2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Gọi ngay
        </span>
      </motion.a>
    </div>
  );
}
