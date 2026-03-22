"use client";

import { useState } from "react";
import Navbar from "@/src/components/navbar";
import Background from "@/src/components/background";
import GlassPanel from "@/src/components/GlassPanel";
import GlitchHero from "@/src/components/GlitchHero";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("Como funciona");

  const handleOpen = (section: string) => {
    setContent(section || "Como funciona");
    setOpen(true);
  };

  return (
    <main className="min-h-screen text-white">
      <Background />

      <Navbar onNavigate={handleOpen} />

      <section className="h-screen flex items-center justify-center">
        <GlitchHero />
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