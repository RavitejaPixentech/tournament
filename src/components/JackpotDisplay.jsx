export default function JackpotDisplay({ amount = '250,000' }) {
  return (
    <div style={{
      background: 'radial-gradient(ellipse at center, #3a2000 0%, #1a0f00 100%)',
      border: '3px solid #ffd700',
      borderRadius: 14,
      padding: '12px 20px',
      textAlign: 'center',
      marginBottom: 14,
      boxShadow: '0 0 36px rgba(255,215,0,0.35), inset 0 0 24px rgba(0,0,0,0.5)',
      animation: 'borderGlow 2.5s ease-in-out infinite',
    }}>
      {/* Coins decoration */}
      <div style={{ fontSize: 20, marginBottom: 2 }}>🪙 🪙 🪙</div>

      <div style={{
        fontSize: 12,
        fontWeight: 900,
        color: '#ffd700',
        letterSpacing: 5,
        textShadow: '0 0 14px #ffd700',
        marginBottom: 4,
      }}>
        JACKPOT
      </div>

      <div style={{
        fontSize: 34,
        fontWeight: 900,
        color: '#fff',
        letterSpacing: 2,
        animation: 'goldPulse 2s ease-in-out infinite',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {amount}
      </div>
    </div>
  );
}
