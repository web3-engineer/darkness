"use client";

import { useState } from "react";
// Importamos os hooks de autenticação
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "@/src/components/navbar";
import Background from "@/src/components/background";
import GlassPanel from "@/src/components/GlassPanel";
import GlitchHero from "@/src/components/GlitchHero";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("Como funciona");
  
  // Hook que verifica se o usuário está logado
  const { data: session, status } = useSession();

  const handleOpen = (section: string) => {
    setContent(section || "Como funciona");
    setOpen(true);
  };

  return (
    <main className="min-h-screen text-white relative">
      <Background />

      <Navbar onNavigate={handleOpen} />

      {/* Z-index garante que fique acima do background */}
      <section className="h-screen flex flex-col items-center justify-center space-y-8 relative z-10">
        <GlitchHero />
        
        {/* ========================= */}
        {/* 🔐 SISTEMA DE LOGIN GOOGLE */}
        {/* ========================= */}
        <div className="flex flex-col items-center justify-center glass p-5 rounded-2xl border border-white/10 min-w-[320px] shadow-2xl transition-all">
          {status === "loading" ? (
            <span className="text-blue-400 font-mono text-xs animate-pulse tracking-widest">
              VERIFICANDO_CREDENCIAS...
            </span>
          ) : session ? (
            // ESTADO: LOGADO
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex items-center gap-4 bg-black/40 p-3 rounded-xl w-full border border-white/5">
                {session.user?.image && (
                  <img 
                    src={session.user.image} 
                    alt="Avatar" 
                    className="w-10 h-10 rounded-full border border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                  />
                )}
                <div className="text-left flex-1">
                  <p className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">Acesso Concedido</p>
                  <p className="text-sm font-bold text-white line-clamp-1">{session.user?.name}</p>
                </div>
              </div>
              <button 
                onClick={() => signOut()}
                className="text-[10px] text-white/40 hover:text-red-400 font-mono tracking-widest transition-colors uppercase w-full text-center"
              >
                [ Encerrar Sessão ]
              </button>
            </div>
          ) : (
            // ESTADO: DESLOGADO
            <button
              onClick={() => signIn("google")}
              className="flex items-center justify-center gap-3 w-full px-6 py-3.5 bg-white text-black font-bold text-sm rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Entrar com o Google
            </button>
          )}
        </div>
      </section>

      <GlassPanel
        isOpen={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        content={content}
      />
    </main>
  );
}