'use client';

import { useState, useEffect } from 'react';

const categories = [
  "Fiksi", 
  "Self-Improvement", 
  "Sains & Teknologi", 
  "Biografi", 
  "Ekonomi & Bisnis", 
  "Sejarah", 
  "Agama & Spiritualitas", 
  "Pendidikan", 
  "Psikologi", 
  "Seni & Desain"
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      // 1. Teks memudar dan bergeser ke kiri
      setFade(false);
      
      setTimeout(() => {
        // 2. Ganti kata, lalu munculkan lagi dari posisi awal
        setIndex((current) => (current + 1) % categories.length);
        setFade(true);
      }, 400); // Waktu teks menghilang (0.4 detik)

    }, 3000); // Teks berganti setiap 3 detik

    return () => clearInterval(timer);
  }, []);

  return (
    <span 
      className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 font-serif italic font-normal transition-all duration-500 transform ${
        fade ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    >
      {categories[index]}.
    </span>
  );
}