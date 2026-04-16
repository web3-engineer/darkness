"use client";

import { useState } from "react";
import Link from "next/link";

const darkThemes = [
    "Red Rooms: Verdade ou Mito?", "Assassinos de Aluguel (Hitmen)", "Arquivos Ocultos do Vaticano",
    "Experimentos Médicos Ilegais", "Mercado Negro de Órgãos", "Fóruns de Elite Hacker",
    "Área 51: Documentos Vazados", "Antártida: O que escondem lá?", "Relíquias e Arte Proibida",
    "Manuais de Sobrevivência Extrema", "Arquivos Desclassificados da KGB", "Ativismo Radical Anon",
    "Mistério das Caixas da Deep Web", "Ocultismo e Seitas Digitais", "Venda de Identidades Reais",
    "Software de Vigilância Estatal", "Relatos de Ex-Agentes CIA", "Plantas de Prisões de Segurança",
    "Engenharia Social Aplicada", "Rádios Fantasmas (Numbers Stations)", "O Caso Voo MH370",
    "Segredos da Indústria Farmacêutica", "Energia Livre e Tesla", "Bancos de Dados Governamentais",
    "Redes Sociais Sem Censura", "Mistérios Lunares Ocultos", "Criptozoologia: Fotos Reais?",
    "Protocolos de Guerra Cibernética", "Controle Mental (MK Ultra)", "Deep Web de 1990"
];

export default function PremiumPage() {
    const [selectedThemes, setSelectedThemes] = useState<string[]>([]);

    const toggleTheme = (theme: string) => {
        if (selectedThemes.includes(theme)) {
            setSelectedThemes(selectedThemes.filter(t => t !== theme));
        } else if (selectedThemes.length < 7) { // Limite do plano Premium
            setSelectedThemes([...selectedThemes, theme]);
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            
            <div className="mb-16 reveal-on-scroll">
                <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
                    Plano <span className="text-purple-400">Premium</span>
                </h1>
                <p className="text-white/50 max-w-2xl text-lg">
                    Expanda os seus horizontes. Monitorização avançada de 7 canais de informação.
                </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] gap-12">
                <section className="space-y-8 reveal-on-scroll">
                    <div className="glass p-8 rounded-[2.5rem] border border-purple-500/10">
                        <div className="flex justify-between items-end mb-8">
                            <h2 className="text-xl font-medium">Escolha 7 temas de monitorização</h2>
                            <span className="text-xs font-mono text-purple-400">
                                {selectedThemes.length} / 7 SELECIONADOS
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {darkThemes.map((theme, i) => (
                                <button
                                    key={i}
                                    onClick={() => toggleTheme(theme)}
                                    className={`
                                        text-left px-4 py-3 rounded-xl text-sm transition-all border
                                        ${selectedThemes.includes(theme) 
                                            ? "bg-purple-500/20 border-purple-400/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.2)]" 
                                            : "bg-white/5 border-white/5 text-white/40 hover:bg-white/10"}
                                    `}
                                >
                                    {theme}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <aside className="space-y-6 reveal-on-scroll delay-200">
                    <div className="glass p-6 rounded-3xl border border-purple-500/20 space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-2xl">
                            💎
                        </div>
                        <h3 className="text-lg font-medium text-purple-400">Vantagens Premium</h3>
                        <div className="space-y-3 pt-2">
                            <div className="flex gap-3 items-start">
                                <span className="text-purple-400">✔</span>
                                <p className="text-xs text-white/70">7 Canais personalizados em tempo real.</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <span className="text-purple-400">✔</span>
                                <p className="text-xs text-white/70">Acesso exclusivo a membros do YouTube.</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <span className="text-purple-400">✔</span>
                                <p className="text-xs text-white/70">Entrega prioritária via WhatsApp e Site.</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-[2rem] border border-purple-500/30 flex flex-col items-center text-center bg-purple-500/5">
                        <span className="text-[10px] font-mono tracking-widest text-purple-400 mb-2 uppercase font-bold">O Mais Popular</span>
                        <div className="text-4xl font-light mb-6">$77,00</div>
                        
                        <button 
                            disabled={selectedThemes.length < 7}
                            className={`
                                w-full py-4 rounded-2xl font-medium transition-all
                                ${selectedThemes.length === 7 
                                    ? "bg-purple-500 text-white hover:scale-[1.02] shadow-[0_0_30px_rgba(168,85,247,0.4)]" 
                                    : "bg-white/5 text-white/20 cursor-not-allowed"}
                            `}
                        >
                            {selectedThemes.length === 7 ? "Ativar Plano Premium" : "Faltam escolher temas"}
                        </button>
                    </div>

                    <Link href="/#planos" className="block text-center text-xs text-white/40 hover:text-white transition">
                        ← Ver outros planos
                    </Link>
                </aside>
            </div>
        </main>
    );
}