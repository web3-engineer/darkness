"use client";

const channels = [
  {
    title: "Arquivos Vazados",
    category: "Leaks",
    desc: "Documentos confidenciais, relatórios internos e arquivos nunca divulgados.",
  },
  {
    title: "Fóruns Privados",
    category: "Comunidade",
    desc: "Discussões ocultas sobre tecnologia, poder e informação restrita.",
  },
  {
    title: "Inteligência Global",
    category: "Geopolítica",
    desc: "Movimentações estratégicas, conflitos silenciosos e decisões ocultas.",
  },
  {
    title: "Tecnologia Oculta",
    category: "Tech",
    desc: "Inovações não divulgadas e engenharia fora do alcance público.",
  },
  {
    title: "Economia Paralela",
    category: "Financeiro",
    desc: "Sistemas financeiros alternativos e mercados invisíveis.",
  },
  {
    title: "Conspirações Reais",
    category: "Teorias",
    desc: "Narrativas que conectam eventos globais e estruturas de poder.",
  },
  {
    title: "Relatos Anômalos",
    category: "Fenômenos",
    desc: "Experiências documentadas envolvendo eventos fora do padrão.",
  },
  {
    title: "Arquivos Militares",
    category: "Militar",
    desc: "Relatórios táticos, operações e registros classificados.",
  },
  {
    title: "Consciência Expandida",
    category: "Espiritualidade",
    desc: "Explorações sobre mente, percepção e estados elevados.",
  },
  {
    title: "Rede Invisível",
    category: "Infraestrutura",
    desc: "Protocolos, sistemas e redes fora da internet convencional.",
  },
  {
    title: "História Oculta",
    category: "História",
    desc: "Eventos apagados, versões alternativas e narrativas esquecidas.",
  },
  {
    title: "Sinais Interceptados",
    category: "Frequências",
    desc: "Transmissões não autorizadas e comunicações capturadas.",
  },
];

export default function Canais() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl md:text-3xl font-light glitch" data-text="Canais">
          Canais
        </h2>

        <p className="text-white/60">
          Acesso a fluxos de informação segmentados da rede profunda.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {channels.map((channel, i) => (
          <div
            key={i}
            className="
              glass p-5 rounded-2xl
              relative overflow-hidden
              transition-all duration-300
              hover:scale-[1.02]
              cursor-pointer
            "
          >

            {/* categoria */}
            <p className="text-xs text-white/40 mb-2 tracking-widest">
              {channel.category}
            </p>

            {/* título */}
            <h3
              className="text-lg mb-2 glitch"
              data-text={channel.title}
            >
              {channel.title}
            </h3>

            {/* descrição */}
            <p className="text-sm text-white/60">
              {channel.desc}
            </p>

            {/* overlay bloqueado */}
            <div
              className="
                absolute inset-0
                flex items-center justify-center
                bg-black/50 backdrop-blur-[2px]
              "
            >
              <span className="text-xs tracking-widest opacity-70 animate-flicker">
                🔒 BLOQUEADO
              </span>
            </div>

          </div>
        ))}

      </div>

      {/* FOOTER INFO */}
      <div className="text-center text-xs text-white/40">
        novos canais são adicionados continuamente pelos agentes
      </div>

    </div>
  );
}