import React, { useState, useEffect } from 'react';
import { GraduationCap, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

const InitialLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing All Board Study Group...');
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadingOut(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600); // fade out duration
          }, 300);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 15) + 10;
        if (next > 30 && next < 60) {
          setStatusText('Loading Handwritten Notes & 2026 NCERT Solutions...');
        } else if (next >= 60 && next < 90) {
          setStatusText('Verifying Solved PYQ Question Papers...');
        } else if (next >= 90) {
          setStatusText('Ready! Welcome to All Board Study Group');
        }
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#faf8f5] via-[#fff8f0] to-[#fef3c7] transition-all duration-700 font-jakarta ${
        fadingOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background Subtle Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md w-full">
        
        {/* Glowing Logo Circle with Pulse Rings */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-600 via-amber-500 to-orange-500 blur-xl opacity-70 animate-pulse" />
          
          <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-tr from-orange-600 via-amber-600 to-orange-500 p-1 shadow-2xl flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center text-orange-600 shadow-inner">
              <GraduationCap className="w-12 h-12 animate-bounce" />
            </div>
          </div>
          
          <span className="absolute -top-2 -right-2 p-1.5 bg-amber-500 text-white rounded-full shadow-lg animate-spin">
            <Sparkles className="w-4 h-4" />
          </span>
        </div>

        {/* Brand Name & Slogan */}
        <div className="space-y-1.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100/90 border border-orange-200 text-orange-900 rounded-xl text-xs font-black uppercase tracking-wider shadow-xs mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
            Official 2026 Study Portal
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            STUDY <span className="text-orange-600">GROUP</span>
          </h1>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full space-y-3">
          <div className="h-3 w-full bg-white border border-amber-200/90 rounded-full p-0.5 shadow-inner overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 rounded-full transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-black text-slate-600 px-1">
            <span className="truncate max-w-[240px] text-left">{statusText}</span>
            <span className="text-orange-600 font-extrabold text-sm">{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InitialLoader;
