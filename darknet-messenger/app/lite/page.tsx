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

export default function LitePage() {
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

    const toggleTheme = (themeId: string, minPlan: string) => {
        // Bloqueia a seleção se o tema for de um plano superior
        if (minPlan !== "lite") return;
        
        if (selectedThemes.includes(themeId)) {
            setSelectedThemes(selectedThemes.filter(id => id !== themeId));
        } else if (selectedThemes.length < 3) {
            setSelectedThemes([...selectedThemes, themeId]);
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            
            {/* HEADER COM FOCO NO PRODUTO */}
            <div className="mb-20 reveal-on-scroll">
                <span className="text-blue-400 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Configuração de Agentes</span>
                <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">
                    Plano <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Lite</span>
                </h1>
                <p className="text-white/70 max-w-2xl text-lg font-light leading-relaxed">
                    Selecione as frequências que os nossos agentes devem monitorar. 
                    O conhecimento oculto agora é processado e entregue com precisão.
                </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_380px] gap-16">

                {/* ========================= */}
                {/* 🧩 GRID DE PRODUTOS (TEMAS) */}
                {/* ========================= */}
                <section className="space-y-16">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 text-blue-400 font-mono animate-pulse">
                            [ SISTEMA INICIALIZANDO... ]
                        </div>
                    ) : (
                        categories.map((category) => (
                            <div key={category} className="space-y-6 reveal-on-scroll">
                                <h3 className="text-sm font-bold tracking-[0.2em] text-white/30 uppercase border-l-2 border-blue-500 pl-4">
                                    {category}
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {themes.filter(t => t.category === category).map((theme) => {
                                        const isLocked = theme.minPlan !== "lite";
                                        const isSelected = selectedThemes.includes(theme.id);
                                        const isPremium = theme.minPlan === "premium";
                                        const isPro = theme.minPlan === "pro";
                                        
                                        // Definindo os estilos baseados no estado (ativo, livre ou bloqueado)
                                        let cardStyles = "group relative p-5 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden shadow-lg ";
                                        
                                        if (isSelected) {
                                            cardStyles += "bg-blue-600/20 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-[1.02]";
                                        } else if (isPremium) {
                                            // Estilo Chamativo para Premium Bloqueado
                                            cardStyles += "bg-gradient-to-br from-white/5 to-purple-500/10 border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]";
                                        } else if (isPro) {
                                            // Estilo Chamativo para Pro Bloqueado
                                            cardStyles += "bg-gradient-to-br from-white/5 to-emerald-500/10 border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]";
                                        } else {
                                            // Tema Normal Disponível
                                            cardStyles += "bg-white/5 border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08]";
                                        }

                                        return (
                                            <div
                                                key={theme.id}
                                                onClick={() => toggleTheme(theme.id, theme.minPlan)}
                                                className={cardStyles}
                                            >
                                                {/* Glow Traseiro para itens ativos */}
                                                {isSelected && <div className="absolute -inset-1 bg-blue-500/20 blur-xl"></div>}

                                                <div className="relative z-10 flex flex-col h-full justify-between">
                                                    <div>
                                                        <div className="flex justify-between items-start mb-3 gap-2">
                                                            <h4 className="text-base font-medium tracking-tight text-white leading-tight">
                                                                {theme.title}
                                                            </h4>
                                                            
                                                            {/* SELO DE BLOQUEIO / CADEADO CHAMATIVO */}
                                                            {isLocked ? (
                                                                <div className={`flex items-center gap-1.5 px-2 py-1 rounded-md border text-[9px] font-bold uppercase tracking-wider shrink-0 ${isPremium ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                                                                    <span>🔒</span> {theme.minPlan}
                                                                </div>
                                                            ) : isSelected ? (
                                                                <span className="text-blue-400 animate-pulse shrink-0">●</span>
                                                            ) : null}
                                                        </div>
                                                        <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
                                                            {theme.description}
                                                        </p>
                                                    </div>
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
                <aside className="lg:sticky lg:top-32 h-fit space-y-8">
                    
                    {/* CARD ENTREGA (WHATSAPP) */}
                    <div className="glass p-8 rounded-[2.5rem] border border-blue-500/30 bg-blue-500/5 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 text-6xl opacity-10">📱</div>
                        <h3 className="text-xl font-medium text-blue-400 mb-4">Entrega via WhatsApp</h3>
                        <p className="text-sm text-white/70 leading-relaxed mb-6">
                            Nossos agentes processam os dados e entregam relatórios semanais diretamente no seu dispositivo, com segurança militar.
                        </p>
                        <ul className="space-y-4">
                            {["Relatórios em PDF Criptografado", "Alertas Diários no Site", "Suporte Prioritário"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-xs font-medium text-white/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CARD DE PREÇO FINAL */}
                    <div className="glass p-10 rounded-[3rem] border border-white/10 flex flex-col items-center text-center shadow-2xl">
                        <span className="text-[10px] font-mono tracking-[0.3em] text-white/30 mb-4 uppercase">Valor do Acesso</span>
                        <div className="flex items-start gap-1 mb-8">
                            <span className="text-xl mt-2 text-white/40">$</span>
                            <span className="text-6xl font-light tracking-tighter">33,00</span>
                        </div>
                        
                        <button 
                            disabled={selectedThemes.length < 3}
                            className={`
                                w-full py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all duration-500
                                ${selectedThemes.length === 3 
                                    ? "bg-blue-500 text-white hover:bg-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.4)] scale-105 cursor-pointer" 
                                    : "bg-white/5 text-white/20 border border-white/5 cursor-not-allowed"}
                            `}
                        >
                            {selectedThemes.length === 3 ? "Confirmar Assinatura" : "Selecione 3 Temas"}
                        </button>
                        
                        <div className="mt-6 flex flex-col gap-2">
                            <p className="text-[10px] text-white/30 uppercase tracking-widest">Pagamento Seguro</p>
                            <div className="flex gap-4 opacity-30 grayscale justify-center">
                                <span className="text-xs">PIX</span>
                                <span className="text-xs">BTC</span>
                                <span className="text-xs">USDT</span>
                            </div>
                        </div>
                    </div>

                    <Link href="/#planos" className="block text-center text-[10px] font-bold tracking-widest text-white/20 hover:text-blue-400 transition-colors uppercase">
                        ← Ver Outras Opções
                    </Link>

                </aside>

            </div>
        </main>
    );
}