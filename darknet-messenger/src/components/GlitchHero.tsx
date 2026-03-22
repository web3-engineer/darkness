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

export default function GlitchHero() {
    const [subText, setSubText] = useState(subTextBase);

    useEffect(() => {
        const interval = setInterval(() => {
            runGlitch();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const runGlitch = () => {
        let iterations = 0;

        const glitchInterval = setInterval(() => {
            const word =
                glitchWords[Math.floor(Math.random() * glitchWords.length)];

            const mixed = subTextBase
                .split("")
                .map((char, i) => {
                    // 🔥 injeta palavras dentro do texto
                    if (Math.random() < 0.25) {
                        return word[i % word.length];
                    }

                    // leve distorção
                    if (Math.random() < 0.15) {
                        return String.fromCharCode(
                            33 + Math.floor(Math.random() * 94)
                        );
                    }

                    return char;
                })
                .join("");

            setSubText(mixed);

            iterations++;

            if (iterations > 8) {
                clearInterval(glitchInterval);
                setSubText(subTextBase);
            }
        }, 60);
    };

    return (
        <div className="flex flex-col items-center gap-3 text-center">

            {/* 🔥 HIGHLIGHT */}
            <h1 className="text-3xl md:text-5xl font-light tracking-wide text-white animate-glitch-soft">
                {mainText}
            </h1>

            {/* ⚡ SUBTÍTULO (glitch elaborado) */}
            <h2 className="text-lg md:text-xl font-mono tracking-widest text-white/80">
                {subText}
            </h2>

        </div>
    );
}