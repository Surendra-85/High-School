import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  GraduationCap, BookOpen, Download, Bookmark, Clock, User, 
  Settings, Award, Flame, CheckCircle2, Star, Sparkles, ArrowRight, 
  Layers, ChevronRight, FileText, Bell, Target, TrendingUp, Edit2, ShieldCheck,
  LogOut, ArrowLeft, LayoutDashboard
} from 'lucide-react';
import { materialsData } from '../data/mockData';

const StudentDashboard = ({ onSelectMaterial }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bookmarks'); // bookmarks, downloads, progress, settings
  const [studentBoard, setStudentBoard] = useState(user?.targetBoard || 'UP Board (Uttar Pradesh)');
  const [studentClass, setStudentClass] = useState(user?.targetClass || 'High School (Class 10)');
  const [savedSuccess, setSavedSuccess] = useState('');

  // Bookmarked items
  const bookmarkedMaterials = materialsData.filter(m => 
    user?.bookmarks?.includes(m.id) || ['mat-01', 'mat-02', 'mat-05'].includes(m.id)
  );

  // Downloaded items
  const downloadedMaterials = materialsData.filter(m => 
    user?.downloads?.includes(m.id) || ['mat-01', 'mat-02'].includes(m.id)
  );

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSavedSuccess('Academic profile & target board preferences updated!');
    setTimeout(() => setSavedSuccess(''), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex text-slate-900 font-jakarta">
      
      {/* ========================================================================= */}
      {/* LEFT SIDEBAR NAVIGATION FOR STUDENT */}
      {/* ========================================================================= */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 shadow-sm z-20">
        
        <div>
          {/* Brand Header */}
          <div className="h-20 border-b border-slate-100 flex items-center px-6 gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-600 flex items-center justify-center text-white font-bold shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-base font-extrabold tracking-tight text-slate-900">Student Portal</span>
              <p className="text-[10px] text-orange-600 font-bold uppercase tracking-wider">EduBoard India</p>
            </div>
          </div>

          {/* Student Profile Quick Badge */}
          <div className="p-4 border-b border-slate-100 flex items-center gap-3">
            <img
              src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"}
              alt={user?.name}
              className="w-10 h-10 rounded-xl object-cover border border-orange-300 shadow-sm"
            />
            <div className="min-w-0">
              <h4 className="text-xs font-extrabold text-slate-900 truncate">{user?.name || "Aarav Sharma"}</h4>
              <p className="text-[10px] text-slate-500 truncate">{studentClass}</p>
            </div>
          </div>

          {/* Vertical Navigation Links */}
          <nav className="p-3 space-y-1 text-xs font-semibold">
            {[
              { id: 'bookmarks', label: 'Bookmarked Notes', icon: Bookmark, count: bookmarkedMaterials.length },
              { id: 'downloads', label: 'Downloaded PDFs', icon: Download, count: downloadedMaterials.length },
              { id: 'progress', label: '2026 Exam Tracker', icon: Target },
              { id: 'settings', label: 'Profile & Board Settings', icon: Settings },
            ].map(item => {
              const Icon = item.icon;
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl transition ${
                    active
                      ? 'bg-orange-50 text-orange-700 font-bold border border-orange-200 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${active ? 'text-orange-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.count !== undefined && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      active ? 'bg-orange-600 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Sidebar Actions */}
        <div className="p-4 border-t border-slate-100 space-y-2">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" /> Return to Home Page
          </Link>

          <button
            onClick={() => {
              logout();
              navigate('/login');
            }}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition"
          >
            <LogOut className="w-4 h-4" /> Sign Out Student
          </button>
        </div>

      </aside>

      {/* ========================================================================= */}
      {/* RIGHT MAIN SUITE CONTENT */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        
        {/* Top Header Bar */}
        <header className="h-20 bg-white border-b border-slate-200 px-6 sm:px-8 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-orange-100 text-orange-700 font-extrabold rounded-lg text-xs uppercase tracking-wider">
              {studentBoard}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-600 font-bold">{studentClass}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-xl text-xs font-extrabold text-amber-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" /> Goal: 95%+ Board Score
            </div>
          </div>
        </header>

        {/* MAIN BODY CONTENT */}
        <main className="p-6 sm:p-8 flex-1 space-y-8">
          
          {/* PROFILE BANNER */}
          <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 rounded-3xl p-6 sm:p-8 text-white shadow-lg">
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="px-2.5 py-0.5 bg-white/20 text-white font-extrabold rounded text-[10px] uppercase">STUDENT DASHBOARD</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">Welcome back, {user?.name || "Aarav Sharma"}!</h1>
                <p className="text-xs opacity-90 mt-1">Access your saved chapter notes, downloaded PYQ PDFs, and 2026 exam syllabus progress.</p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center">
                  <div className="text-xl font-extrabold">{bookmarkedMaterials.length}</div>
                  <div className="text-[10px] uppercase opacity-90 font-semibold">Saved Notes</div>
                </div>
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center">
                  <div className="text-xl font-extrabold text-amber-300">2026</div>
                  <div className="text-[10px] uppercase opacity-90 font-semibold">Exam Session</div>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 1: BOOKMARKS */}
          {activeTab === 'bookmarks' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">Bookmarked Chapter Notes & PYQs ({bookmarkedMaterials.length})</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Quick access to your saved study materials.</p>
                </div>
                <Link to="/" className="text-xs font-bold text-orange-600 hover:underline flex items-center gap-1">
                  Browse More Notes <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookmarkedMaterials.map(item => (
                  <div
                    key={item.id}
                    onClick={() => onSelectMaterial && onSelectMaterial(item)}
                    className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-200 flex flex-col justify-between cursor-pointer group shadow-sm bg-white"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-1 bg-orange-100 text-orange-700 font-bold rounded-lg text-xs">
                          {item.type}
                        </span>
                        <span className="text-xs text-amber-500 font-bold flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-amber-400" /> {item.rating}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition line-clamp-2 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-2 mb-4">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-semibold">{item.board.toUpperCase()} • {item.year}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onSelectMaterial) onSelectMaterial(item);
                        }}
                        className="px-3.5 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition flex items-center gap-1.5 shadow-sm"
                      >
                        <Download className="w-3.5 h-3.5" /> Read PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: DOWNLOADS */}
          {activeTab === 'downloads' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Downloaded PDF Vault ({downloadedMaterials.length})</h2>
                <p className="text-xs text-slate-500 mt-0.5">Offline study materials saved for printing and revision.</p>
              </div>

              <div className="space-y-4">
                {downloadedMaterials.map(item => (
                  <div key={item.id} className="p-5 bg-white border border-slate-200 rounded-3xl flex items-center justify-between shadow-sm hover:border-orange-300 transition">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{item.subject} • {item.board.toUpperCase()} • Session {item.year}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectMaterial && onSelectMaterial(item)}
                      className="px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl shadow-sm flex items-center gap-1.5"
                    >
                      <Download className="w-4 h-4" /> Open PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: EXAM TRACKER */}
          {activeTab === 'progress' && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">2026 Board Exam Tracker</h2>
                <p className="text-xs text-slate-500 mt-0.5">Track chapter completion for {studentClass}.</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
                <div className="flex items-center gap-3">
                  <Flame className="w-8 h-8 text-amber-200 animate-bounce" />
                  <div>
                    <h3 className="text-lg font-extrabold">2026 Board Exam Countdown</h3>
                    <p className="text-xs opacity-90">Theory papers start February 2026.</p>
                  </div>
                </div>
                <div className="px-5 py-2.5 bg-white text-orange-700 font-extrabold rounded-2xl text-base shadow-sm">
                  ⏳ ~200 Days Left
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Physics / Physical Science", progress: 82, completed: "11/14 Chapters", color: "bg-orange-600" },
                  { name: "Chemistry / Organic Chem", progress: 75, completed: "8/10 Chapters", color: "bg-amber-600" },
                  { name: "Mathematics / Algebra & Calculus", progress: 90, completed: "12/13 Chapters", color: "bg-emerald-600" },
                  { name: "Hindi / गद्य-काव्य एवं व्याकरण", progress: 95, completed: "17/18 Chapters", color: "bg-indigo-600" },
                ].map((sub, idx) => (
                  <div key={idx} className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-slate-900">{sub.name}</h4>
                      <span className="text-xs font-extrabold text-orange-600">{sub.progress}% Done</span>
                    </div>
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-2">
                      <div className={`${sub.color} h-full rounded-full transition-all duration-500`} style={{ width: `${sub.progress}%` }} />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                      <span>{sub.completed}</span>
                      <span className="text-emerald-700 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Syllabus On Track</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-orange-600" /> Student Profile & Board Settings
                </h2>
                <p className="text-xs text-slate-500 mt-1">Update your target board and class stream.</p>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Target Board</label>
                  <select
                    value={studentBoard}
                    onChange={(e) => setStudentBoard(e.target.value)}
                    className="w-full p-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold focus:outline-none focus:border-orange-600"
                  >
                    <option value="UP Board (Uttar Pradesh)">UP Board (UPMSP)</option>
                    <option value="CBSE (Central Board)">CBSE (Central Board)</option>
                    <option value="ICSE / ISC (CISCE)">ICSE / ISC (CISCE)</option>
                    <option value="Bihar Board (BSEB)">Bihar Board (BSEB)</option>
                    <option value="NIOS (Open Schooling)">NIOS (Open School)</option>
                    <option value="Rajasthan Board (RBSE)">Rajasthan Board (RBSE)</option>
                    <option value="MP Board (MPBSE)">MP Board (MPBSE)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Class Stream</label>
                  <select
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    className="w-full p-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold focus:outline-none focus:border-orange-600"
                  >
                    <option value="High School (Class 10)">High School (Class 9th-10th)</option>
                    <option value="Intermediate Science (Class 12)">Intermediate Science (PCM/PCB)</option>
                    <option value="Intermediate Commerce (Class 12)">Intermediate Commerce</option>
                    <option value="Intermediate Arts (Class 12)">Intermediate Arts</option>
                  </select>
                </div>

                {savedSuccess && (
                  <div className="p-3 bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-xl font-bold text-center">
                    {savedSuccess}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-extrabold rounded-xl shadow-md transition"
                >
                  Save Preferences
                </button>
              </form>
            </div>
          )}

        </main>

      </div>

    </div>
  );
};

export default StudentDashboard;
