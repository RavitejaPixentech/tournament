import { useMemo } from 'react';

export default function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 4 + Math.random() * 8,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 4,
      emoji: ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)],
    }))
    , []);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            fontSize: p.size,
            opacity: 0.4,
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        >
          {p.emoji}
        </div>
      ))}
      {/* Radial glow overlays */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 15% 85%, rgba(255,60,0,0.18) 0%, transparent 45%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 85% 15%, rgba(255,120,0,0.12) 0%, transparent 45%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(255,180,0,0.04) 0%, transparent 70%)',
      }} />
    </div>
  );
}
