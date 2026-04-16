"use client";

import Link from "next/link";

export default function ComoFunciona() {
    return (
        <div className="w-full px-6 md:px-12 py-20">

            {/* GRID RESPONSIVO: 1 coluna no mobile, 2 no desktop (lg) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-20">

                {/* ========================= */}
                {/* 🧠 ESQUERDA (CONTEÚDO) */}
                {/* ========================= */}
                <div className="space-y-12">

                    {/* HEADER */}
                    <div className="reveal-on-scroll">
                        <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                            Como funciona
                        </h2>

                        <p className="text-white/60 mt-4 max-w-xl text-lg leading-relaxed">
                            Um sistema autônomo que acessa camadas profundas da internet
                            e entrega informações de forma segura diretamente para você.
                        </p>
                    </div>

                    {/* BLOCOS EXPLICATIVOS */}
                    <div className="space-y-6">
                        <Block
                            title="Agentes autônomos de IA"
                            text1="Agentes operam continuamente na deep e dark web, explorando fóruns e redes privadas."
                            text2="Eles buscam exatamente os temas que você escolhe."
                        />

                        <Block
                            title="Coleta e análise"
                            text1="Os agentes percorrem discussões e arquivos ocultos em tempo real."
                            text2="Apenas sinais relevantes são priorizados."
                        />

                        <Block
                            title="Criptografia avançada"
                            text1="Todos os dados passam por um sistema de criptografia."
                            text2="O conteúdo é transformado em acessos seguros."
                        />

                        <Block
                            title="Entrega direta"
                            text1="Os agentes retornam à superfície."
                            text2="Você recebe tudo via Instagram, WhatsApp ou Site."
                        />

                        <Block
                            title="Segurança total"
                            text1="Você não se expõe nem acessa ambientes perigosos."
                            text2="Os agentes assumem todo o risco."
                            border
                        />
                    </div>
                </div>

                {/* ========================= */}
                {/* 💳 DIREITA (PLANOS) */}
                {/* ========================= */}
                {/* pt-[72px] apenas no desktop para alinhar com o primeiro card da esquerda */}
                <div className="lg:pt-[100px] space-y-6 flex flex-col items-center lg:items-start">

                    <PlanCard
                        title="DarkNet Lite"
                        price="$33,00"
                        href="/lite"
                        features={[
                            "3 canais personalizados",
                            "Membros do YouTube",
                        ]}
                    />

                    <PlanCard
                        title="DarkNet Premium"
                        price="$77,00"
                        href="/premium"
                        highlight
                        features={[
                            "7 canais personalizados",
                            "Membros do YouTube",
                        ]}
                    />

                    <PlanCard
                        title="DarkNet Pro"
                        price="$333,00"
                        href="/pro"
                        features={[
                            "13 canais personalizados",
                            "Podcasts automáticos",
                            "Documentários exclusivos",
                            "Cursos de cibersegurança",
                        ]}
                    />

                </div>

            </div>
        </div>
    );
}

/* ========================= */
/* BLOCO TEXTO */
/* ========================= */

function Block({ title, text1, text2, border }: any) {
    return (
        <div
            className={`
                glass p-6 rounded-3xl space-y-3 transition-all hover:bg-white/5 reveal-on-scroll
                ${border ? "border border-white/10" : "border border-transparent"}
            `}
        >
            <h3 className="text-xl font-medium">{title}</h3>

            <p className="text-white/70 text-sm leading-relaxed">
                {text1}
            </p>

            <p className="text-white/50 text-sm leading-relaxed italic">
                {text2}
            </p>
        </div>
    );
}

/* ========================= */
/* 💳 CARD DE PLANO */
/* ========================= */

function PlanCard({ title, price, features, highlight, href }: any) {
    return (
        <div
            className={`
                glass p-6 rounded-[2rem] flex flex-col justify-between
                w-full max-w-[320px] h-[340px]
                transition-all duration-500 hover:-translate-y-2
                ${highlight ? "border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] scale-105" : "opacity-90 border-white/5"}
                reveal-on-scroll
            `}
        >
            <div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">{title}</h3>
                    {highlight && <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Popular</span>}
                </div>
                <p className="text-2xl font-light mb-4">{price}</p>

                <ul className="text-xs text-white/60 space-y-2">
                    {features.map((f: string, i: number) => (
                        <li key={i} className="flex gap-2">
                            <span className="text-blue-400">/</span> {f}
                        </li>
                    ))}
                </ul>
            </div>

            <Link href={href} className="w-full">
                <button className={`
                    w-full py-3 rounded-2xl text-xs font-medium transition-all
                    ${highlight ? "bg-white text-black hover:bg-gray-200 shadow-lg" : "glass hover:bg-white/10"}
                `}>
                    Saiba mais
                </button>
            </Link>
        </div>
    );
}