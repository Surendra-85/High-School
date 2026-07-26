import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GraduationCap, Mail, Lock, ArrowRight, Sparkles, Star, CheckCircle2, ArrowLeft } from 'lucide-react';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await login(email, password, 'student');
    setLoading(false);
    if (res?.success) {
      setStatusMsg('Welcome back! Redirecting to Student Portal...');
      setTimeout(() => navigate('/dashboard'), 800);
    }
  };

  const triggerQuickStudentDemo = async () => {
    setLoading(true);
    const res = await login('student@eduboard.in', 'password123', 'student');
    setLoading(false);
    if (res?.success) {
      setStatusMsg('Welcome, Demo Student! Redirecting...');
      setTimeout(() => navigate('/dashboard'), 800);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      
      {/* LEFT SIDE: Student Banner Image & Highlights */}
      <div className="relative lg:w-1/2 bg-slate-900 overflow-hidden flex flex-col justify-between p-8 sm:p-12 text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/50" />

        {/* Top Header */}
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-950/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800 transition">
            <ArrowLeft className="w-3.5 h-3.5 text-orange-400" /> Back to Home
          </Link>
        </div>

        {/* Middle Value Proposition */}
        <div className="relative z-10 my-auto py-12 max-w-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/30 border border-orange-500/40 text-orange-300 rounded-full text-xs font-extrabold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> EDUBOARD STUDENT PORTAL
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Welcome Back to India's #1 Board Prep Platform
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed mb-8">
            Access chapter-wise handwritten notes, NCERT textbook solutions, question banks, and solved 5-year PYQ papers across 20+ Education Boards.
          </p>

          {/* Key Bullet Highlights */}
          <div className="space-y-3 text-xs font-semibold text-slate-200">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
              <span>100% Free Access to UP Board, CBSE, Bihar Board & State Board Notes</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Direct PDF Download mirror for fast offline reading</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Verified solutions prepared by senior board paper examiners</span>
            </div>
          </div>
        </div>

        {/* Bottom Student Review Snippet */}
        <div className="relative z-10 p-4 bg-slate-950/70 border border-slate-800/80 rounded-2xl backdrop-blur-xl flex items-center gap-4">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Student Topper" className="w-12 h-12 rounded-xl object-cover border border-orange-500/40" />
          <div>
            <div className="flex items-center gap-1 text-amber-400 mb-0.5">
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
            </div>
            <p className="text-xs text-slate-200 font-semibold line-clamp-1">"EduBoard Notes helped me score 95% in Class 12 Physics!"</p>
            <p className="text-[10px] text-slate-400">• Aarav Sharma (Class 12 Topper)</p>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE: Student Login Form */}
      <div className="lg:w-1/2 bg-white flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 text-orange-600 mb-3 shadow-inner">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Student Sign In</h2>
            <p className="text-xs text-slate-500 mt-1">Enter your credentials to access your student dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1.5">Student Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="student@eduboard.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-semibold shadow-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-bold text-slate-700">Password</label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to registered student email!"); }} className="text-[11px] text-orange-600 hover:underline font-semibold">Forgot Password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-semibold shadow-sm"
                />
              </div>
            </div>

            {statusMsg && (
              <div className="p-3 bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-xl text-xs text-center font-bold">
                {statusMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold rounded-xl text-xs shadow-md shadow-orange-600/20 flex items-center justify-center gap-2 transition transform active:scale-95"
            >
              {loading ? 'Authenticating...' : 'Sign In as Student'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Instant Demo Student Login */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={triggerQuickStudentDemo}
              className="w-full py-3 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl text-xs font-bold text-orange-700 transition flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-500" /> Instant Demo Student Sign In
            </button>

            <div className="flex items-center justify-between text-xs pt-2">
              <span className="text-slate-500 font-medium">Don't have a student account?</span>
              <Link to="/signup" className="font-extrabold text-orange-600 hover:underline">
                Create Free Account →
              </Link>
            </div>

            <div className="text-center pt-2">
              <Link to="/staff-login" className="text-[11px] text-slate-400 hover:text-orange-600 underline font-semibold">
                Faculty / Teacher / Admin Access Gateway →
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LoginPage;
