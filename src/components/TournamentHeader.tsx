import { Trophy, Star } from "lucide-react";

interface TournamentHeaderProps {
  minutes: number;
}

const TournamentHeader = ({ minutes }: TournamentHeaderProps) => {
  return (
    <div className="flex flex-col items-center py-4 relative">
      {/* Trophy icon */}
      <Trophy className="w-10 h-10 text-gold mb-1 drop-shadow-lg" />

      {/* Title */}
      <div className="relative flex items-center gap-2">
        <Star className="w-6 h-6 text-green-400 fill-green-400 drop-shadow-lg" />
        <div className="text-center">
          <div className="flex items-baseline justify-center gap-2">
            <span
              className="text-5xl font-black text-gold italic drop-shadow-lg"
              style={{ WebkitTextStroke: "1px rgba(0,0,0,0.3)" }}
            >
              {minutes}
            </span>
            <span
              className="text-3xl font-black text-gold tracking-wider uppercase drop-shadow-lg"
              style={{ WebkitTextStroke: "1px rgba(0,0,0,0.3)" }}
            >
              Minute Blitz
            </span>
          </div>
          <div className="bg-gradient-to-r from-casino-green to-emerald-600 rounded-full px-6 py-1 -mt-1 shadow-lg">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-foreground">
              Tournament
            </span>
          </div>
        </div>
        <Star className="w-6 h-6 text-green-400 fill-green-400 drop-shadow-lg" />
      </div>
    </div>
  );
};

export default TournamentHeader;
