import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const SeedsContext = createContext();

export const SeedsProvider = ({ children }) => {
  const [seedCount, setSeedCount] = useState(() => {
    try {
      const saved = localStorage.getItem('prof_hootigan_seeds');
      return saved ? parseInt(saved, 10) : 1420;
    } catch {
      return 1420;
    }
  });

  const [userFedToday, setUserFedToday] = useState(0);

  useEffect(() => {
    localStorage.setItem('prof_hootigan_seeds', seedCount.toString());
  }, [seedCount]);

  const playChime = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.36);
    } catch {
      // Audio not permitted or supported, silent fallback
    }
  };

  const feedSeeds = (amount = 5, event = null) => {
    setSeedCount(prev => prev + amount);
    setUserFedToday(prev => prev + amount);
    playChime();

    // Trigger celebratory confetti in warm pumpkin/gold & lavender colors
    const xPos = event ? event.clientX / window.innerWidth : 0.5;
    const yPos = event ? event.clientY / window.innerHeight : 0.6;

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { x: xPos, y: yPos },
      colors: ['#E98991', '#DCC8F4', '#F4A261', '#E76F51', '#2A9D8F'],
      ticks: 150,
      scalar: 0.9,
      disableForReducedMotion: true
    });
  };

  return (
    <SeedsContext.Provider value={{ seedCount, userFedToday, feedSeeds }}>
      {children}
    </SeedsContext.Provider>
  );
};

export const useSeeds = () => useContext(SeedsContext);
