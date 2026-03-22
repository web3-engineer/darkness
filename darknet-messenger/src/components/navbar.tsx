"use client";

type Props = {
  onNavigate: (section: string) => void;
};

export default function Navbar({ onNavigate }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center mt-4 z-50">
      <nav className="glass px-6 py-3 rounded-2xl flex items-center gap-8 shadow-lg">

        {/* 🔥 LOGO AQUI */}
        {/* 👉 substitua esse span pela sua logo */}
        <span className="font-semibold text-white">
          {/* EXEMPLO: */}
          {/* <img src="/logo.png" className="h-5" /> */}
           GlassUI
        </span>

        <div className="flex gap-6 text-sm text-white/80">

          {/* ✅ prioridade correta */}
          <button onClick={() => onNavigate("Como funciona")} className="hover:text-white">
            Como funciona
          </button>

          <button onClick={() => onNavigate("Canais da Darknet")} className="hover:text-white">
            Canais da Darknet
          </button>

          <button onClick={() => onNavigate("Frequências Privadas")} className="hover:text-white">
            Frequências Privadas
          </button>

        </div>
      </nav>
    </div>
  );
}