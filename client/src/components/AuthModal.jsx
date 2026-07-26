import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { X, GraduationCap, ArrowRight, Lock, Mail, User, BookOpen, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { boardsData } from '../data/mockData';

const AuthModal = ({ isOpen, onClose, onOpenStaffLogin }) => {
  const { login } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targetBoard, setTargetBoard] = useState('UP Board (Uttar Pradesh)');
  const [targetClass, setTargetClass] = useState('High School (Class 10)');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Student Login / Signup
    const res = await login(email, password, 'student');
    setLoading(false);
    if (res?.success) {
      setStatusMsg(isSignUp ? 'Student Account Created Successfully!' : 'Welcome back, Student!');
      setTimeout(() => {
        setStatusMsg('');
        onClose();
      }, 800);
    }
  };

  const triggerQuickStudentDemo = async () => {
    setLoading(true);
    const res = await login('student@eduboard.in', 'password123', 'student');
    setLoading(false);
    if (res?.success) {
      setStatusMsg('Welcome, Demo Student!');
      setTimeout(() => {
        setStatusMsg('');
        onClose();
      }, 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        
        {/* Decorative Top Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 text-orange-600 mb-3 shadow-inner">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {isSignUp ? 'Create Free Student Account' : 'Student Portal Sign In'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {isSignUp 
              ? 'Join 500,000+ students accessing free notes & solved board papers'
              : 'Sign in to access your saved notes, bookmarks, and downloads'}
          </p>
        </div>

        {/* Tab Switcher (Sign In vs Create Account) */}
        <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 mb-6">
          <button
            type="button"
            onClick={() => setIsSignUp(false)}
            className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
              !isSignUp
                ? 'bg-orange-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setIsSignUp(true)}
            className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
              isSignUp
                ? 'bg-orange-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          {isSignUp && (
            <div>
              <label className="block font-bold text-slate-700 mb-1">Student Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block font-bold text-slate-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="email"
                required
                placeholder="student@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
              />
            </div>
          </div>

          {isSignUp && (
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Select Education Board</label>
                <select
                  value={targetBoard}
                  onChange={(e) => setTargetBoard(e.target.value)}
                  className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-orange-600"
                >
                  <option value="UP Board (Uttar Pradesh)">UP MSP (UP Board)</option>
                  <option value="CBSE (Central Board)">CBSE (Central)</option>
                  <option value="ICSE / ISC (CISCE)">ICSE / ISC</option>
                  <option value="Bihar Board (BSEB)">Bihar Board (BSEB)</option>
                  <option value="NIOS (Open Schooling)">NIOS Open</option>
                  <option value="Rajasthan Board (RBSE)">Rajasthan (RBSE)</option>
                  <option value="MP Board (MPBSE)">MP Board</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Target Class Stream</label>
                <select
                  value={targetClass}
                  onChange={(e) => setTargetClass(e.target.value)}
                  className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-orange-600"
                >
                  <option value="High School (Class 10)">High School (Class 9th & 10th)</option>
                  <option value="Intermediate Science (Class 12)">Intermediate Science (PCM/PCB)</option>
                  <option value="Intermediate Commerce (Class 12)">Intermediate Commerce</option>
                  <option value="Intermediate Arts (Class 12)">Intermediate Arts</option>
                </select>
              </div>
            </div>
          )}

          {statusMsg && (
            <div className="p-3 bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-xl text-xs text-center font-bold">
              {statusMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold rounded-xl text-xs shadow-md shadow-orange-600/20 flex items-center justify-center gap-2 transition"
          >
            {loading ? 'Authenticating...' : isSignUp ? 'Create Free Account' : 'Sign In as Student'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Demo Student Button */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={triggerQuickStudentDemo}
            className="flex-1 py-2.5 px-3 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl text-xs font-bold text-orange-700 transition flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Instant Demo Student Login
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              if (onOpenStaffLogin) onOpenStaffLogin();
            }}
            className="text-[11px] font-semibold text-slate-500 hover:text-orange-600 underline"
          >
            Teacher / Admin Login →
          </button>
        </div>

      </div>
    </div>
  );
};

export default AuthModal;
