"use client";

import { useState } from "react";

const transmissions = [
  {
    freq: "142.7 MHz",
    title: "Transmissão Militar",
    snippet: "…objeto não identificado sobrevoando a base… comunicação perdida após contato visual…",
  },
  {
    freq: "88.3 MHz",
    title: "Relato Civil",
    snippet: "…luzes no céu se moviam contra o vento… não era avião… ninguém acreditou…",
  },
  {
    freq: "301.1 MHz",
    title: "Canal Criptografado",
    snippet: "…eles já estavam aqui antes… não estamos preparados para o que vem…",
  },
  {
    freq: "77.9 MHz",
    title: "Interferência",
    snippet: "…voz repetindo coordenadas… 14.221… 42.998… desaparece em ruído…",
  },
  {
    freq: "512.4 MHz",
    title: "Ex-Militar",
    snippet: "…ordem direta: não registrar… não reportar… isso nunca aconteceu…",
  },
  {
    freq: "66.6 MHz",
    title: "Sinal Anômalo",
    snippet: "…frequência não catalogada… padrão não humano detectado…",
  },
  {
    freq: "120.0 MHz",
    title: "Torre de Controle",
    snippet: "…objeto sem transponder… ignorando protocolos de voo…",
  },
  {
    freq: "999.9 MHz",
    title: "Canal Fantasma",
    snippet: "…mensagem aparece apenas por 3 segundos… origem desconhecida…",
  },
];

export default function Frequencias() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="space-y-12">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl md:text-3xl font-light glitch" data-text="Frequências">
          Frequências
        </h2>

        <p className="text-white/60">
          Sinais interceptados. Conteúdo bloqueado até liberação do sistema.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {transmissions.map((t, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className="
              glass p-5 rounded-2xl cursor-pointer
              transition-all duration-300
              hover:scale-[1.02]
              relative overflow-hidden
            "
          >

            {/* frequência */}
            <p className="text-xs text-white/40 mb-2">
              {t.freq}
            </p>

            {/* título */}
            <h3 className="text-lg mb-2">
              {t.title}
            </h3>

            {/* snippet */}
            <p className="text-sm text-white/60 line-clamp-3">
              {t.snippet}
            </p>

            {/* overlay bloqueado */}
            <div className="
              absolute inset-0 flex items-center justify-center
              bg-black/40 backdrop-blur-[2px]
            ">
              <span className="text-xs tracking-widest opacity-70">
                🔒 BLOQUEADO
              </span>
            </div>

          </div>
        ))}

      </div>

      {/* DETALHE (quando clica) */}
      {active !== null && (
        <div className="glass p-6 rounded-2xl max-w-2xl mx-auto animate-fadeIn">

          <p className="text-xs text-white/40 mb-2">
            {transmissions[active].freq}
          </p>

          <h3 className="text-lg mb-3">
            {transmissions[active].title}
          </h3>

          <p className="text-white/60 text-sm">
            {transmissions[active].snippet}
          </p>

          <p className="text-red-400 text-xs mt-4 animate-flicker">
            acesso restrito — aguardando liberação do sistema
          </p>

        </div>
      )}

    </div>
  );
}