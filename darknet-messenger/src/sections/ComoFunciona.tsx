"use client";

import { useState } from "react";

/* ========================= */
/* 🧠 FLUXO ORIGINAL (SEU) */
/* ========================= */
const nodes = [
    { id: 0, title: "Você", description: "Você acessa os dados já processados." },
    { id: 1, title: "Plataforma", description: "Organiza e envia requisições." },
    { id: 2, title: "Agentes", description: "Descem até a dark web." },
    { id: 3, title: "Dark Web", description: "Fonte dos dados." },
    { id: 4, title: "Validação (ZKP)", description: "Validação criptográfica." },
    { id: 5, title: "Plataforma", description: "Processa e entrega os dados." },
];

/* ========================= */
/* 🧪 MOCK DATA */
/* ========================= */
const mockTopics = [
    "cibersegurança",
    "deep web",
    "dark web",
    "criptografia",
    "anonimato",
    "agenda 2030",
    "aliens",
    "mk ultra",
    "controle mental",
    "consciência expandida",
    "matrix",
    "tecnologia secreta",
];

export default function ComoFunciona() {
    const [active, setActive] = useState<number | null>(null);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="space-y-20">

            {/* HEADER */}
            <div>
                <h2 className="text-2xl md:text-3xl font-light">
                    Fluxo Contínuo
                </h2>
                <p className="text-white/60">
                    Um ciclo onde agentes descem à rede e retornam com dados para você.
                </p>
            </div>

            {/* FLUXO */}
            <div className="flex flex-col items-center gap-8">

                <div className="flex items-center gap-4">
                    <Node node={nodes[0]} active={active} setActive={setActive} />
                    <Arrow>↔</Arrow>
                    <Node node={nodes[1]} active={active} setActive={setActive} />
                    <Arrow>↔</Arrow>
                    <Node node={nodes[2]} active={active} setActive={setActive} />
                </div>

                <Arrow>↓</Arrow>

                <div className="flex items-center gap-4">
                    <Node node={nodes[3]} active={active} setActive={setActive} />
                    <Arrow>↔</Arrow>
                    <Node node={nodes[4]} active={active} setActive={setActive} />
                    <Arrow>↔</Arrow>
                    <Node node={nodes[5]} active={active} setActive={setActive} />
                </div>

                <Arrow>↑</Arrow>
            </div>

            {/* DETALHE */}
            {active !== null && (
                <div className="glass p-6 rounded-2xl max-w-2xl mx-auto animate-fadeIn">
                    <h3 className="text-lg mb-2">
                        {nodes[active].title}
                    </h3>
                    <p className="text-white/70 text-sm">
                        {nodes[active].description}
                    </p>
                </div>
            )}

            {/* PLANOS */}
            <div className="space-y-10">

                <div>
                    <h2 className="text-2xl md:text-3xl font-light">
                        Tipos de Conta
                    </h2>
                    <p className="text-white/60">
                        Escolha seu nível de acesso e personalize seus canais.
                    </p>
                </div>

                {/* STATUS */}
                <div className="flex justify-center">
                    <div className="glass px-6 py-4 rounded-2xl max-w-xl w-full text-center border border-white/10">

                        <p className="text-sm text-white/50 mb-2 tracking-widest">
                            ACESSO BLOQUEADO
                        </p>

                        <h3 className="text-lg md:text-xl mb-2">
                            Pagamentos liberados em <span className="text-white">23/03/2026</span>
                        </h3>

                        <p className="text-white/60 text-sm">
                            O sistema será ativado em 26/03/2026.
                            Os agentes já estão em fase de preparação.
                        </p>

                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    <Card
                        title="DarkNet Lite"
                        price="$33,00"
                        features={[
                            "3 canais personalizados",
                            "Membros do YouTube",
                        ]}
                        onClick={() => setOpenModal(true)}
                    />

                    <Card
                        title="DarkNet Premium"
                        price="$77,00"
                        highlight
                        features={[
                            "7 canais personalizados",
                            "Membros do YouTube",
                        ]}
                        onClick={() => setOpenModal(true)}
                    />

                    <Card
                        title="DarkNet Pro"
                        price="$333,00"
                        features={[
                            "13 canais personalizados",
                            "Podcasts automáticos",
                            "Documentários exclusivos",
                            "Cursos de cibersegurança",
                        ]}
                        onClick={() => setOpenModal(true)}
                    />

                </div>
            </div>

            {/* MODAL */}
            {openModal && <Modal onClose={() => setOpenModal(false)} />}

        </div>
    );
}

/* COMPONENTES */

function Node({ node, active, setActive }: any) {
    return (
        <div
            onClick={() => setActive(node.id)}
            className={`
                glass px-4 py-3 rounded-2xl min-w-[150px] text-center
                cursor-pointer transition-all duration-300
                ${active === node.id ? "scale-105" : "opacity-80"}
            `}
        >
            <span className="text-sm">{node.title}</span>
        </div>
    );
}

function Arrow({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-white/30 text-xl select-none">
            {children}
        </div>
    );
}

function Card({ title, price, features, highlight, onClick }: any) {
    return (
        <div
            className={`
                glass p-6 rounded-3xl flex flex-col justify-between min-h-[320px]
                transition-all duration-300 cursor-pointer
                ${highlight ? "scale-105 border-white/20" : "opacity-90"}
            `}
            onClick={onClick}
        >
            <div>
                <h3 className="text-xl mb-2">{title}</h3>
                <p className="text-2xl mb-4">{price}</p>

                <ul className="text-sm text-white/70 space-y-2">
                    {features.map((f: string, i: number) => (
                        <li key={i}>• {f}</li>
                    ))}
                </ul>
            </div>

            <button
                className="
                    mt-6 glass px-4 py-2 rounded-xl text-sm
                    flex items-center justify-center gap-2
                    opacity-60 cursor-not-allowed
                "
            >
                🔒 Bloqueado
            </button>
        </div>
    );
}

function Modal({ onClose }: any) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<string[]>([]);

    const handleSearch = (value: string) => {
        setQuery(value);

        if (!value) {
            setResults([]);
            return;
        }

        const filtered = mockTopics.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );

        setResults(filtered);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative glass p-6 rounded-2xl w-[90%] max-w-md border border-blue-500/40">

                <h3 className="text-lg mb-4">
                    Escolha seus canais
                </h3>

                <input
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Digite temas ou canais..."
                    className="w-full px-4 py-2 rounded-xl bg-transparent border border-blue-500/50 outline-none text-white"
                />

                <div className="mt-3 space-y-2 max-h-40 overflow-y-auto">
                    {results.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                setQuery(item);
                                setResults([]);
                            }}
                            className="glass px-3 py-2 rounded-lg text-sm cursor-pointer hover:scale-[1.02]"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                <p className="text-xs text-white/40 mt-2">
                    Sugestões simuladas (modo offline).
                </p>

                <button
                    onClick={onClose}
                    className="mt-4 text-sm text-white/70 hover:text-white"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
}