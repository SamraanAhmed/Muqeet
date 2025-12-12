import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

const colors = [
  "#ff1493", // pink
  "#9d4edd", // purple
  "#3a86ff", // blue
  "#00f5ff", // cyan
  "#39ff14", // lime
  "#ff6b35", // orange
  "#ffd60a", // gold
];

export function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const confettiPieces: ConfettiPiece[] = Array.from(
      { length: 50 },
      (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 8,
      }),
    );

    setPieces(confettiPieces);

    // Trigger confetti multiple times for a continuous celebration
    const interval = setInterval(() => {
      setPieces((prev) => [
        ...prev,
        ...Array.from({ length: 30 }, (_, i) => ({
          id: Math.random(),
          left: Math.random() * 100,
          delay: 0,
          duration: 2 + Math.random() * 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 8 + Math.random() * 8,
        })),
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
            animation: `confetti-fall ${piece.duration}s ease-in forwards`,
            animationDelay: `${piece.delay}s`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
}
