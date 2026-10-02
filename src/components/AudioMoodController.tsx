import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioMoodController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const toggleAtmosphere = () => {
    if (!isPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Generate a subtle, warm, meditative ambient drone (low A flat tone with soft resonant filter)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(110, ctx.currentTime); // 110Hz warm low A

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(260, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 2); // very soft warm presence

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        oscillatorRef.current = osc;
        gainRef.current = gain;
        setIsPlaying(true);
      } catch {
        // audio context blocked or not supported
      }
    } else {
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.8);
        setTimeout(() => {
          oscillatorRef.current?.stop();
          audioCtxRef.current?.close();
          setIsPlaying(false);
        }, 800);
      } else {
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-30">
      <button
        onClick={toggleAtmosphere}
        className="flex items-center gap-2.5 px-3.5 py-2 bg-[#FBFBF9]/95 text-[#111111] border border-[#111111]/20 shadow-lg text-[10px] font-sans uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-[#FBFBF9] transition-all group backdrop-blur-sm"
        title="Toggle Ambient Atelier Sound"
        aria-label="Toggle ambient atelier sound"
      >
        {isPlaying ? (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <Volume2 className="w-3.5 h-3.5 text-emerald-600 group-hover:text-[#FBFBF9]" />
            <span className="hidden sm:inline">Atelier Mood: On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-[#777777] group-hover:text-[#FBFBF9]" />
            <span className="hidden sm:inline">Atelier Mood</span>
          </>
        )}
      </button>
    </div>
  );
};
