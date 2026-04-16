"use client";

import { useState } from "react";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Extrair categorias únicas para os filtros
  const categories = ["Todos", ...Array.from(new Set(channels.map((c) => c.category)))];

  // Lógica de filtragem
  const filteredChannels = channels.filter((channel) => {
    const matchesSearch = channel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      channel.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Todos" || channel.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-24 md:pt-32">

      {/* ========================= */}
      {/* ⚠️ AVISO LEGAL (DISCLAIMER) */}
      {/* ========================= */}
      <div className="w-full bg-red-950/40 border-2 border-red-800 rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-start md:items-center relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-500 animate-pulse"></div>
        <span className="text-4xl">⚠️</span>
        <div>
          <h4 className="text-red-400 font-mono text-base font-bold tracking-widest uppercase mb-1">Aviso Legal / Disclaimer</h4>
          <p className="text-white text-sm font-mono leading-relaxed">
            O conteúdo apresentado nesta plataforma é estritamente ficcional, especulativo e voltado para o entretenimento e exploração de narrativas alternativas (Cyberpunk/Dark Web). Não reflete notícias reais, factos governamentais ou posicionamentos políticos. Nenhuma informação aqui contida deve ser tratada como verdade absoluta, denúncia jornalística ou aconselhamento de qualquer natureza.
          </p>
        </div>
      </div>

      {/* ========================= */}
      {/* HEADER & FILTROS */}
      {/* ========================= */}
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold glitch text-white" data-text="Terminal de Canais">
            Terminal de Canais
          </h2>
          <p className="text-blue-100 mt-3 font-mono text-base">
            Acesso a fluxos de informação segmentados da rede profunda. Filtre as frequências desejadas abaixo.
          </p>
        </div>

        {/* Barra de Busca e Categorias */}
        <div className="space-y-4 glass p-6 rounded-2xl border-2 border-blue-900/50">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Pesquisar por interceptações, temas ou palavras-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/60 border-2 border-blue-800/50 rounded-xl py-3 pl-12 pr-4 text-base text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors font-mono"
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-bold font-mono transition-all border-2 ${activeCategory === cat
                  ? "bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                  : "bg-black/40 border-blue-900/50 text-blue-100 hover:bg-blue-900/40 hover:border-blue-500"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* GRID DE CANAIS */}
      {/* ========================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredChannels.length > 0 ? (
          filteredChannels.map((channel, i) => (
            <div
              key={i}
              className="bg-slate-900/80 p-5 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] cursor-pointer group border-2 border-blue-900/30 hover:border-blue-500"
            >
              <p className="text-xs text-blue-300 mb-3 tracking-widest font-mono uppercase font-bold">
                // {channel.category}
              </p>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                {channel.title}
              </h3>
              <p className="text-sm text-blue-50 leading-relaxed mb-6 font-medium">
                {channel.desc}
              </p>

              {/* OVERLAY BLOQUEADO */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-3xl mb-2">🔒</span>
                <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-black animate-pulse">
                  Acesso Restrito
                </span>
                <span className="text-[10px] text-white font-bold mt-2 bg-red-900/50 px-3 py-1 rounded">Requer Assinatura</span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-blue-200 font-mono text-base border-2 border-dashed border-blue-800 rounded-2xl bg-blue-950/20">
            NENHUMA INTERCEPTAÇÃO ENCONTRADA PARA ESTES PARÂMETROS.
          </div>
        )}
      </div>

      {/* ========================= */}
      {/* MEGA PREVIEW: CONSPIRAÇÕES */}
      {/* ========================= */}
      <div className="pt-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-blue-500"></div>
          <span className="text-blue-300 font-mono text-sm font-bold tracking-[0.3em] uppercase">Amostra Desclassificada</span>
          <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-blue-500"></div>
        </div>

        <div className="bg-slate-900/90 p-6 md:p-12 rounded-[2.5rem] border-2 border-blue-600/50 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative overflow-hidden">

          {/* Decoração Cyber */}
          <div className="absolute top-0 right-10 w-32 h-32 bg-blue-500/20 blur-[60px] pointer-events-none"></div>
          <div className="absolute top-6 right-6 font-mono text-xs text-blue-300 text-right font-bold">
            FILE_ID: CONSP_883_X<br />
            STATUS: <span className="text-red-400">UNREDACTED</span><br />
            SOURCE: DEEP_NODE_09
          </div>

          <span className="inline-block px-4 py-1.5 bg-blue-900/60 border border-blue-400 text-blue-200 text-xs font-mono font-bold tracking-widest uppercase rounded mb-6 mt-8 md:mt-0">
            Categoria: Teorias / Geopolítica Digital
          </span>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
            A Teoria da Internet Morta e o Protocolo de Silenciamento Sintético
          </h2>

          <div className="space-y-8 text-base md:text-lg text-white font-medium leading-relaxed">
            <p>
              Durante anos, a teoria da "Internet Morta" circulou em fóruns periféricos como um delírio paranoico. A premissa era simples: grande parte da atividade online — postagens, curtidas, debates e tendências — não é mais gerada por humanos, mas por redes de bots automatizados controlados por governos e megacorporações. O que parecia ficção, no entanto, acaba de ser corroborado por um vazamento massivo de dados de servidores centrais localizados no norte da Europa.
            </p>

            <p>
              Os documentos interceptados pelos nossos agentes detalham o <strong className="text-blue-300 font-bold">Projeto Echo-Chamber</strong>. Uma iniciativa focada não apenas em influenciar opiniões, mas em criar "maiorias ilusórias". Quando um utilizador humano expressa uma opinião divergente em redes sociais de superfície, o algoritmo não o apaga diretamente (o que geraria suspeitas de censura). Em vez disso, ele invoca milhares de bots com perfis hiper-realistas para isolar o humano, contradizê-lo ou simplesmente diluir a sua voz num mar de ruído sintético.
            </p>

            <h3 className="text-2xl font-bold text-blue-200 mt-10 mb-4 border-b border-blue-800 pb-2">A Ilusão do Engajamento Orgânico (Diretriz 89-B)</h3>

            <p>
              O arquivo mais perturbador deste lote é a chamada "Diretriz 89-B". Este documento de 2023 atesta que plataformas de grande porte deixaram de vender apenas anúncios; elas agora vendem <strong className="text-red-300">"Pacotes de Consenso Social"</strong>. Partidos políticos e corporações trilionárias compram o sentimento geral de uma nação. Se uma nova lei controversa é aprovada, milhões de bots são ativados simultaneamente para celebrar a decisão, enganando os utilizadores reais, que, por pressão social inconsciente, acabam por aceitar a narrativa imposta.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-10 bg-blue-900/30 text-white italic font-serif text-xl rounded-r-lg">
              "Não precisamos proibir o discurso. Precisamos apenas garantir que a vasta maioria das vozes que os humanos ouvem sejam as nossas máquinas a concordarem umas com as outras. O isolamento cognitivo fará o resto." <br />
              <span className="text-sm font-mono text-blue-300 not-italic mt-4 block font-bold">— Excerto traduzido do Log_Director_77</span>
            </blockquote>

            <h3 className="text-2xl font-bold text-blue-200 mt-10 mb-4 border-b border-blue-800 pb-2">O Paradoxo do CAPTCHA</h3>

            <p>
              Você já se perguntou por que as verificações "Não sou um robô" (CAPTCHAs) ficaram subitamente tão difíceis? Identificar semáforos, passadeiras e bicicletas não serve para manter os bots do lado de fora. Na verdade, os bots que operam a Internet Morta já possuem visão computacional superior à humana.
            </p>
            <p>
              Os logs vazados revelam a verdade sombria: cada vez que você resolve um CAPTCHA, você está fornecendo trabalho não remunerado para treinar as redes neurais militares que alimentam estes mesmos bots. Nós somos os professores das máquinas que estão sendo desenhadas para nos silenciar.
            </p>

            <h3 className="text-2xl font-bold text-blue-200 mt-10 mb-4 border-b border-blue-800 pb-2">A Inversão Cultural</h3>

            <p>
              Mais alarmante ainda é o fenómeno da "Inversão Cultural". Relatórios apontam que conteúdos de entretenimento, influenciadores digitais e a própria linguagem da internet estão a ser orquestrados por IAs. Para que um criador humano ganhe relevância hoje, ele precisa de se comportar como um bot — fazer danças repetitivas, usar os mesmos áudios virais, escrever títulos formatados.
            </p>
            <p>
              Já não são as máquinas que estão a tentar imitar os humanos. <strong className="text-blue-300 font-bold">São os humanos que começaram a imitar as máquinas</strong> para conseguirem sobreviver no algoritmo.
            </p>

            <p>
              Especialistas do underground alertam que já ultrapassámos o ponto de não retorno. Estima-se que mais de 72% do tráfego atual da internet seja tráfego sintético. O livre arbítrio digital tornou-se uma ilusão sustentada por uma infraestrutura de processamento massivo. Você tem a certeza de que as pessoas com quem debate online... são realmente pessoas?
            </p>
          </div>

          {/* Call to Action Final no Artigo */}
          <div className="mt-16 pt-8 border-t-2 border-blue-800 flex flex-col md:flex-row items-center justify-between gap-6 bg-blue-950/40 p-6 rounded-2xl">
            <div className="font-mono text-sm text-blue-200 font-bold">
              [ FIM DO EXCERTO GRATUITO ]<br />
              <span className="text-red-400 mt-1 block">O relatório completo contém 42 páginas e logs de IP de datacenters governamentais.</span>
            </div>

            <button className="w-full md:w-auto px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-blue-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1">
              Desbloquear Relatório Completo
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}