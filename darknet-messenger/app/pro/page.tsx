"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Theme {
    id: string;
    title: string;
    description: string;
    category: string;
    minPlan: "lite" | "premium" | "pro";
}

export default function ProPage() {
    const [themes, setThemes] = useState<Theme[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchThemes = async () => {
            try {
                const res = await fetch('/api/themes');
                const data = await res.json();
                if (data.status === "success") {
                    setThemes(data.themes);
                    setCategories(data.categories);
                }
            } catch (error) {
                console.error("Erro ao carregar:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchThemes();
    }, []);

    const toggleTheme = (themeId: string) => {
        // No plano PRO, não há restrições de nível (minPlan). Acessa tudo.
        if (selectedThemes.includes(themeId)) {
            setSelectedThemes(selectedThemes.filter(id => id !== themeId));
        } else if (selectedThemes.length < 13) {
            setSelectedThemes([...selectedThemes, themeId]);
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">

            {/* HEADER COM FOCO NO PRODUTO */}
            <div className="mb-16 reveal-on-scroll">
                <span className="text-emerald-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                    ROOT_ACCESS_GRANTED // OVERRIDE: ON
                </span>
                <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-4 text-emerald-400 uppercase italic">
                    Plano <span className="text-white drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">Pro</span>
                </h1>
                <p className="text-emerald-400/70 max-w-2xl text-sm md:text-base font-mono leading-relaxed">
                    DOMÍNIO TOTAL. OBTENHA ACESSO IRRESTRITO AO BANCO DE DADOS.
                    SELECIONE 13 CANAIS DE IA OPERANDO NA DEEP WEB 24/7.
                </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">

                {/* ========================= */}
                {/* 🧩 GRID DE PRODUTOS (TEMAS) */}
                {/* ========================= */}
                <section className="space-y-16">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 text-emerald-500 font-mono animate-pulse text-sm">
                            &gt; ESTABELECENDO CONEXÃO COM NÓS OCULTOS...
                        </div>
                    ) : (
                        categories.map((category) => (
                            <div key={category} className="space-y-6 reveal-on-scroll">
                                <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-500/50 uppercase border-l-2 border-emerald-500 pl-4">
                                    DIR: /{category.replace(/\s+/g, '_').toUpperCase()}
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {themes.filter(t => t.category === category).map((theme) => {
                                        const isSelected = selectedThemes.includes(theme.id);

                                        // Estilo Terminal / Hacker
                                        let cardStyles = "group relative p-4 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden font-mono ";

                                        if (isSelected) {
                                            cardStyles += "bg-emerald-500 text-black border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]";
                                        } else {
                                            cardStyles += "bg-black/60 border-emerald-500/20 text-emerald-500/60 hover:border-emerald-500/60 hover:bg-emerald-900/20";
                                        }

                                        return (
                                            <div
                                                key={theme.id}
                                                onClick={() => toggleTheme(theme.id)}
                                                className={cardStyles}
                                            >
                                                <div className="relative z-10 flex flex-col h-full justify-between gap-2">
                                                    <div className="flex justify-between items-start gap-2">
                                                        <h4 className="text-xs font-bold uppercase tracking-tight leading-tight">
                                                            {isSelected ? "> " : ""}{theme.title}
                                                        </h4>

                                                        {/* Tag da origem do Tema (Mostrando o quão valioso é ter o PRO) */}
                                                        {!isSelected && (
                                                            <span className="text-[8px] px-1.5 py-0.5 rounded border border-emerald-500/30 uppercase shrink-0">
                                                                T_L:{theme.minPlan === 'pro' ? '3' : theme.minPlan === 'premium' ? '2' : '1'}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className={`text-[10px] leading-relaxed line-clamp-2 ${isSelected ? "text-black/70" : "text-emerald-500/40"}`}>
                                                        {theme.description}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))
                    )}
                </section>

                {/* ========================= */}
                {/* 💳 SIDEBAR DE CONVERSÃO (CHECKOUT) */}
                {/* ========================= */}
                <aside className="lg:sticky lg:top-32 h-fit space-y-6">

                    {/* CARD VANTAGENS (LOG) */}
                    <div className="glass p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
                        <h3 className="text-sm font-mono text-emerald-400 border-b border-emerald-500/20 pb-3 mb-4">
                            SYS.ACCESS_LOG // PERKS
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "13 canais de IA simultâneos",
                                "Podcasts gerados automaticamente",
                                "Documentários e arquivos sigilosos",
                                "Cursos de cibersegurança (OPSEC)",
                                "Suporte direto via Signal/WhatsApp"
                            ].map((text, i) => (
                                <li key={i} className="flex gap-3 text-xs font-mono text-emerald-100/70">
                                    <span className="text-emerald-500">0x0{i + 1}</span> {text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CARD DE PREÇO FINAL */}
                    <div className="glass p-8 rounded-2xl border-2 border-emerald-500 flex flex-col items-center text-center shadow-[0_0_50px_rgba(16,185,129,0.15)] bg-black/40">
                        <div className="flex items-center justify-between w-full mb-6">
                            <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-500/50 uppercase">
                                STATUS: {selectedThemes.length}/13
                            </span>
                            <span className="text-[10px] bg-emerald-500 text-black px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                                Nível Máximo
                            </span>
                        </div>

                        <div className="text-5xl font-mono text-emerald-400 mb-8 font-bold">
                            $333<span className="text-2xl text-emerald-500/50">,00</span>
                        </div>

                        <button
                            disabled={selectedThemes.length < 13}
                            className={`
                                w-full py-4 rounded-xl font-mono font-bold text-sm uppercase tracking-wider transition-all duration-300
                                ${selectedThemes.length === 13
                                    ? "bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] cursor-pointer"
                                    : "bg-emerald-950/40 text-emerald-500/40 border border-emerald-900 cursor-not-allowed"}
                            `}
                        >
                            {selectedThemes.length === 13 ? "INITIALIZE_SUBSCRIPTION" : `Aguardando ${13 - selectedThemes.length} Temas`}
                        </button>

                        <div className="mt-6 flex flex-col gap-2">
                            <p className="text-[9px] font-mono text-emerald-500/40 uppercase tracking-widest">Protocolos de Pagto</p>
                            <div className="flex gap-4 opacity-50 justify-center text-emerald-500 font-mono">
                                <span className="text-[10px]">PIX</span>
                                <span className="text-[10px]">BTC</span>
                                <span className="text-[10px]">USDT</span>
                            </div>
                        </div>
                    </div>

                    <Link href="/#planos" className="block text-center text-[10px] font-mono font-bold tracking-widest text-emerald-500/40 hover:text-emerald-400 transition-colors uppercase">
                        &lt; RETURN_TO_ROOT
                    </Link>

                </aside>

            </div>
        </main>
    );
}