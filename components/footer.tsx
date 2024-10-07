"use client"
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="mb-10 px-4 text-center text-gray-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <small className="mb-2 block text-xs">
        &copy; 2024 Jose Llanos. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <motion.div 
        className="mt-4 flex justify-center space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <a href="https://github.com/josellanos95" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com/in/jose-maria-llanos" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition-colors">
          LinkedIn
        </a>
      </motion.div>
    </motion.footer>
  );
}