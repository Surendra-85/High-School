import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Sparkles, ArrowRight, FileText, Download } from 'lucide-react';

const SearchModal = ({ isOpen, onClose, onSelectMaterial }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(true);
      fetch(`/api/v1/materials?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setResults(data.data);
          }
        })
        .catch(() => {
          setResults([
            { id: "mat-01", title: "Class 12 Physics Complete Handwritten Notes 2026", board: "UP Board", level: "Intermediate", type: "Handwritten Notes" },
            { id: "mat-02", title: "CBSE Class 10 Science Solved Question Papers (2015-2025)", board: "CBSE", level: "High School", type: "Previous Papers" },
            { id: "mat-04", title: "Bihar Board Class 12 Inter Math 100 Objective Model Paper", board: "Bihar Board", level: "Intermediate", type: "Model Papers" }
          ]);
        })
        .finally(() => setLoading(false));
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center mb-4">
          <Search className="absolute left-4 w-5 h-5 text-orange-600" />
          <input
            type="text"
            autoFocus
            placeholder="Search by Board, Class, Subject, Chapter, Book, Paper or Notes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-4 bg-white border border-slate-300 rounded-2xl text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-600 shadow-sm"
          />
          {query && (
            <button onClick={() => setQuery('')} className="absolute right-4 text-slate-400 hover:text-slate-900">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Quick Filter Tag Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs text-slate-500 self-center font-semibold mr-1">Popular searches:</span>
          {['UP Board Class 10 Notes', 'CBSE Class 12 Physics', 'Bihar Board PYQ 2026', 'NCERT Maths Solutions', 'Class 12 Chemistry'].map(tag => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-3 py-1 bg-slate-100 hover:bg-orange-100 hover:text-orange-700 border border-slate-200 rounded-full text-xs text-slate-700 font-medium transition"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Stream */}
        <div className="max-h-96 overflow-y-auto space-y-3 pr-1">
          {loading && (
            <div className="py-12 text-center text-slate-500 text-sm animate-pulse">
              Searching EduBoard Academic Database...
            </div>
          )}

          {!loading && query && results.length === 0 && (
            <div className="py-12 text-center text-slate-500 text-sm">
              No material found matching "<span className="text-slate-900 font-bold">{query}</span>". Try different keywords or select a board.
            </div>
          )}

          {!loading && results.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (onSelectMaterial) onSelectMaterial(item);
                onClose();
              }}
              className="p-4 bg-slate-50 hover:bg-orange-50/80 border border-slate-200 hover:border-orange-300 rounded-2xl cursor-pointer transition flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-700 transition line-clamp-1">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded font-bold">{item.board?.toUpperCase()}</span>
                    <span>•</span>
                    <span>{item.level}</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-bold">{item.type}</span>
                  </div>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
