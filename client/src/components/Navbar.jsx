import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  GraduationCap, User, ChevronDown, Menu, X, Sparkles,
  BookOpen, FileText, Bell, LogOut, ShieldCheck, UserPlus, LayoutDashboard,
  HelpCircle, Mail, Info, FileCode
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ onOpenAuth, onOpenSearch }) => {
  const { user, logout } = useAuth();
  const [class10Open, setClass10Open] = useState(false);
  const [class12Open, setClass12Open] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const class10Boards = [
    { name: "UP Board Class 10", path: "/board/up-board" },
    { name: "CBSE Class 10", path: "/board/cbse" },
    { name: "Bihar Board Class 10", path: "/board/bihar-board" },
    { name: "ICSE Class 10", path: "/board/icse" },
    { name: "NIOS Class 10", path: "/board/nios" },
  ];

  const class12Streams = [
    { name: "Class 12 Science (PCM/PCB)", path: "/board/up-board" },
    { name: "Class 12 Commerce", path: "/board/cbse" },
    { name: "Class 12 Arts & Humanities", path: "/board/bihar-board" },
    { name: "Class 12 ISC Board", path: "/board/icse" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#faf8f5]/95 backdrop-blur-md border-b border-amber-200/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-600 to-orange-500 p-0.5 shadow-md group-hover:scale-105 transition transform">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-orange-600 font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>
          <div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition uppercase">
                STUDY
              </span>
              <span className="text-[11px] font-black tracking-[0.25em] text-orange-600 uppercase mt-0.5">
                GROUP
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links matching Screenshot + Blog */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-extrabold text-slate-700">

          {/* 1. Home */}
          <Link
            to="/"
            className={`py-2 relative transition ${isActive('/') ? 'text-orange-600' : 'hover:text-orange-600'}`}
          >
            Home
            {isActive('/') && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />}
          </Link>

          {/* 2. Class 10 Dropdown */}
          <div className="relative" onMouseEnter={() => setClass10Open(true)} onMouseLeave={() => setClass10Open(false)}>
            <button className="flex items-center gap-1 py-2 hover:text-orange-600 transition">
              Class 10 <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {class10Open && (
              <div className="absolute top-full left-0 w-52 bg-white border border-amber-200 rounded-2xl p-3 shadow-xl animate-fadeIn space-y-1.5 z-50">
                {class10Boards.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setClass10Open(false)}
                    className="block p-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-orange-50 hover:text-orange-600 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 3. Class 12 Dropdown */}
          <div className="relative" onMouseEnter={() => setClass12Open(true)} onMouseLeave={() => setClass12Open(false)}>
            <button className="flex items-center gap-1 py-2 hover:text-orange-600 transition">
              Class 12 <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {class12Open && (
              <div className="absolute top-full left-0 w-60 bg-white border border-amber-200 rounded-2xl p-3 shadow-xl animate-fadeIn space-y-1.5 z-50">
                {class12Streams.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setClass12Open(false)}
                    className="block p-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-orange-50 hover:text-orange-600 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 4. Notes */}
          <Link
            to="/subject/hs-science"
            className={`py-2 relative transition ${isActive('/subject/hs-science') ? 'text-orange-600' : 'hover:text-orange-600'}`}
          >
            Notes
            {isActive('/subject/hs-science') && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />}
          </Link>

          {/* 5. Previous Papers */}
          <Link
            to="/notices"
            className={`py-2 relative transition ${isActive('/notices') ? 'text-orange-600' : 'hover:text-orange-600'}`}
          >
            Previous Papers
            {isActive('/notices') && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />}
          </Link>

          {/* 6. Quiz / Model Papers */}
          <Link
            to="/notices"
            className={`py-2 relative transition ${isActive('/notices') ? 'text-orange-600' : 'hover:text-orange-600'}`}
          >
            Quiz
          </Link>

          {/* 7. NCERT */}
          <Link
            to="/subject/hs-math"
            className={`py-2 relative transition ${isActive('/subject/hs-math') ? 'text-orange-600' : 'hover:text-orange-600'}`}
          >
            NCERT
            {isActive('/subject/hs-math') && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />}
          </Link>

          {/* 8. Blog */}
          <Link
            to="/blog"
            className={`py-2 relative transition ${isActive('/blog') ? 'text-orange-600' : 'hover:text-orange-600'}`}
          >
            Blog
            {isActive('/blog') && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />}
          </Link>

          {/* 9. Contact */}
          <Link
            to="/contact"
            className={`py-2 relative transition ${isActive('/contact') ? 'text-orange-600' : 'hover:text-orange-600'}`}
          >
            Contact
            {isActive('/contact') && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />}
          </Link>

        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">

          {/* Profile Button or Sign In Pill Button */}
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 px-3.5 bg-white border border-amber-200 hover:border-orange-500/40 rounded-full text-xs font-bold text-slate-900 transition shadow-sm"
              >
                <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full object-cover" />
                <span>{user.name.split(' ')[0]}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* DROPDOWN MENU */}
              {profileDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-amber-200/80 rounded-2xl p-2 shadow-2xl animate-fadeIn z-50">
                  <Link
                    to={user.role === 'admin' ? '/admin' : '/dashboard'}
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-800 hover:bg-orange-50 hover:text-orange-600 transition"
                  >
                    <LayoutDashboard className="w-4 h-4 text-orange-600" />
                    <span>My Profile</span>
                  </Link>

                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      logout();
                      navigate('/');
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition"
                  >
                    <LogOut className="w-4 h-4 text-rose-600" />
                    <span>Logout Account</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-6 py-2.5 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white text-xs font-extrabold rounded-full shadow-md shadow-orange-600/20 transition transform active:scale-95 flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5" /> Login
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 bg-white border border-amber-200 rounded-xl text-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-amber-200 p-5 space-y-3 animate-fadeIn text-xs font-extrabold">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-slate-900 py-1">Home</Link>
          <Link to="/subject/hs-science" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 py-1">Notes</Link>
          <Link to="/notices" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 py-1">Previous Papers</Link>
          <Link to="/subject/hs-math" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 py-1">NCERT</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 py-1">Blog</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 py-1">Contact</Link>
          <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block text-orange-600 py-1">Login</Link>
        </div>
      )}

      {/* Wavy Decorative Bottom Separator Line */}
      <div className="w-full overflow-hidden leading-none h-1.5 text-amber-200/60">
        <svg viewBox="0 0 1200 12" preserveAspectRatio="none" className="w-full h-full fill-current">
          <path d="M0,0 C150,12 350,-12 500,0 C650,12 850,-12 1000,0 C1150,12 1200,0 1200,0 L1200,12 L0,12 Z" />
        </svg>
      </div>

    </header>
  );
};

export default Navbar;
