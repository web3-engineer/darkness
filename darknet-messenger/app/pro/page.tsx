
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

export default function ProPage() {
    const [selectedThemes, setSelectedThemes] = useState<string[]>([]);

    const toggleTheme = (theme: string) => {
        if (selectedThemes.includes(theme)) {
            setSelectedThemes(selectedThemes.filter(t => t !== theme));
        } else if (selectedThemes.length < 13) { // Limite do plano Pro
            setSelectedThemes([...selectedThemes, theme]);
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            
            <div className="mb-16 reveal-on-scroll text-center lg:text-left">
                <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-4 text-emerald-400 uppercase italic">
                    DarkNet <span className="text-white">Pro</span>
                </h1>
                <p className="text-emerald-400/50 max-w-3xl text-xl font-mono">
                    DOMÍNIO TOTAL. 13 CANAIS DE IA OPERANDO NA DEEP WEB 24/7.
                </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] gap-12">
                <section className="space-y-8 reveal-on-scroll">
                    <div className="glass p-8 rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/5">
                        <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
                            <h2 className="text-xl font-mono text-emerald-400">CONFIGURAR SCANNER (13 TEMAS)</h2>
                            <span className="text-sm font-mono text-emerald-400">
                                [{selectedThemes.length}/13]
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {darkThemes.map((theme, i) => (
                                <button
                                    key={i}
                                    onClick={() => toggleTheme(theme)}
                                    className={`
                                        text-left px-4 py-3 rounded-lg text-xs font-mono transition-all border
                                        ${selectedThemes.includes(theme) 
                                            ? "bg-emerald-500 text-black border-emerald-400" 
                                            : "bg-black/40 border-white/5 text-emerald-500/40 hover:border-emerald-500/40"}
                                    `}
                                >
                                    &gt; {theme.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <aside className="space-y-6 reveal-on-scroll delay-200">
                    <div className="glass p-6 rounded-3xl border border-emerald-500/30 space-y-6">
                        <h3 className="text-lg font-mono text-emerald-400 border-b border-emerald-500/20 pb-2">PRO_ACCESS_LOG</h3>
                        <ul className="space-y-4">
                            {[
                                "13 canais de IA personalizados",
                                "Podcasts gerados automaticamente",
                                "Documentários e arquivos sigilosos",
                                "Cursos de cibersegurança e anonimato",
                                "Suporte direto via Signal/WhatsApp"
                            ].map((text, i) => (
                                <li key={i} className="flex gap-3 text-xs font-mono text-white/60">
                                    <span className="text-emerald-400">0x0{i+1}</span> {text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass p-8 rounded-[2rem] border-2 border-emerald-500 flex flex-col items-center text-center shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                        <div className="text-5xl font-mono text-emerald-400 mb-6 font-bold">$333,00</div>
                        
                        <button 
                            disabled={selectedThemes.length < 13}
                            className={`
                                w-full py-5 rounded-xl font-mono font-bold text-lg uppercase transition-all
                                ${selectedThemes.length === 13 
                                    ? "bg-emerald-500 text-black hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]" 
                                    : "bg-white/5 text-white/20 cursor-not-allowed"}
                            `}
                        >
                            {selectedThemes.length === 13 ? "INITIALIZE_SUBSCRIPTION" : "SELECT_ALL_THEMES"}
                        </button>
                    </div>

                    <Link href="/#planos" className="block text-center font-mono text-[10px] text-emerald-500/40 hover:text-emerald-400 transition">
                        &lt; RETURN_TO_ROOT
                    </Link>
                </aside>
            </div>
        </main>
    );
}