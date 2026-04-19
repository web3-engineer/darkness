"use client";

import {
  Play,
  ShieldAlert,
  History,
  Video
} from "lucide-react";

export default function DeepIntelligenceTerminal() {
  // O link agora é inserido diretamente via código
  const videoEmbedId = "PZcK_WlXn4o"; // Substitua este ID pelo código do seu vídeo do YouTube

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8 space-y-12 font-sans selection:bg-blue-500/30">

      {/* ========================= */}
      {/* ⚠️ AVISO LEGAL (DISCLAIMER) */}
      {/* ========================= */}
      <div className="w-full bg-red-950/40 border-2 border-red-800 rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-start md:items-center relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-500 animate-pulse"></div>
        <ShieldAlert className="text-red-500 w-10 h-10 shrink-0" />
        <div>
          <h4 className="text-red-400 font-mono text-base font-bold tracking-widest uppercase mb-1">Aviso Legal / Disclaimer</h4>
          <p className="text-white text-sm font-mono leading-relaxed opacity-80">
            O conteúdo apresentado nesta plataforma é estritamente ficcional e voltado para exploração de narrativas históricas e especulativas. Não reflete notícias reais ou aconselhamento governamental.
          </p>
        </div>
      </div>

      {/* ================================== */}
      {/* MEGA PREVIEW: NARRATIVA HISTÓRICA */}
      {/* ================================== */}
      <div className="pt-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-mono text-sm font-bold tracking-[0.3em] uppercase">Documentário de Inteligência</span>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
        </div>

        <article className="bg-slate-900/40 p-6 md:p-16 rounded-[3rem] border border-blue-500/20 shadow-2xl relative overflow-hidden">
          {/* Metadata */}
          <div className="absolute top-8 right-8 text-right hidden md:block">
            <p className="font-mono text-[10px] text-blue-500/50">ID: ARCH-772-B</p>
            <p className="font-mono text-[10px] text-blue-500/50">CLASSE: SECRETO</p>
          </div>

          <header className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-mono font-bold tracking-widest uppercase rounded-full">
              História Oculta / Análise Especializada
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight tracking-tight">
              O Velo das Sombras: Uma Genealogia do Poder Oculto
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-light italic max-w-2xl mx-auto">
              "A história oficial é uma mentira sobre a qual se entrou em acordo."
            </p>
          </header>

          {/* ================================== */}
          {/* FRAMEWORK YOUTUBE (INTEGRADO À NARRATIVA) */}
          {/* ================================== */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Video className="text-blue-400 w-6 h-6" />
              <h3 className="text-xl font-bold tracking-tight text-white font-serif">Registos Visuais Recuperados</h3>
            </div>

            <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-blue-900/50 shadow-[0_0_40px_rgba(59,130,246,0.15)] relative group">
              {videoEmbedId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoEmbedId}?autoplay=0&rel=0&modestbranding=1`}
                  title="Intelligence Feed"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                  <Play className="w-16 h-16 text-slate-800 animate-pulse" />
                  <p className="text-slate-500 font-mono text-xs tracking-widest">AGUARDANDO FEED DE VÍDEO...</p>
                </div>
              )}
            </div>

            <div className="mt-4 flex justify-between items-center px-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Feed Otimizado</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">Encriptação: AES-256-V2</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12 text-slate-300 text-base md:text-lg leading-relaxed">

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                I. O Berço dos Mistérios: A Antiguidade
              </h2>
              <p>
                As sociedades secretas não surgiram por acaso, mas como guardiãs de um conhecimento que era considerado sagrado ou perigoso demais para o profano. No <strong>Egito Antigo</strong>, os cultos de Osíris e Ísis operavam como as primeiras estruturas iniciáticas documentadas. Não eram organizações políticas no sentido moderno, mas sim corporações sacerdotais que detinham o monopólio da escrita, da astronomia e da medicina.
              </p>
              <p>
                Na <strong>Grécia Antiga</strong>, essa estrutura evoluiu para os <em>Mistérios de Elêusis</em>. Fato histórico comprovado, esses rituais eram obrigatórios para a elite intelectual, incluindo Platão e Sócrates. Academicamente, interpreta-se que essas sociedades funcionavam como um mecanismo de coesão social para as elites, garantindo que o conhecimento técnico e filosófico fosse passado apenas para aqueles que demonstrassem lealdade ao sistema.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                II. A Espada e o Segredo: A Idade Média
              </h2>
              <p>
                Com a queda de Roma, o segredo migrou para as ordens militares. Os <strong>Pobres Cavaleiros de Cristo</strong>, conhecidos como <em>Templários</em>, representam a transição da guarda espiritual para o poder financeiro. É um fato histórico que eles criaram o primeiro sistema bancário transnacional da Europa. Contudo, é no campo das interpretações que o mistério se aprofunda: após sua dissolução brutal em 1307 pelo rei Filipe IV, muitos historiadores especulam que a estrutura de inteligência da ordem não desapareceu, mas infiltrou-se em guildas de pedreiros livres.
              </p>
              <p>
                Simultaneamente, no Oriente Médio, a ordem dos <strong>Hashshashin</strong> (Assassinos) demonstrava como uma sociedade secreta poderia exercer influência geopolítica através do terror seletivo e da infiltração em cortes inimigas.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                III. Razão Oculta: Iluminismo e Modernidade
              </h2>
              <p>
                A <strong>Maçonaria Moderna</strong>, formalizada no século XVIII, herdou o simbolismo das antigas guildas para promover os ideais de liberdade e razão. No entanto, em 1776, Adam Weishaupt fundou na Baviera a <strong>Ordem dos Iluminados (Illuminati)</strong>. Ao contrário da Maçonaria, que buscava o aperfeiçoamento moral, os Illuminati tinham um objetivo explicitamente subversivo: a abolição das monarquias e das religiões organizadas.
              </p>
              <p>
                É fundamental distinguir: a Ordem foi oficialmente extinta pelas autoridades bávaras em 1785. A teoria de que eles sobreviveram para orquestrar a Revolução Francesa ou, mais tarde, um "Novo Governo Mundial", carece de provas documentais, sendo classificada no campo da <em>meta-história especulativa</em>.
              </p>
            </section>

            <blockquote className="border-l-4 border-blue-600 pl-8 py-4 my-12 bg-blue-900/10 text-slate-100 italic font-serif text-xl rounded-r-2xl">
              "A verdadeira força de uma organização oculta não está em seus rituais, mas na capacidade de seus membros de agirem de forma coordenada sem que o mundo perceba a fonte do comando."
            </blockquote>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                IV. Contemporaneidade e o Velo Serpentine
              </h2>
              <p>
                No século XXI, o sigilo mudou sua natureza. Sociedades contemporâneas como o <strong>Grupo Bilderberg</strong> ou a <strong>Skull and Bones</strong> operam à luz do dia, mas sob regras de silêncio absoluto (Chatham House Rule). O impacto histórico real dessas reuniões é a moldagem de políticas macroeconômicas globais antes mesmo de chegarem aos parlamentos.
              </p>
              <p>
                Mais recentemente, surgiu no submundo digital a menção à <strong>Serpentine Franchise</strong>. Deve-se ser enfático: <u>não há evidências históricas sólidas</u> desta organização em arquivos acadêmicos. Relatos especulativos a descrevem como uma "metasociedade" que utiliza algoritmos de alta frequência e redes de influência corporativa para gerir fluxos migratórios e colapsos financeiros. Trata-se de uma narrativa moderna que funde o medo ancestral de sociedades ocultas com o tecnopesimismo digital.
              </p>
            </section>

            <section className="space-y-6 pt-12 border-t border-slate-800">
              <h2 className="text-2xl font-bold text-white">Reflexão Final: Por que o Oculto Persiste?</h2>
              <p>
                As sociedades secretas continuam surgindo porque atendem a uma necessidade psicológica humana fundamental: a distinção. O sentimento de pertencer a um círculo interno de "eleitos" oferece ordem em um mundo caótico. Politicamente, elas servem como laboratórios de ideias que não poderiam sobreviver ao escrutínio público imediato.
              </p>
              <p>
                Enquanto houver disparidade de poder e conhecimento, o ser humano continuará criando véus. A história das sociedades secretas é, em última análise, a história da busca pela influência absoluta por caminhos que a vista comum não alcança.
              </p>
            </section>
          </div>

          <footer className="mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-1">
              <p className="text-xs font-mono text-blue-500 uppercase font-bold tracking-widest">[ Fim da Transmissão ]</p>
              <p className="text-[10px] text-slate-500 font-mono italic">Acesso liberado para nível de segurança 04.</p>
            </div>
            <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-blue-400 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 active:scale-95">
              Baixar Manifesto Completo (PDF)
            </button>
          </footer>
        </article>
      </div>

      <style jsx global>{`
        .glitch {
          position: relative;
        }
        .glitch:after {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          text-shadow: -1px 0 red;
          top: 0;
          color: white;
          background: #020617;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
          animation: noise-anim 2s infinite linear alternate-reverse;
        }
        @keyframes noise-anim {
          0% { clip: rect(51px, 9999px, 28px, 0); }
          20% { clip: rect(70px, 9999px, 105px, 0); }
          100% { clip: rect(12px, 9999px, 90px, 0); }
        }
      `}</style>
    </div>
  );
}