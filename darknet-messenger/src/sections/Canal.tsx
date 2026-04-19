"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Play, 
  Lock, 
  ChevronLeft, 
  Database, 
  ShieldCheck, 
  Clock,
  FileText
} from "lucide-react";

// MOCK DOS CAPÍTULOS
const CHAPTERS = [
  {
    id: 1,
    title: "O Berço dos Mistérios: A Antiguidade",
    desc: "A origem das sociedades secretas e os cultos iniciáticos do Egito e Grécia Antiga.",
    duration: "14:20",
    locked: false,
    href: "/canal/video1", // O link para a página do vídeo
  },
  {
    id: 2,
    title: "A Espada e o Segredo: A Idade Média",
    desc: "A transição da guarda espiritual para o poder financeiro militar: Templários e Assassinos.",
    duration: "22:15",
    locked: true,
  },
  {
    id: 3,
    title: "Razão Oculta: Iluminismo e Modernidade",
    desc: "A Ordem dos Iluminados e a herança maçônica no alvorecer da política moderna.",
    duration: "18:45",
    locked: true,
  },
  {
    id: 4,
    title: "O Velo Serpentine e a Contemporaneidade",
    desc: "Redes de influência hiperconectadas, Skull and Bones e o tecnopesimismo digital.",
    duration: "25:00",
    locked: true,
  },
];

export default function ChannelOverviewPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 pb-20 relative overflow-hidden">
      
      {/* ========================= */}
      {/* BACKGROUND & GLOW EFFECTS */}
      {/* ========================= */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* ========================= */}
      {/* NAVBAR SIMPLES (BREADCRUMB)*/}
      {/* ========================= */}
      <nav className="w-full p-6 lg:px-12 flex items-center justify-between relative z-10">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <div className="p-2 bg-white/5 border border-white/10 rounded-full group-hover:bg-white/10 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest font-mono">Voltar ao Terminal</span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">Conexão Segura</span>
        </div>
      </nav>

      {/* ========================= */}
      {/* CONTEÚDO PRINCIPAL        */}
      {/* ========================= */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 mt-6">
        
        {/* HERO SECTION (CAPA DO DOSSIÊ) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full rounded-[2.5rem] bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] p-8 md:p-12 relative overflow-hidden mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative z-10">
            {/* Imagem/Cover Abstrata do Dossiê */}
            <div className="w-full md:w-1/3 aspect-[3/4] bg-black rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl shrink-0 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
                alt="Capa Dossiê" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <ShieldCheck className="w-8 h-8 text-blue-400 mb-2" />
                <p className="text-[10px] font-mono text-blue-300 font-bold tracking-widest uppercase">CLASSIFICADO</p>
              </div>
            </div>

            {/* Informações do Canal */}
            <div className="flex flex-col justify-center flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono font-bold tracking-widest uppercase rounded-md">
                  Dossiê Histórico
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  <Database className="w-3 h-3" /> 4 Capítulos
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-4">
                O Velo das Sombras: <br/> Uma Genealogia do Poder Oculto
              </h1>
              
              <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-8 max-w-2xl">
                A história oficial é uma mentira sobre a qual se entrou em acordo. Explore as raízes 
                das sociedades secretas, desde os cultos iniciáticos da antiguidade até os algoritmos 
                de manipulação contemporâneos. Uma jornada documental para além da superfície da rede.
              </p>

              <div className="flex items-center gap-4">
                {/* CORREÇÃO 1 AQUI: Usando o fallback || "#" */}
                <Link href={CHAPTERS[0].href || "#"}>
                  <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-blue-400 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:scale-95">
                    <Play className="w-4 h-4 fill-black" />
                    Iniciar Descriptografia
                  </button>
                </Link>
                
                <div className="hidden sm:flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-bold">Progresso</span>
                  <span className="text-sm text-white font-bold">0% Concluído</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================= */}
        {/* LISTA DE CAPÍTULOS        */}
        {/* ========================= */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8 px-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">Índice de Arquivos</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-900/50 to-transparent ml-4" />
          </div>

          <div className="grid gap-4">
            {CHAPTERS.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  chapter.locked 
                    ? "bg-slate-900/20 border-white/5 opacity-60" 
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-500/50 cursor-pointer group"
                }`}
              >
                {/* O envoltório para navegação (se não estiver trancado) */}
                {chapter.locked ? (
                  <div className="p-5 md:p-6 flex items-center gap-6">
                    <ChapterContent chapter={chapter} />
                  </div>
                ) : (
                  /* CORREÇÃO 2 AQUI: Usando o fallback || "#" */
                  <Link href={chapter.href || "#"} className="p-5 md:p-6 flex items-center gap-6">
                    <ChapterContent chapter={chapter} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}

// Componente auxiliar para renderizar o interior do card do capítulo
function ChapterContent({ chapter }: { chapter: any }) {
  return (
    <>
      {/* Indicador Numérico / Ícone */}
      <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 border shadow-inner ${
        chapter.locked 
          ? "bg-black/50 border-white/5 text-slate-600" 
          : "bg-blue-500/10 border-blue-500/30 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors"
      }`}>
        {chapter.locked ? (
          <Lock className="w-5 h-5" />
        ) : (
          <span className="font-bold text-lg font-mono">0{chapter.id}</span>
        )}
      </div>

      {/* Textos */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className={`text-base md:text-lg font-bold truncate ${chapter.locked ? "text-slate-400" : "text-white"}`}>
            {chapter.title}
          </h3>
          {/* Status Desktop */}
          <span className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-500">
            <Clock className="w-3 h-3" /> {chapter.duration}
          </span>
        </div>
        <p className={`text-xs md:text-sm line-clamp-2 leading-relaxed ${chapter.locked ? "text-slate-600" : "text-slate-400"}`}>
          {chapter.desc}
        </p>
      </div>

      {/* Ação Lateral (Botão Play) */}
      {!chapter.locked && (
        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-blue-500/20 bg-blue-500/5 group-hover:bg-white group-hover:border-white transition-all shrink-0">
          <Play className="w-4 h-4 text-blue-400 group-hover:text-black group-hover:fill-black ml-1" />
        </div>
      )}
    </>
  );
}