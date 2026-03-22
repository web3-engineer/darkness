"use client";

import { useEffect, useState } from "react";
import ComoFunciona from "@/src/sections/ComoFunciona";
import Canais from "@/src/sections/Canais";
import Frequencias from "@/src/sections/Frequencias";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    content: string;
};

export default function GlassPanel({
    isOpen,
    onClose,
    onOpen,
    content,
}: Props) {
    const [mode, setMode] = useState<"default" | "max" | "min">("default");

    // 🧠 DRAG STATE
    const [dragY, setDragY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);

    // 🧠 SCROLL CONTROL (abrir/fechar/restaurar)
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY > 20 && !isOpen) {
                onOpen();
                return;
            }

            if (e.deltaY > 20 && mode === "min") {
                setMode("default");
                return;
            }

            if (e.deltaY < -20 && isOpen && mode !== "min") {
                onClose();
            }
        };

        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel", handleWheel);
    }, [isOpen, mode]);

    // 🧠 DRAG HANDLERS
    const handleStart = (clientY: number) => {
        setIsDragging(true);
        setStartY(clientY);
    };

    const handleMove = (clientY: number) => {
        if (!isDragging) return;

        const delta = clientY - startY;

        if (delta > 0) {
            setDragY(delta);
        }
    };

    const handleEnd = () => {
        if (!isDragging) return;

        setIsDragging(false);

        // 🔥 SNAP LOGIC (estilo iOS)
        if (dragY > 260) {
            onClose(); // fecha
        } else if (dragY > 140) {
            setMode("min"); // minimiza
        } else {
            setMode("default"); // volta
        }

        setDragY(0);
    };

    // 🧠 render dinâmico
    const renderContent = () => {
        switch (content) {
            case "Canais da Darknet":
                return <Canais />;
            case "Frequências Privadas":
                return <Frequencias />;
            case "Como funciona":
            default:
                return <ComoFunciona />;
        }
    };

    const isMinimized = mode === "min";

    return (
        <div
            className={`
        fixed inset-0 z-40 flex flex-col justify-end
        ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
        >
            {/* BACKDROP */}
            {!isMinimized && (
                <div
                    className={`
            absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500
            ${isOpen ? "opacity-100" : "opacity-0"}
          `}
                    onClick={onClose}
                />
            )}

            {/* PANEL */}
            <div
                className={`
          glass transition-all duration-300 ease-out
          ${mode === "max" ? "h-screen rounded-none" : ""}
          ${mode === "default" ? "min-h-[70vh] rounded-t-3xl" : ""}
          ${mode === "min" ? "h-[50px] rounded-t-2xl opacity-80" : ""}
          ${isOpen ? "translate-y-0" : "translate-y-full"}
          p-6 flex flex-col
        `}
                style={{
                    transform: `translateY(${dragY}px)`,
                }}

                // 🖱️ MOUSE
                onMouseDown={(e) => handleStart(e.clientY)}
                onMouseMove={(e) => handleMove(e.clientY)}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}

                // 📱 TOUCH
                onTouchStart={(e) => handleStart(e.touches[0].clientY)}
                onTouchMove={(e) => handleMove(e.touches[0].clientY)}
                onTouchEnd={handleEnd}
            >
                {/* 🧲 HANDLE BAR (iOS feel) */}
                <div className="flex justify-center mb-2 cursor-grab">
                    <div className="w-10 h-1 bg-white/30 rounded-full" />
                </div>

                {/* 🍎 BOTÕES MACOS */}
                <div className="flex items-center gap-2 mb-4">
                    <button
                        onClick={() => {
                            setMode("default");
                            onClose();
                        }}
                        className="w-3 h-3 rounded-full bg-red-500"
                    />

                    <button
                        onClick={() => setMode("min")}
                        className="w-3 h-3 rounded-full bg-yellow-500"
                    />

                    <button
                        onClick={() =>
                            setMode((prev) => (prev === "max" ? "default" : "max"))
                        }
                        className="w-3 h-3 rounded-full bg-green-500"
                    />
                </div>

                {/* conteúdo */}
                {!isMinimized && (
                    <div className="overflow-y-auto flex-1">
                        {renderContent()}
                    </div>
                )}
            </div>
        </div>
    );
}