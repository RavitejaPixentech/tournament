import { useState, useEffect } from "react";
import { Timer, Star } from "lucide-react";

interface RushCardProps {
  minutes: number;
  variant: "blue" | "red" | "emerald";
  initialSeconds: number;
  jackpot: number;
  leaderboard: { name: string; score: number }[];
}

const variantStyles = {
  blue: {
    outerBorder: "from-yellow-600 via-yellow-400 to-yellow-700",
    innerBorder: "from-blue-400 via-blue-600 to-blue-400",
    cardBg: "bg-gradient-to-b from-blue-700 via-blue-800 to-blue-950",
    headerBg: "from-blue-500 via-blue-700 to-blue-900",
    timerBg: "bg-blue-900/90 border-blue-400/50",
    timerText: "text-blue-100",
    imageBg: "from-blue-700/80 to-blue-950/90",
    jackpotBg: "from-orange-500 via-orange-400 to-orange-500",
    jackpotText: "text-white",
    jackpotLabel: "text-orange-900",
    leaderBg: "from-blue-900 to-blue-950",
    leaderStripe: "bg-blue-800/60",
    leaderBorder: "border-blue-700/50",
    joinBtn: "from-blue-700 via-blue-600 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-gold border-yellow-500/60",
  },
  red: {
    outerBorder: "from-yellow-600 via-yellow-400 to-yellow-700",
    innerBorder: "from-red-400 via-red-600 to-red-400",
    cardBg: "bg-gradient-to-b from-red-800 via-red-900 to-gray-950",
    headerBg: "from-red-600 via-red-800 to-red-950",
    timerBg: "bg-gray-900/90 border-gray-500/50",
    timerText: "text-gray-100",
    imageBg: "from-red-800/60 to-gray-950/80",
    jackpotBg: "from-gray-200 via-white to-gray-300",
    jackpotText: "text-gray-900",
    jackpotLabel: "text-gray-700",
    leaderBg: "from-green-800 to-green-950",
    leaderStripe: "bg-green-700/50",
    leaderBorder: "border-green-600/50",
    joinBtn: "from-gray-100 via-white to-gray-200 hover:from-white hover:to-gray-100 text-gray-900 border-gray-400/60",
  },
  emerald: {
    outerBorder: "from-yellow-600 via-yellow-400 to-yellow-700",
    innerBorder: "from-emerald-400 via-emerald-600 to-emerald-400",
    cardBg: "bg-gradient-to-b from-emerald-600 via-emerald-800 to-emerald-950",
    headerBg: "from-emerald-500 via-emerald-700 to-emerald-900",
    timerBg: "bg-emerald-900/90 border-emerald-400/50",
    timerText: "text-emerald-100",
    imageBg: "from-emerald-700/60 to-emerald-950/80",
    jackpotBg: "from-yellow-500 via-yellow-400 to-yellow-500",
    jackpotText: "text-yellow-900",
    jackpotLabel: "text-yellow-800",
    leaderBg: "from-purple-800 to-purple-950",
    leaderStripe: "bg-purple-700/50",
    leaderBorder: "border-purple-600/50",
    joinBtn: "from-emerald-600 via-emerald-500 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white border-emerald-400/60",
  },
};

const cardEmojis = {
  blue: "🎲",
  red: "🎰",
  emerald: "💎",
};

const formatScore = (score: number) => {
  return score.toLocaleString("de-DE");
};

