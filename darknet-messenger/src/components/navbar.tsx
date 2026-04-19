"use client";

type Props = {
  onNavigate: (section: string) => void;
};

export default function Navbar({ onNavigate }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center mt-4 z-50">
      <nav className="glass px-6 py-3 rounded-2xl flex items-center gap-8 shadow-lg">

        <span className="relative w-10 h-6 flex items-center shrink-0">
          <img src="/images/logo.png" className="absolute -left-9 h-20 max-w-none" />
        </span>

        <div className="flex gap-6 text-sm text-white/80">

          {/* ✅ prioridade correta */}
          <button onClick={() => onNavigate("Como Funciona")} className="hover:text-white">
            Como Funciona
          </button>

          <button onClick={() => onNavigate("Canal Dark")} className="hover:text-white">
            Canal Dark
          </button>

          <button onClick={() => onNavigate("Frequências")} className="hover:text-white">
            Frequências
          </button>

        </div>
      </nav>
    </div>
  );
}