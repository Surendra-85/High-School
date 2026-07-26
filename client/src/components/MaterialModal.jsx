import React, { useState } from 'react';
import { X, Download, Bookmark, Star, Eye, FileText, Check, Share2, Sparkles, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const MaterialModal = ({ material, isOpen, onClose }) => {
  const { toggleBookmark, user } = useAuth();
  const [downloaded, setDownloaded] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen || !material) return null;

  const isBookmarked = user?.bookmarks?.includes(material.id);

  const handleDownload = () => {
    setDownloaded(true);
    const link = document.createElement('a');
    link.href = material.fileUrl || '#';
    link.target = '_blank';
    link.download = `${material.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloaded(false), 3000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-orange-100 border border-orange-200 text-orange-700 font-extrabold rounded-xl text-xs uppercase tracking-wider">
              {material.board?.toUpperCase() || 'BOARD STUDY'}
            </span>
            <span className="px-3 py-1 bg-amber-100 border border-amber-200 text-amber-800 font-bold rounded-xl text-xs">
              {material.type}
            </span>
            {material.year && (
              <span className="px-3 py-1 bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold rounded-xl text-xs">
                Session {material.year}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Thumbnail Preview Card */}
          <div className="md:col-span-1">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 group shadow-md">
              <img
                src={material.thumbnail || "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80"}
                alt={material.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                <span className="flex items-center gap-1 font-bold text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-300" /> {material.rating || 4.9}
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <Eye className="w-3.5 h-3.5" /> {(material.views || 1200).toLocaleString()} Views
                </span>
              </div>
            </div>
          </div>

          {/* Details & Metadata */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 leading-snug">{material.title}</h2>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {material.description || "Official verified academic study material formatted for target board examinations."}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {(material.tags || ["Exam Prep", "NCERT", "Official PDF"]).map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Verification Badge */}
            <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl flex items-center gap-3 text-xs text-orange-800 font-semibold mb-6">
              <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0" />
              <span>Verified by EduBoard Academic Faculty for 100% Curriculum Accuracy</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownload}
                className="flex-1 py-3.5 px-5 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition"
              >
                {downloaded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-200" /> PDF Downloaded!
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" /> Download PDF Notes
                  </>
                )}
              </button>

              <button
                onClick={() => toggleBookmark(material.id)}
                className={`p-3.5 rounded-xl border transition ${
                  isBookmarked
                    ? 'bg-amber-100 border-amber-300 text-amber-700 font-bold'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
                title="Bookmark Material"
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
              </button>

              <button
                onClick={handleShare}
                className="p-3.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl text-slate-600 hover:text-slate-900 transition"
                title="Share link"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Share2 className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Embedded Interactive PDF Reader Mock Preview */}
        <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 text-center">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-semibold">
            <span>Interactive Document Viewer</span>
            <span>Page 1 of 24 • High Quality PDF</span>
          </div>
          <div className="h-44 bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 text-slate-500 shadow-sm">
            <FileText className="w-10 h-10 text-orange-600 mb-2 animate-bounce" />
            <p className="text-xs text-slate-700 font-medium">Click "Download PDF Notes" to read full document locally or print.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialModal;
