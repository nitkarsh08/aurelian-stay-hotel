import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] w-40 h-40 rounded-full blur-3xl opacity-40"
      style={{
        left: pos.x - 80,
        top: pos.y - 80,
        background:
          "radial-gradient(circle,#d4af37 0%,transparent 70%)",
      }}
    />
  );
}