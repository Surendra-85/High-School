import React, { useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { 
  BookOpen, ArrowLeft, Star, Download, FileText, CheckCircle2, Bookmark, Share2, 
  Search, Filter, Sparkles, Award, FileCheck, Layers, ChevronRight, Eye, ShieldCheck, Zap, Trophy, Target
} from 'lucide-react';
import { subjectsData, materialsData } from '../data/mockData';

const SubjectDetailsPage = ({ onSelectMaterial }) => {
  const { subjectId } = useParams();
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'All';
  
  const [activeTab, setActiveTab] = useState(initialFilter);
  const [selectedChapter, setSelectedChapter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const subject = subjectsData.find(s => s.id === subjectId) || subjectsData[0];

  // Subject Chapter List
  const chapterList = [
    { id: 'All', name: 'All Chapters & Topics' },
    { id: 'ch1', name: 'Chapter 1: Chemical Reactions & Equations' },
    { id: 'ch2', name: 'Chapter 2: Acids, Bases & Salts' },
    { id: 'ch3', name: 'Chapter 3: Metals & Non-Metals' },
    { id: 'ch4', name: 'Chapter 4: Carbon & Its Compounds' },
    { id: 'ch5', name: 'Chapter 5: Life Processes & Cell Biology' },
    { id: 'ch6', name: 'Chapter 6: Control & Coordination' },
    { id: 'ch7', name: 'Chapter 7: Electricity & Magnetic Effects' },
  ];

  // Dynamic Material Generator for Selected Category
  const getMaterialsForTab = (tabName, subjectObj) => {
    const subTitle = subjectObj?.name || 'Science (विज्ञान)';

    if (tabName === 'Handwritten Notes') {
      return [
        { id: 'hn-1', title: `${subTitle} Chapter 1-5 Faculty Handwritten Revision Notes`, type: 'Handwritten Notes', rating: 4.95, views: 28400, downloadsCount: 21900, chapter: 'Chapter 1 to 5 Full Derivations', year: 2026, description: 'Faculty handwritten notes with clean labeled diagrams and step-by-step formula derivations.' },
        { id: 'hn-2', title: `${subTitle} Important Reactions & Organic Mechanism Notes`, type: 'Handwritten Notes', rating: 4.92, views: 19800, downloadsCount: 15400, chapter: 'Organic & Physical Concepts', year: 2026, description: 'Handwritten summary notes covering named reactions, definitions, and short memory tricks.' },
        { id: 'hn-3', title: `${subTitle} Quick Mind Maps & Diagram Sheet PDF`, type: 'Handwritten Notes', rating: 4.89, views: 16500, downloadsCount: 12100, chapter: 'All Chapters Mind Maps', year: 2026, description: 'One-page handwritten mind maps for last 15-minute quick revision before board theory exam.' },
        { id: 'hn-4', title: `${subTitle} Top Examiner Verified Topper Class Notes`, type: 'Handwritten Notes', rating: 4.98, views: 32000, downloadsCount: 27500, chapter: 'Full Syllabus Master Notes', year: 2026, description: 'Official topper notes verified by senior board examiners following 2026 marking scheme.' },
      ];
    }

    if (tabName === 'Books') {
      return [
        { id: 'bk-1', title: `${subTitle} Official NCERT Textbook Full PDF (2026 Edition)`, type: 'Books', rating: 4.97, views: 42000, downloadsCount: 36500, chapter: 'Complete Textbook PDF', year: 2026, description: 'Complete line-by-line official NCERT textbook PDF with in-text questions and exercise answers.' },
        { id: 'bk-2', title: `${subTitle} NCERT Exemplar Problems & Detailed Solutions`, type: 'Books', rating: 4.91, views: 24500, downloadsCount: 19200, chapter: 'Exemplar Hard Problems', year: 2026, description: 'Official NCERT Exemplar problem book with step-by-step solutions for high-scoring students.' },
        { id: 'bk-3', title: `${subTitle} Reference Book Summary & Concept Guide`, type: 'Books', rating: 4.86, views: 18200, downloadsCount: 13800, chapter: 'Chapterwise Core Concepts', year: 2026, description: 'Simplified reference guide containing chapter summaries, key definitions, and solved examples.' },
        { id: 'bk-4', title: `${subTitle} Lab Manual & Practical Viva Question Book`, type: 'Books', rating: 4.88, views: 15900, downloadsCount: 11400, chapter: 'Practical & Viva Questions', year: 2026, description: 'Complete practical experiment manual with viva-voce questions and observation tables.' },
      ];
    }

    if (tabName === 'Previous Papers') {
      return [
        { id: 'pyq-1', title: `${subTitle} 10-Year Solved Board PYQs (2015-2025)`, type: 'Previous Papers', rating: 4.96, views: 38900, downloadsCount: 31200, chapter: 'All Chapters Solved Papers', year: 2025, description: '10 years solved previous question papers with official marking scheme answer keys.' },
        { id: 'pyq-2', title: `${subTitle} 2025 Official Board Exam Question Paper & Key`, type: 'Previous Papers', rating: 4.94, views: 27500, downloadsCount: 22100, chapter: '2025 Original Paper', year: 2025, description: 'Original 2025 board theory paper with step-by-step solved solution key.' },
        { id: 'pyq-3', title: `${subTitle} 2024 Board Solved Question Paper (All Sets)`, type: 'Previous Papers', rating: 4.91, views: 21400, downloadsCount: 17300, chapter: '2024 Set A, B, C, D', year: 2024, description: 'All sets of 2024 board exam paper with detailed answers and marking breakdown.' },
        { id: 'pyq-4', title: `${subTitle} Chapterwise Repeated Board PYQ Collection`, type: 'Previous Papers', rating: 4.93, views: 29800, downloadsCount: 24600, chapter: 'Most Repeated Questions', year: 2025, description: 'Chapter-wise organized compilation of questions asked more than 3 times in past board exams.' },
      ];
    }

    if (tabName === 'Question Bank') {
      return [
        { id: 'qb-1', title: `${subTitle} 1000+ NCERT Chapterwise MCQ Question Bank`, type: 'Question Bank', rating: 4.92, views: 31500, downloadsCount: 25800, chapter: 'Chapterwise MCQs & VSA', year: 2026, description: 'Massive objective question bank with multiple-choice questions, assertion-reason, and fill in the blanks.' },
        { id: 'qb-2', title: `${subTitle} Case Study & Competency Based Questions 2026`, type: 'Question Bank', rating: 4.90, views: 22300, downloadsCount: 18100, chapter: 'Competency Based Questions', year: 2026, description: 'New 2026 pattern case-based and passage-based analytical question bank with detailed explanations.' },
        { id: 'qb-3', title: `${subTitle} Very Short & Short Answer Type Question Vault`, type: 'Question Bank', rating: 4.87, views: 17900, downloadsCount: 14200, chapter: '1 Mark & 2 Mark Questions', year: 2026, description: 'Targeted 1-mark and 2-mark question bank for quick scoring in theory papers.' },
        { id: 'qb-4', title: `${subTitle} Long Answer & 5-Mark Numerical Question Bank`, type: 'Question Bank', rating: 4.93, views: 24100, downloadsCount: 19600, chapter: '5 Mark Long Questions', year: 2026, description: 'Step-by-step long numericals and derivation question bank with detailed marking scheme.' },
      ];
    }

    if (tabName === 'Model Papers') {
      return [
        { id: 'mp-1', title: `${subTitle} Official Board Model Sample Paper 2026 (Set 1-5)`, type: 'Model Papers', rating: 4.97, views: 45000, downloadsCount: 38900, chapter: '2026 Official Model Sets', year: 2026, description: 'Official 2026 model question paper sets issued by exam board with official answer keys.' },
        { id: 'mp-2', title: `${subTitle} High-Probability Expected Board Exam Paper 2026`, type: 'Model Papers', rating: 4.93, views: 29500, downloadsCount: 23800, chapter: 'Expected Question Paper', year: 2026, description: 'Expert faculty created sample model paper based on latest 2026 exam blueprint.' },
        { id: 'mp-3', title: `${subTitle} Self-Assessment Test Series Paper Set A & B`, type: 'Model Papers', rating: 4.88, views: 18900, downloadsCount: 14600, chapter: '3-Hour Timed Mock Papers', year: 2026, description: 'Timed 3-hour mock test papers designed for self-assessment under real exam conditions.' },
      ];
    }

    if (tabName === 'Formula Sheets') {
      return [
        { id: 'fs-1', title: `${subTitle} All Chapters Master Formula & Equation Cheat Sheet`, type: 'Formula Sheets', rating: 4.98, views: 51000, downloadsCount: 43200, chapter: '100+ Core Formulas', year: 2026, description: 'Complete 2-page formula cheat sheet containing all SI units, constants, and equations.' },
        { id: 'fs-2', title: `${subTitle} Step-by-Step Derivation & Theorem Summary`, type: 'Formula Sheets', rating: 4.94, views: 33400, downloadsCount: 27900, chapter: 'All Board Derivations', year: 2026, description: 'All mandatory board exam derivations compiled in clean step-by-step logical sequence.' },
      ];
    }

    if (tabName === 'Sample Papers') {
      return [
        { id: 'sp-1', title: `${subTitle} 2026 Sample Question Paper with Solution Marking`, type: 'Sample Papers', rating: 4.92, views: 26800, downloadsCount: 21400, chapter: '2026 Latest Sample Paper', year: 2026, description: 'Sample question paper conforming strictly to 2026 question paper design and marking scheme.' },
        { id: 'sp-2', title: `${subTitle} Practice Sample Paper Set 1 to 3 with Answer Key`, type: 'Sample Papers', rating: 4.89, views: 19400, downloadsCount: 15200, chapter: 'Practice Sets 1-3', year: 2026, description: 'Comprehensive practice sample paper bundle for self-evaluation before board exams.' },
      ];
    }

    if (tabName === 'Topper Copies') {
      return [
        { id: 'tc-1', title: `${subTitle} Official Board Topper 100/100 Answer Sheet Copy`, type: 'Topper Copies', rating: 4.99, views: 62000, downloadsCount: 54100, chapter: 'Topper Answer Copy PDF', year: 2025, description: 'Handwritten answer sheet of 100/100 score topper showing ideal paper presentation and diagram style.' },
        { id: 'tc-2', title: `${subTitle} Topper Handwriting & Presentation Guideline Booklet`, type: 'Topper Copies', rating: 4.95, views: 31200, downloadsCount: 25900, chapter: 'Presentation & Formatting', year: 2026, description: 'Learn how board exam toppers structure answers, highlight key terms, and draw diagrams.' },
      ];
    }

    if (tabName === 'Syllabus Blueprint') {
      return [
        { id: 'sb-1', title: `${subTitle} Official 2026 Board Syllabus & Chapterwise Weightage`, type: 'Syllabus Blueprint', rating: 4.95, views: 37500, downloadsCount: 31800, chapter: '2026 Exam Blueprint', year: 2026, description: 'Official chapter-wise mark distribution, deleted topics list, and exam pattern blueprint.' },
      ];
    }

    // Default 'All'
    return materialsData;
  };

  const displayMaterials = getMaterialsForTab(activeTab, subject);

  const categoriesList = [
    { name: 'All', label: 'All Materials', count: '100+ PDFs', icon: Layers, color: 'from-slate-800 to-slate-950' },
    { name: 'Handwritten Notes', label: 'Handwritten Notes', count: '25+ Notes', icon: FileText, color: 'from-amber-500 to-orange-600' },
    { name: 'Previous Papers', label: 'Previous Papers (PYQs)', count: '10 Years', icon: FileCheck, color: 'from-emerald-500 to-teal-700' },
    { name: 'Books', label: 'NCERT Books & Solutions', count: 'All Chapters', icon: BookOpen, color: 'from-blue-500 to-indigo-600' },
    { name: 'Question Bank', label: 'Question Banks', count: '1000+ MCQs', icon: Sparkles, color: 'from-purple-500 to-violet-700' },
    { name: 'Model Papers', label: 'Model Papers 2026', count: '15 Sets', icon: Award, color: 'from-rose-500 to-pink-600' },
    { name: 'Formula Sheets', label: 'Formula Sheets & Derivations', count: '100+ Formulas', icon: Zap, color: 'from-amber-500 to-yellow-600' },
    { name: 'Sample Papers', label: 'Sample Question Papers', count: '2026 Updated', icon: Bookmark, color: 'from-cyan-500 to-blue-700' },
    { name: 'Topper Copies', label: 'Topper Answer Copies', count: 'High Marks', icon: Trophy, color: 'from-yellow-500 to-amber-600' },
    { name: 'Syllabus Blueprint', label: 'Syllabus & Blueprint', count: 'Latest 2026', icon: Target, color: 'from-emerald-600 to-green-700' },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] pb-20 font-jakarta">
      
      {/* ========================================================================= */}
      {/* HEADER BANNER (CLEAN & CENTERED TEXT ONLY) */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-b from-[#fef8f0] via-[#fff5eb] to-white border-b border-orange-200/80 py-12 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-orange-600 font-extrabold mb-4 transition">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home Dashboard
          </Link>

          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-600 text-white font-black rounded-xl text-[11px] uppercase tracking-wider shadow-sm mb-3">
              {subject.code} • {subject.level} ({subject.stream})
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {subject.name} Study Materials & Notes
            </h1>
            
            <p className="text-xs sm:text-base text-slate-600 mt-3 max-w-2xl mx-auto font-medium leading-relaxed">
              {subject.description} • Access handwritten notes, NCERT solutions, and 5-year solved PYQs.
            </p>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN LAYOUT: SIDEBAR BUTTONS + MATERIALS CONTENT GRID */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ========================================================================= */}
          {/* LEFT SIDEBAR: CATEGORY BUTTONS & CHAPTER NAVIGATION */}
          {/* ========================================================================= */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* 1. Category Filter Buttons Sidebar Card */}
            <div className="bg-white border border-amber-200/90 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <Filter className="w-4 h-4 text-orange-600" />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Select Material Category</h3>
              </div>

              <div className="space-y-2.5">
                {categoriesList.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = activeTab === cat.name;
                  return (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => setActiveTab(cat.name)}
                      className={`w-full p-3.5 sm:p-4 rounded-2xl text-xs font-black text-left flex items-center justify-between transition duration-300 transform active:scale-95 group ${
                        isSelected
                          ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white shadow-lg shadow-orange-600/25 scale-[1.02] border-orange-600'
                          : 'bg-slate-50/90 hover:bg-orange-50/70 border border-slate-200/90 text-slate-900 hover:border-orange-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white shadow-xs shrink-0 ${
                          isSelected ? 'bg-white/20 text-white' : `bg-gradient-to-tr ${cat.color}`
                        }`}>
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <span className="text-xs font-black leading-tight">{cat.label}</span>
                      </div>
                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-xl shrink-0 ml-2 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-white text-slate-600 border border-slate-200'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT MAIN CONTENT AREA: SEARCH BAR + MATERIALS GRID */}
          {/* ========================================================================= */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Search & Header Bar */}
            <div className="bg-white border border-amber-200/90 rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-black text-slate-900">
                  {activeTab === 'All' ? 'All Study Materials' : activeTab}
                </h2>
                <p className="text-xs text-slate-500 font-medium">Showing {displayMaterials.length} verified PDF files</p>
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search notes or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition"
                />
              </div>
            </div>

            {/* Materials Grid (ULTRA-PREMIUM CARDS) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayMaterials.map((item, idx) => (
                <div
                  key={item.id || idx}
                  onClick={() => onSelectMaterial && onSelectMaterial(item)}
                  className="bg-white rounded-[28px] border border-amber-200/90 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-2xl hover:border-orange-400 hover:-translate-y-1.5 transition duration-300 relative overflow-hidden"
                >
                  {/* Top Gradient Banner Header with File Meta */}
                  <div className="h-3 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 group-hover:h-3.5 transition-all duration-300" />

                  <div className="p-6 space-y-4">
                    {/* Header Row: Category Badge + FREE PDF Badge + Rating */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 bg-orange-100/90 text-orange-900 font-black rounded-xl text-[11px] uppercase tracking-wider">
                        {item.type}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 font-black rounded-lg border border-emerald-200 text-[10px] flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> FREE PDF
                        </span>
                        <span className="text-xs text-amber-600 font-black flex items-center gap-1 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" /> {item.rating || 4.9}
                        </span>
                      </div>
                    </div>

                    {/* Material Title */}
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-orange-600 transition leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 font-medium line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Chapter / Topic Pill */}
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-slate-700 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200/80">
                      <Bookmark className="w-3.5 h-3.5 text-orange-600" />
                      <span className="line-clamp-1">{item.chapter || "Full Chapter Formulae & Derivations"}</span>
                    </div>
                  </div>

                  {/* Footer Row with Stats & Dual Action Buttons */}
                  <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3 text-slate-500 font-extrabold text-[11px]">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-slate-400" /> {(item.views || 18400).toLocaleString()}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Download className="w-3.5 h-3.5 text-orange-600" /> {(item.downloadsCount || 12900).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-black rounded-xl transition flex items-center gap-1.5 shadow-md shadow-orange-600/20 transform active:scale-95 text-xs">
                        <Download className="w-3.5 h-3.5" /> PDF Download
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SubjectDetailsPage;
