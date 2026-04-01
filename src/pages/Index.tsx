import { useState } from "react";
import "@/styles/rush-layout.css";
import ParticleBackground from "@/components/ParticleBackground";
import RushCard from "@/components/RushCard";
import TournamentHeader from "@/components/TournamentHeader";
import BuyInCard from "@/components/BuyInCard";
import GameSlot from "@/components/GameSlot";
import Leaderboard from "@/components/Leaderboard";

const leaderboardData = [
  { name: "Player123", score: 25400 },
  { name: "LuckySpin", score: 13900 },
  { name: "SlotFanatic", score: 12600 },
  { name: "WildKing", score: 9200 },
  { name: "JackPotJoe", score: 6100 },
];

const fullLeaderboard = [
  { rank: 1, name: "Player123", prize: 25400, isTop3: true },
  { rank: 2, name: "SlotFanatic", prize: 13900, isTop3: true },
  { rank: 3, name: "LuckySpin", prize: 12600, isTop3: true },
  { rank: 4, name: "WildKing", prize: 9200 },
  { rank: 5, name: "JackPotJoe", prize: 6100 },
  { rank: 6, name: "FastSpinner", prize: 5100 },
  { rank: 7, name: "GoldDigger", prize: 4100 },
  { rank: 8, name: "ReelKing", prize: 3100 },
  { rank: 9, name: "BonusStar", prize: 2100 },
  { rank: 10, name: "BigWinRob", prize: 1100 },
  { rank: 11, name: "TreasureMax", prize: 1100 },
  { rank: 12, name: "ReelLover", prize: 1100 },
];

const buyIns = [
  { buyIn: 10, timeLeft: "00:34", prizePool: 25000 },
  { buyIn: 20, timeLeft: "00:48", prizePool: 50000 },
  { buyIn: 30, timeLeft: "00:42", prizePool: 75000 },
  { buyIn: 50, timeLeft: "00:42", prizePool: 100000 },
  { buyIn: 100, timeLeft: "00:42", prizePool: 150000 },
  { buyIn: 200, timeLeft: "00:42", prizePool: 200000 },
];

const gameImages = [
  { image: "/gameImages/anubiswildhunt.png", name: "Anubis Wild Hunt" },
  { image: "/gameImages/candybonanza1000.png", name: "Candy Bonanza 1000" },
  { image: "/gameImages/dragonVsTigerMegaways.png", name: "Dragon Vs Tiger" },
  { image: "/gameImages/falconofanatolia.png", name: "Falcon of Anatolia" },
  { image: "/gameImages/fortunefrog.png", name: "Fortune Frog" },
  { image: "/gameImages/garudaVsNagaMegaways.png", name: "Garuda Vs Naga" },
  { image: "/gameImages/goldenphoenixblaze.png", name: "Golden Phoenix Blaze" },
  { image: "/gameImages/islandoftreasures.png", name: "Island of Treasures" },
];

type View = "rush" | "tournament";

const Index = () => {
  const [view, setView] = useState<View>("rush");
  const [tournamentMinutes, setTournamentMinutes] = useState(5);

  return (
    <div className="h-screen bg-background relative overflow-hidden flex flex-col">
      <ParticleBackground />

      {/* Radial glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-gold/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col flex-1 min-h-0">
        {/* Tab Navigation */}
        <div className="flex justify-center gap-1 sm:gap-2 pt-2 sm:pt-4 pb-2 sm:pb-4 flex-shrink-0 flex-wrap px-2">
          <button
            onClick={() => setView("rush")}
            className={`px-3 sm:px-6 py-1 sm:py-2 rounded-full text-[10px] sm:text-sm font-bold uppercase tracking-wider transition-all ${
              view === "rush"
                ? "bg-gradient-to-b from-gold to-gold-dark text-primary-foreground shadow-lg shadow-gold/30"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            Rush Cards
          </button>
          {[1, 2, 5].map((m) => (
            <button
              key={m}
              onClick={() => {
                setView("tournament");
                setTournamentMinutes(m);
              }}
              className={`px-3 sm:px-6 py-1 sm:py-2 rounded-full text-[10px] sm:text-sm font-bold uppercase tracking-wider transition-all ${
                view === "tournament" && tournamentMinutes === m
                  ? "bg-gradient-to-b from-gold to-gold-dark text-primary-foreground shadow-lg shadow-gold/30"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {m}min Blitz
            </button>
          ))}
        </div>

        {/* Rush Cards View */}
        {view === "rush" && (
          <div className="rush-scroll">
            <div className="rush-grid">
              <div className="rush-card-wrap">
                <RushCard minutes={1} variant="blue" initialSeconds={34} jackpot={10000} leaderboard={leaderboardData} />
              </div>
              <div className="rush-card-wrap">
                <RushCard minutes={2} variant="red" initialSeconds={75} jackpot={10000} leaderboard={leaderboardData} />
              </div>
              <div className="rush-card-wrap">
                <RushCard minutes={5} variant="emerald" initialSeconds={130} jackpot={10000} leaderboard={leaderboardData} />
              </div>
            </div>
          </div>
        )}

        {/* Tournament View */}
        {view === "tournament" && (
          <div className="flex-1 min-h-0 overflow-y-auto max-w-6xl mx-auto px-2 sm:px-4 pb-4 w-full">
            <TournamentHeader minutes={tournamentMinutes} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6 mt-4">
              {/* Left: Buy-ins + Game Grid */}
              <div className="lg:col-span-2 space-y-4">
                {/* Buy-in cards */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {buyIns.map((b) => (
                    <BuyInCard key={b.buyIn} {...b} />
                  ))}
                </div>

                {/* Game slots grid */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {gameImages.map((g) => (
                    <GameSlot key={g.name} image={g.image} name={g.name} />
                  ))}
                </div>
              </div>

              {/* Right: Leaderboard */}
              <div>
                <Leaderboard entries={fullLeaderboard} jackpot={250000} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
