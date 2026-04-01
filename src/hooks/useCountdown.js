import { useState, useEffect } from 'react';

export function useCountdown(initialSeconds) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : initialSeconds));
    }, 1000);
    return () => clearInterval(id);
  }, [initialSeconds]);

  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
}
