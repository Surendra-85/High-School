import React, { useState } from 'react';
import { Bell, ArrowLeft, Download, Calendar, Filter, Sparkles, AlertCircle } from 'lucide-react';
import { noticesData } from '../data/mockData';

const NoticesPage = () => {
  const [category, setCategory] = useState('All');

  const filteredNotices = category === 'All'
    ? noticesData
    : noticesData.filter(n => n.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="min-h-screen bg-white pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-100 border border-orange-200 text-orange-700 font-bold rounded-full text-xs mb-3">
            <Bell className="w-4 h-4 text-orange-600 animate-bounce" /> OFFICIAL EDUCATION BOARD BULLETIN
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Latest Board Exam Notices & Datesheets
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Verified official circulars, exam dates, syllabus updates, result announcements, and scholarship alerts.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', 'Exam Notice', 'Result', 'Scholarship', 'Circular'].map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                category === cat
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-orange-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notices Stream */}
        <div className="space-y-4 max-w-4xl">
          {filteredNotices.map((n) => (
            <div
              key={n.id}
              className="p-6 bg-white border border-slate-200 rounded-3xl hover:border-orange-500 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-2xl shrink-0 ${
                  n.isUrgent ? 'bg-rose-100 text-rose-700 border border-rose-200' : 'bg-orange-100 text-orange-700 border border-orange-200'
                }`}>
                  <AlertCircle className="w-6 h-6" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 bg-orange-100 text-orange-700 font-bold rounded text-[10px] uppercase">
                      {n.board?.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3" /> {new Date(n.publishDate).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{n.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">{n.content}</p>
                </div>
              </div>

              <button className="px-4 py-2.5 bg-slate-100 hover:bg-orange-600 text-slate-700 hover:text-white text-xs font-bold rounded-xl shrink-0 transition flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5" /> PDF Notice
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default NoticesPage;
