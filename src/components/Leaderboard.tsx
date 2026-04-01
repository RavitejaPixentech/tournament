import { Trophy, Star } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  prize: number;
  isTop3?: boolean;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  jackpot: number;
}

const Leaderboard = ({ entries, jackpot }: LeaderboardProps) => {
  return (
    <div className="rounded-2xl border-2 border-gold/50 bg-gradient-to-b from-casino-navy to-background overflow-hidden shadow-xl shadow-gold/5">
      {/* Jackpot Header */}
      <div className="text-center py-3 bg-gradient-to-b from-gold-dark/30 to-transparent">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Jackpot</p>
        <p className="text-3xl font-black text-gold drop-shadow-lg animate-pulse-glow">
          {jackpot.toLocaleString()}
        </p>
      </div>

      {/* Leaderboard Title */}
      <div className="mx-3 bg-gradient-to-r from-casino-green to-emerald-700 rounded-lg py-1.5 px-3 text-center shadow-md mb-2">
        <div className="flex items-center justify-center gap-2">
          <Trophy className="w-4 h-4 text-yellow-300" />
          <span className="text-sm font-black uppercase tracking-wider text-foreground">
            Leaderboard
          </span>
          <Trophy className="w-4 h-4 text-yellow-300" />
        </div>
      </div>

      {/* Entries */}
      <div className="px-2 pb-3 max-h-[400px] overflow-y-auto">
        {entries.map((entry) => (
          <div
            key={entry.rank}
            className={`flex items-center justify-between px-3 py-1.5 rounded-md text-sm ${
              entry.isTop3
                ? "bg-gradient-to-r from-green-800/60 to-green-900/40"
                : entry.rank % 2 === 0
                ? "bg-secondary/20"
                : ""
            }`}
          >
            <div className="flex items-center gap-2">
              {entry.isTop3 && (
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              )}
              <span className={`font-bold ${entry.isTop3 ? "text-gold" : "text-muted-foreground"}`}>
                {entry.rank}. {entry.name}
              </span>
            </div>
            <span className="font-bold text-gold-light">
              ${entry.prize.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
