import React from 'react';
import { GraduationCap, ShieldCheck, Heart, Sparkles, BookOpen, Users, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 text-orange-700 rounded-full text-xs font-bold mb-6">
          <GraduationCap className="w-4 h-4 text-orange-600" /> ABOUT EDUBOARD INDIA
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Democratizing Quality Education For Every Indian Student
        </h1>

        <p className="text-base text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed">
          EDUBOARD INDIA was built with a single vision: to serve as the nation's premier open academic infrastructure. We eliminate barriers to high-school and intermediate exam preparation by offering 100% free, verified, chapter-wise handwritten notes, NCERT textbook solutions, question banks, and past 5 years question papers across 20+ Education Boards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          <div className="p-6 glass-card rounded-3xl border border-slate-200 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">100% Verified Content</h3>
            <p className="text-xs text-slate-600">All study notes and model answers are reviewed by veteran board paper examiners.</p>
          </div>

          <div className="p-6 glass-card rounded-3xl border border-slate-200 shadow-sm">
            <BookOpen className="w-8 h-8 text-amber-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">All 20+ Education Boards</h3>
            <p className="text-xs text-slate-600">Single unified destination covering UPMSP, CBSE, CISCE, BSEB, NIOS, BSER & more.</p>
          </div>

          <div className="p-6 glass-card rounded-3xl border border-slate-200 shadow-sm">
            <Award className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">Zero Paywalls</h3>
            <p className="text-xs text-slate-600">Free PDF downloads with fast direct mirror servers for smooth access anytime.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