const RushCard = ({ minutes, variant, initialSeconds, jackpot, leaderboard }: RushCardProps) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const styles = variantStyles[variant];

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : initialSeconds));
    }, 1000);
    return () => clearInterval(interval);
  }, [initialSeconds]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="relative flex flex-col w-full min-w-0 h-full">
      {/* Outer ornate gold border */}
      <div className={`rounded-xl sm:rounded-2xl p-[2px] sm:p-[5px] bg-gradient-to-b ${styles.outerBorder} shadow-2xl shadow-yellow-900/50 h-full flex flex-col`}>
        {/* Inner colored accent border */}
        <div className={`rounded-[9px] sm:rounded-[13px] p-[2px] sm:p-[3px] bg-gradient-to-b ${styles.innerBorder} flex-1 flex flex-col min-h-0`}>
          {/* Gold inner trim */}
          <div className="rounded-[8px] sm:rounded-[11px] p-[1px] sm:p-[3px] bg-gradient-to-b from-yellow-600/80 via-yellow-500/40 to-yellow-600/80 flex-1 flex flex-col min-h-0">
            <div className={`rounded-lg overflow-hidden ${styles.cardBg} flex flex-col flex-1 min-h-0`}>
              {/* Header */}
              <div className={`bg-gradient-to-b ${styles.headerBg} px-2 sm:px-5 pt-1.5 sm:pt-7 pb-1 sm:pb-5 text-center relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5" />
                <div className="relative z-10">
                  <div className="flex items-baseline justify-center gap-0.5 sm:gap-1">
                    <span
                      className="text-2xl sm:text-5xl lg:text-7xl font-black text-gold italic drop-shadow-lg"
                      style={{
                        WebkitTextStroke: '1px rgba(0,0,0,0.4)',
                        textShadow: '0 0 30px rgba(255,200,0,0.5), 3px 3px 6px rgba(0,0,0,0.6)'
                      }}
                    >
                      {minutes}
                    </span>
                    <div className="flex flex-col items-start">
                      <span
                        className="text-[10px] sm:text-lg lg:text-2xl font-black text-foreground tracking-wider uppercase leading-tight"
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}
                      >
                        Minute
                      </span>
                      <span
                        className="text-base sm:text-3xl lg:text-5xl font-black text-gold tracking-wider uppercase -mt-0.5 sm:-mt-2 drop-shadow-lg leading-tight"
                        style={{
                          WebkitTextStroke: '1px rgba(0,0,0,0.3)',
                          textShadow: '0 0 20px rgba(255,200,0,0.4), 3px 3px 6px rgba(0,0,0,0.6)'
                        }}
                      >
                        Rush
                      </span>
                    </div>
                  </div>
                  <p className="text-[7px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.3em] uppercase text-gold-light mt-0.5 sm:mt-2">
                    Lighting Fast Action!
                  </p>
                </div>
              </div>

              {/* Timer */}
              <div className={`mx-1 sm:mx-4 mt-1 sm:mt-3 rounded-md sm:rounded-lg ${styles.timerBg} border px-1.5 sm:px-4 py-0.5 sm:py-2.5 flex items-center justify-center gap-1 sm:gap-3 flex-shrink-0`}>
                <Timer className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-gold-light" />
                <span className={`text-[8px] sm:text-sm ${styles.timerText} font-medium`}>Starts in</span>
                <span className="text-xs sm:text-xl lg:text-2xl font-mono font-black text-foreground tracking-widest">
                  {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
                </span>
              </div>

              {/* Center image area - flexible height */}
              <div className={`min-h-[2rem] sm:min-h-[3rem] flex-1 mx-1 sm:mx-4 mt-1 sm:mt-3 rounded-md sm:rounded-lg bg-gradient-to-b ${styles.imageBg} flex items-center justify-center overflow-hidden relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="text-2xl sm:text-5xl lg:text-6xl animate-float relative z-10">{cardEmojis[variant]}</div>
              </div>

              {/* Jackpot banner */}
              <div className={`mx-1 sm:mx-4 mt-1 sm:mt-3 bg-gradient-to-r ${styles.jackpotBg} rounded-md sm:rounded-lg py-0.5 sm:py-3 px-1.5 sm:px-5 flex items-center justify-center gap-1.5 sm:gap-4 shadow-lg relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                <Star className="w-2.5 h-2.5 sm:w-6 sm:h-6 text-yellow-300 fill-yellow-300 drop-shadow-md relative z-10" />
                <div className="text-center relative z-10">
                  <p className={`text-[6px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.3em] ${styles.jackpotLabel}`}>Jackpot</p>
                  <p className={`text-sm sm:text-2xl lg:text-3xl font-black ${styles.jackpotText} drop-shadow-md -mt-0.5`}
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
                  >
                    {formatScore(jackpot)}
                  </p>
                </div>
                <Star className="w-2.5 h-2.5 sm:w-6 sm:h-6 text-yellow-300 fill-yellow-300 drop-shadow-md relative z-10" />
              </div>

              {/* Leaderboard */}
              <div className={`mx-1 sm:mx-4 mt-1 sm:mt-3 rounded-md sm:rounded-lg bg-gradient-to-b ${styles.leaderBg} overflow-hidden border ${styles.leaderBorder} flex-shrink-0`}>
                {leaderboard.map((player, i) => (
                  <div
                    key={player.name}
                    className={`flex items-center justify-between px-1.5 sm:px-4 py-px sm:py-2 text-[8px] sm:text-sm ${
                      i % 2 === 0 ? styles.leaderStripe : ""
                    }`}
                  >
                    <span className="text-gray-200 font-semibold truncate">
                      {i + 1}. {player.name}
                    </span>
                    <span className="font-bold text-yellow-300 ml-1">
                      {formatScore(player.score)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Join Button */}
              <div className="p-1 sm:p-4 flex-shrink-0">
                <button
                  className={`w-full bg-gradient-to-b ${styles.joinBtn} font-black text-[10px] sm:text-lg lg:text-xl uppercase tracking-wider sm:tracking-widest py-1 sm:py-3.5 rounded-md sm:rounded-xl shadow-lg transition-all active:scale-95 border sm:border-2`}
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RushCard;
