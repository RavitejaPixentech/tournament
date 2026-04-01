# 🏆 Tournament Lobby

A React + Vite implementation of the 1/2/5 Minute Blitz Tournament and Rush lobby screens.

## Features

- **Tournament View** — 1 Min / 2 Min / 5 Min Blitz tabs, 6 buy-in cards, live countdown timers, leaderboard, jackpot
- **Rush View** — 3 Rush cards (1/2/5 Min) with countdown timers, jackpot display, mini-leaderboard, Join Now buttons
- Animated background particles, gold glow effects, hover interactions
- All timers are live and auto-reset

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

## Project Structure

```
src/
├── App.jsx                  # Root component, nav between views
├── main.jsx                 # ReactDOM entry point
├── index.css                # Global styles & keyframe animations
├── data.js                  # All static data (leaderboard, buy-ins, cards)
├── hooks/
│   └── useCountdown.js      # Live countdown hook
├── components/
│   ├── Particles.jsx        # Animated background
│   ├── BuyInCard.jsx        # Buy-in card with countdown
│   ├── Leaderboard.jsx      # 12-player leaderboard panel
│   ├── JackpotDisplay.jsx   # Gold jackpot amount display
│   └── RushCard.jsx         # Rush tournament card
└── views/
    ├── TournamentView.jsx   # Full tournament lobby layout
    └── RushView.jsx         # Rush cards layout
```

## Customisation

- Edit **`src/data.js`** to change player names, scores, buy-in amounts, prize pools, jackpot
- Swap emojis in `RUSH_CARDS` for real game artwork images
- Add real slot game thumbnails to the 10 empty grid cells in `TournamentView`
