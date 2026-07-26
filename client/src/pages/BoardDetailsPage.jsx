import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BookOpen, Users, Calendar, ArrowLeft, Download, Star, Filter, Sparkles, GraduationCap, ChevronRight, FileText, CheckCircle, FileCheck, Award, Bookmark } from 'lucide-react';
import { boardsData, subjectsData, materialsData } from '../data/mockData';

const BoardDetailsPage = ({ onSelectMaterial }) => {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const [level, setLevel] = useState('High School');
  const [stream, setStream] = useState('Science');
  const [materialFilter, setMaterialFilter] = useState('All');

  const board = boardsData.find(b => b.id === boardId || b.code.toLowerCase() === boardId?.toLowerCase()) || boardsData[0];

  const filteredSubjects = subjectsData.filter(s => {
    if (s.level !== level) return false;
    if (level === 'Intermediate' && s.stream !== stream && s.stream !== 'All') return false;
    return true;
  });

  const boardMaterials = materialsData.filter(m => {
    if (m.level !== level) return false;
    if (materialFilter === 'All') return true;
    
    const f = materialFilter.toLowerCase();
    const t = m.type.toLowerCase();
    if (f.includes('note') && t.includes('note')) return true;
    if (f.includes('paper') && (t.includes('paper') || t.includes('pyq') || t.includes('model'))) return true;
    if (f.includes('book') && (t.includes('book') || t.includes('ncert') || t.includes('solution'))) return true;
    if (f.includes('question') && (t.includes('question') || t.includes('bank') || t.includes('model'))) return true;
    
    return t.includes(f) || f.includes(t);
  });

  // Fallback if filter has 0 items
  const displayMaterials = boardMaterials.length > 0 ? boardMaterials : materialsData.filter(m => m.level === level);

  const handleCategoryCardClick = (catId) => {
    setMaterialFilter(catId);
    const targetSubjectId = level === 'Intermediate' ? 'inter-physics' : 'hs-science';
    navigate(`/subject/${targetSubjectId}?filter=${encodeURIComponent(catId)}`);
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      
      {/* Board Banner Header */}
      <div className="relative bg-gradient-to-b from-[#fef8f0] via-[#fff5eb] to-white border-b border-orange-200/80 overflow-hidden py-10 lg:py-14">
        
        {/* Soft Decorative Glow */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-orange-600 flex items-center gap-1 font-extrabold text-slate-700 hover:underline">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Boards
            </Link>
            <span>/</span>
            <span className="text-orange-700 font-extrabold">{board.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-600 text-white font-black rounded-xl text-[11px] uppercase tracking-wider shadow-sm mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> OFFICIAL CURRICULUM PORTAL
                </div>
                
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  {board.name}
                </h1>
                
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-2 leading-relaxed font-medium">
                  {board.description}
                </p>
              </div>

              {/* Quick Feature Badges Row */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-700 pt-1">
                <span className="px-3 py-1 bg-white border border-amber-200/90 rounded-full inline-flex items-center gap-1.5 text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Official 2026 NCERT Syllabus
                </span>
                <span className="px-3 py-1 bg-white border border-amber-200/90 rounded-full inline-flex items-center gap-1.5 text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Solved Model PYQs (2022-2026)
                </span>
                <span className="px-3 py-1 bg-white border border-amber-200/90 rounded-full inline-flex items-center gap-1.5 text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Free PDF Downloads
                </span>
              </div>

              {/* Board Quick Stats Card */}
              <div className="inline-flex flex-wrap items-center gap-6 bg-white p-4 sm:p-5 rounded-3xl border border-amber-200/90 shadow-sm mt-2">
                <div className="text-center px-4 border-r border-slate-100">
                  <div className="text-2xl font-black text-slate-900">{board.studentsCount}</div>
                  <div className="text-[11px] text-slate-500 font-bold">Students Enrolled</div>
                </div>
                <div className="text-center px-4 border-r border-slate-100">
                  <div className="text-2xl font-black text-orange-600">{board.subjectsCount}</div>
                  <div className="text-[11px] text-slate-500 font-bold">Subjects Available</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-2xl font-black text-emerald-600">2026</div>
                  <div className="text-[11px] text-slate-500 font-bold">Syllabus Session</div>
                </div>
              </div>

            </div>

            {/* Right Column: 3D ACADEMIC ARTWORK IMAGE */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-center">
              <div className="relative w-full max-w-lg group">
                <img
                  src="/board-hero-artwork.jpg"
                  alt="3D Academic Board Study & Graduation Artwork"
                  className="w-full h-auto max-h-[460px] object-cover rounded-3xl group-hover:scale-102 transition duration-500"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
            </div>

          </div>

          {/* Level Switcher (High School vs Intermediate) */}
          <div className="mt-10 flex flex-wrap items-center gap-4 pt-6 border-t border-orange-200/80">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider">Select Class Level:</span>
            
            <button
              onClick={() => setLevel('High School')}
              className={`px-6 py-3 rounded-2xl text-xs font-black transition flex items-center gap-2 shadow-xs ${
                level === 'High School'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-orange-600'
              }`}
            >
              <GraduationCap className="w-4 h-4" /> High School (Class 9th & 10th)
            </button>

            <button
              onClick={() => setLevel('Intermediate')}
              className={`px-6 py-3 rounded-2xl text-xs font-black transition flex items-center gap-2 shadow-xs ${
                level === 'Intermediate'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-orange-600'
              }`}
            >
              <BookOpen className="w-4 h-4" /> Intermediate (Class 11th & 12th)
            </button>

            {/* Stream selector if Intermediate */}
            {level === 'Intermediate' && (
              <div className="flex items-center gap-2 pl-4 border-l border-orange-200">
                {['Science', 'Commerce', 'Arts'].map(st => (
                  <button
                    key={st}
                    onClick={() => setStream(st)}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition ${
                      stream === st ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:text-orange-600 border border-slate-200'
                    }`}
                  >
                    {st} Stream
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Main Subjects & Materials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* ========================================================================= */}
        {/* INTERACTIVE CATEGORY CARDS GRID (BOOKS, NOTES, PYQS, QUESTION BANKS) */}
        {/* ========================================================================= */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-extrabold text-orange-600 uppercase tracking-widest">STUDY VAULT CATEGORIES</span>
              <h2 className="text-2xl font-black text-slate-900 mt-0.5">Explore Materials by Category</h2>
            </div>
            <span className="text-xs text-slate-500 font-semibold">Click any card to view PDF downloads</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                id: "Handwritten Notes",
                title: "Handwritten Notes",
                desc: "Formula sheets & derivations",
                count: "25+ Notes",
                icon: FileText,
                color: "from-amber-500 to-orange-600",
                bg: "bg-amber-50 border-amber-200"
              },
              {
                id: "Previous Papers",
                title: "Previous Papers",
                desc: "2015-2026 Solved PYQs",
                count: "10 Years Solved",
                icon: FileCheck,
                color: "from-emerald-500 to-teal-700",
                bg: "bg-emerald-50 border-emerald-200"
              },
              {
                id: "Books",
                title: "NCERT Books",
                desc: "Textbook PDF Solutions",
                count: "All Chapters",
                icon: BookOpen,
                color: "from-blue-500 to-indigo-600",
                bg: "bg-blue-50 border-blue-200"
              },
              {
                id: "Question Bank",
                title: "Question Banks",
                desc: "Chapterwise MCQs & VSA",
                count: "1000+ Questions",
                icon: Sparkles,
                color: "from-purple-500 to-violet-700",
                bg: "bg-purple-50 border-purple-200"
              },
              {
                id: "Model Papers",
                title: "Model Papers",
                desc: "Sample exam question sets",
                count: "2026 Sets",
                icon: Award,
                color: "from-rose-500 to-pink-600",
                bg: "bg-rose-50 border-rose-200"
              }
            ].map((cat) => {
              const Icon = cat.icon;
              const isSelected = materialFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryCardClick(cat.id)}
                  className={`p-5 rounded-3xl border flex flex-col justify-between text-left transition duration-300 transform active:scale-95 group ${
                    isSelected
                      ? 'bg-gradient-to-br from-orange-600 to-amber-600 text-white border-orange-600 shadow-xl shadow-orange-600/20 -translate-y-1'
                      : 'bg-white hover:bg-orange-50/50 border-amber-200/90 text-slate-900 shadow-sm hover:border-orange-300 hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-white shadow-md ${
                        isSelected ? 'bg-white/20 text-white' : `bg-gradient-to-tr ${cat.color}`
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {cat.count}
                      </span>
                    </div>

                    <h3 className={`text-base font-black leading-snug mb-1 ${
                      isSelected ? 'text-white' : 'text-slate-900 group-hover:text-orange-600'
                    }`}>
                      {cat.title}
                    </h3>

                    <p className={`text-[11px] font-medium leading-relaxed ${
                      isSelected ? 'text-amber-100' : 'text-slate-500'
                    }`}>
                      {cat.desc}
                    </p>
                  </div>

                  <div className={`mt-4 pt-3 border-t text-xs font-black flex items-center justify-between ${
                    isSelected ? 'border-white/20 text-white' : 'border-slate-100 text-orange-600'
                  }`}>
                    <span>View All</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Subject Cards Grid (EXACT USER SCREENSHOT SPECIFICATION) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-black text-orange-600 uppercase tracking-widest">SUBJECT SYLLABUS</span>
              <h2 className="text-2xl font-black text-slate-900 mt-0.5">
                {level} Subjects ({level === 'Intermediate' ? stream : 'All Subjects'})
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-semibold">{filteredSubjects.length} Core Subjects</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubjects.map((sub) => (
              <Link
                key={sub.id}
                to={`/subject/${sub.id}`}
                className="bg-white rounded-[28px] p-6 border border-amber-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 hover:-translate-y-1 transition duration-300 flex items-start gap-4 group"
              >
                {/* Square Rounded Orange Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-600 to-orange-500 text-white flex items-center justify-center font-bold text-2xl shadow-md shrink-0">
                  <BookOpen className="w-7 h-7" />
                </div>

                <div className="flex-1">
                  <span className="text-xs font-black text-orange-600 uppercase tracking-wider">{sub.code}</span>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-orange-600 transition mt-0.5">
                    {sub.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 font-medium">{sub.description}</p>
                  
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-slate-800">
                    <span>{sub.chaptersCount} Chapters</span>
                    <span className="text-orange-600 font-black group-hover:translate-x-1 transition flex items-center gap-1">
                      View Notes <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>



      </div>
    </div>
  );
};

export default BoardDetailsPage;
