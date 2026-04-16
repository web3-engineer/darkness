"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Theme {
    id: string;
    title: string;
    description: string;
    category: string;
    updateFrequency: string;
    minPlan: "lite" | "premium" | "pro";
}

export default function LitePage() {
    const [themes, setThemes] = useState<Theme[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    // Busca os temas da API ao carregar a página
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
                console.error("Erro ao carregar banco de dados:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchThemes();
    }, []);

    const toggleTheme = (themeId: string, minPlan: string) => {
        // Impede a seleção se o tema for de um plano superior
        if (minPlan !== "lite") return;

        if (selectedThemes.includes(themeId)) {
            setSelectedThemes(selectedThemes.filter(id => id !== themeId));
        } else if (selectedThemes.length < 3) {
            setSelectedThemes([...selectedThemes, themeId]);
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">

            {/* TÍTULO DA PÁGINA */}
            <div className="mb-16 reveal-on-scroll">
                <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
                    Plano <span className="text-blue-400">Lite</span>
                </h1>
                <p className="text-white/50 max-w-2xl text-lg">
                    A porta de entrada para o conhecimento oculto. Escolha os seus 3 sinais diários.
                </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] gap-12">

                {/* ========================= */}
                {/* 🧩 SELEÇÃO DE TEMAS (UPSELL) */}
                {/* ========================= */}
                <section className="space-y-8 reveal-on-scroll">
                    <div className="glass p-6 md:p-8 rounded-[2.5rem] border border-white/5">
                        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                            <div>
                                <h2 className="text-xl font-medium mb-1">Base de Dados</h2>
                                <p className="text-xs text-white/40">
                                    Temas com 🔒 requerem upgrade de plano.
                                </p>
                            </div>
                            <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full">
                                {selectedThemes.length} / 3 SELECIONADOS
                            </span>
                        </div>

                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-20 text-blue-400 font-mono text-sm animate-pulse">
                                CONNECTING_TO_NODES...
                            </div>
                        ) : (
                            <div className="space-y-10">
                                {categories.map((category) => (
                                    <div key={category} className="space-y-4">
                                        <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
                                            {category}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {themes
                                                .filter((t) => t.category === category)
                                                .map((theme) => {
                                                    const isLocked = theme.minPlan !== "lite";
                                                    const isSelected = selectedThemes.includes(theme.id);

                                                    // Define estilos baseados no plano e estado
                                                    let cardStyle = "bg-white/5 border-white/5 text-white/60 hover:bg-white/10 cursor-pointer";
                                                    if (isSelected) cardStyle = "bg-blue-500/20 border-blue-400/50 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]";
                                                    if (isLocked) {
                                                        cardStyle = theme.minPlan === "premium"
                                                            ? "bg-purple-900/10 border-purple-500/20 text-purple-400/50 cursor-not-allowed opacity-70"
                                                            : "bg-emerald-900/10 border-emerald-500/20 text-emerald-400/50 cursor-not-allowed opacity-70";
                                                    }

                                                    return (
                                                        <button
                                                            key={theme.id}
                                                            onClick={() => toggleTheme(theme.id, theme.minPlan)}
                                                            className={`text-left px-4 py-3 rounded-xl transition-all border flex flex-col gap-1 relative overflow-hidden group ${cardStyle}`}
                                                        >
                                                            <div className="flex justify-between items-start w-full gap-2">
                                                                <span className={`text-sm font-medium ${isLocked ? 'group-hover:blur-[2px] transition-all' : ''}`}>
                                                                    {theme.title}
                                                                </span>
                                                                {isLocked && <span className="text-xs">🔒</span>}
                                                                {isSelected && <span className="text-blue-400 text-xs">✔</span>}
                                                            </div>
                                                            <span className="text-[10px] opacity-60 line-clamp-1">
                                                                {theme.description}
                                                            </span>

                                                            {/* Overlay de Upsell que aparece ao passar o rato (Hover) num item bloqueado */}
                                                            {isLocked && (
                                                                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                                    <span className="text-[10px] font-bold tracking-widest uppercase">
                                                                        Requer Plano {theme.minPlan}
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </button>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* ========================= */}
                {/* 💳 CHECKOUT INFORMATIVO */}
                {/* ========================= */}
                <aside className="space-y-6 reveal-on-scroll delay-200 lg:sticky lg:top-32 h-fit">

                    {/* CARD EXPLICATIVO DE ENTREGA */}
                    <div className="glass p-6 rounded-3xl border border-blue-500/20 space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl">
                            📱
                        </div>
                        <h3 className="text-lg font-medium text-blue-400">Como você recebe?</h3>
                        <p className="text-sm text-white/60 leading-relaxed">
                            Assim que o pagamento for confirmado, nossos agentes iniciam a varredura.
                        </p>
                        <div className="space-y-3 pt-2">
                            <div className="flex gap-3 items-start">
                                <span className="text-blue-400">✔</span>
                                <p className="text-xs text-white/70">Relatórios semanais via WhatsApp.</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <span className="text-blue-400">✔</span>
                                <p className="text-xs text-white/70">Acesso à área restrita no site Martinez.</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <span className="text-blue-400">✔</span>
                                <p className="text-xs text-white/70">Criptografia de ponta a ponta na entrega.</p>
                            </div>
                        </div>
                    </div>

                    {/* CARD DE PREÇO / BOTÃO */}
                    <div className="glass p-8 rounded-[2rem] border border-white/10 flex flex-col items-center text-center">
                        <span className="text-[10px] font-mono tracking-widest text-white/40 mb-2 uppercase">Assinatura Mensal</span>
                        <div className="text-4xl font-light mb-6">$33,00</div>

                        <button
                            disabled={selectedThemes.length < 3}
                            className={`
                                w-full py-4 rounded-2xl font-medium transition-all
                                ${selectedThemes.length === 3
                                    ? "bg-white text-black hover:scale-[1.02] shadow-xl cursor-pointer"
                                    : "bg-white/5 text-white/20 cursor-not-allowed"}
                            `}
                        >
                            {selectedThemes.length === 3 ? "Finalizar Assinatura" : "Selecione 3 temas"}
                        </button>

                        <p className="text-[10px] text-white/30 mt-4">
                            Cancele a qualquer momento. Pagamento via PIX ou Crypto.
                        </p>
                    </div>

                    <Link href="/#planos" className="block text-center text-xs text-white/40 hover:text-white transition">
                        ← Voltar para todos os planos
                    </Link>

                </aside>

            </div>
        </main>
    );
}