"use client";

export default function ComoFunciona() {
    return (
        <div className="w-full px-6 md:px-12">

            {/* GRID */}
            <div className="grid md:grid-cols-[1fr_360px] gap-20">

                {/* ========================= */}
                {/* 🧠 ESQUERDA */}
                {/* ========================= */}
                <div className="space-y-12">

                    {/* HEADER */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-light">
                            Como funciona
                        </h2>

                        <p className="text-white/60 mt-2">
                            Um sistema autônomo que acessa camadas profundas da internet
                            e entrega informações de forma segura diretamente para você.
                        </p>
                    </div>

                    {/* CARDS */}
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
                            text2="Você recebe tudo via Instagram, WhatsApp ou Telegram."
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
                {/* 💳 DIREITA */}
                {/* ========================= */}
                <div className="pt-[72px] space-y-6">

                    {/* 🔥 ESSA LINHA É A CHAVE */}
                    {/* empurra os planos pra alinhar com os cards */}

                    <PlanCard
                        title="DarkNet Lite"
                        price="$33,00"
                        features={[
                            "3 canais personalizados",
                            "Membros do YouTube",
                        ]}
                    />

                    <PlanCard
                        title="DarkNet Premium"
                        price="$77,00"
                        highlight
                        features={[
                            "7 canais personalizados",
                            "Membros do YouTube",
                        ]}
                    />

                    <PlanCard
                        title="DarkNet Pro"
                        price="$333,00"
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
                glass p-6 rounded-2xl space-y-3
                ${border ? "border border-white/10" : ""}
            `}
        >
            <h3 className="text-lg">{title}</h3>

            <p className="text-white/70 text-sm leading-relaxed">
                {text1}
            </p>

            <p className="text-white/60 text-sm leading-relaxed">
                {text2}
            </p>
        </div>
    );
}

/* ========================= */
/* 💳 CARD DE PLANO */
/* ========================= */

function PlanCard({ title, price, features, highlight }: any) {
    return (
        <div
            className={`
                glass p-5 rounded-3xl flex flex-col justify-between
                w-[300px] h-[300px]
                transition-all duration-300
                ${highlight ? "scale-[1.05] border-white/20" : "opacity-90"}
            `}
        >
            <div>
                <h3 className="text-lg mb-1">{title}</h3>
                <p className="text-xl mb-3">{price}</p>

                <ul className="text-xs text-white/70 space-y-1">
                    {features.map((f: string, i: number) => (
                        <li key={i}>• {f}</li>
                    ))}
                </ul>
            </div>

            <button className="mt-4 glass px-3 py-2 rounded-xl text-xs hover:scale-[1.02] transition">
                Assinar
            </button>

            <p className="text-[10px] text-white/40 mt-2 leading-relaxed">
                Primeira ativação em até 72h após a criptografia inicial do agente.
            </p>
        </div>
    );
}