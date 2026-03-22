"use client";

import { useEffect, useState } from "react";

const mainText = "Junte-se ao movimento";
const subTextBase = "Acesse a Darknet";

const glitchWords = [
  "cibersegurança",
  "informação",
  "conspirações",
  "conhecimento",
  "segurança",
];

const chars = glitchWords.join("");

export default function GlitchHero() {
  const [subText, setSubText] = useState(subTextBase);
  const [smallText, setSmallText] = useState(glitchWords[0]);

  // 🔴 glitch forte (linha 2)
  useEffect(() => {
    const interval = setInterval(() => {
      runSubGlitch();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🧬 glitch contínuo (linha 3)
  useEffect(() => {
    const interval = setInterval(() => {
      const word =
        glitchWords[Math.floor(Math.random() * glitchWords.length)];

      const glitched = word
        .split("")
        .map((char) =>
          Math.random() < 0.3
            ? chars[Math.floor(Math.random() * chars.length)]
            : char
        )
        .join("");

      setSmallText(glitched);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const runSubGlitch = () => {
    let iterations = 0;

    const glitchInterval = setInterval(() => {
      const glitched = subTextBase
        .split("")
        .map((char) =>
          Math.random() < 0.4
            ? chars[Math.floor(Math.random() * chars.length)]
            : char
        )
        .join("");

      setSubText(glitched);

      iterations++;

      if (iterations > 8) {
        clearInterval(glitchInterval);
        setSubText(subTextBase);
      }
    }, 50);
  };

  return (
    <div className="flex flex-col items-center gap-3 text-center">

      {/* 🔥 LINHA PRINCIPAL (leve glitch via CSS) */}
      <h1 className="text-3xl md:text-5xl font-light tracking-wide cyber-text animate-flicker">
        {mainText}
      </h1>

      {/* ⚡ SUBTEXTO (glitch hacker) */}
      <h2 className="text-lg md:text-xl font-mono tracking-widest text-white/80">
        {subText}
      </h2>

      {/* 🧬 TEXTO MENOR (glitch constante) */}
      <span className="text-xs md:text-sm font-mono tracking-widest text-white/50">
        {smallText}
      </span>

    </div>
  );
}