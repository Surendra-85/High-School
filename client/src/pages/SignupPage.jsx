import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GraduationCap, Mail, Lock, User, BookOpen, ArrowRight, Sparkles, CheckCircle2, ArrowLeft } from 'lucide-react';

const SignupPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targetBoard, setTargetBoard] = useState('UP Board (Uttar Pradesh)');
  const [targetClass, setTargetClass] = useState('High School (Class 10)');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await login(email, password, 'student');
    setLoading(false);
    if (res?.success) {
      setStatusMsg('Student Account Created Successfully! Redirecting...');
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
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/50" />

        {/* Top Header */}
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-950/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800 transition">
            <ArrowLeft className="w-3.5 h-3.5 text-orange-400" /> Back to Home
          </Link>
        </div>

        {/* Middle Content */}
        <div className="relative z-10 my-auto py-12 max-w-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/30 border border-orange-500/40 text-orange-300 rounded-full text-xs font-extrabold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> FREE STUDENT REGISTRATION
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Join 500,000+ Board Exam Aspirants Nationwide
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed mb-8">
            Create your free account today to bookmark chapter notes, download solved previous year question papers, and receive instant exam datesheet alerts.
          </p>

          <div className="space-y-3 text-xs font-semibold text-slate-200">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Tailored for UP Board, CBSE, Bihar Board, ICSE, NIOS & State Boards</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
              <span>High School (9th-10th) & Intermediate (11th-12th Science/Commerce/Arts)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Zero Subscription Fees • 100% Free Educational Platform</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 text-xs text-slate-400 font-medium">
          © {new Date().getFullYear()} EDUBOARD INDIA. All Education Boards Unified.
        </div>

      </div>

      {/* RIGHT SIDE: Student Registration Form */}
      <div className="lg:w-1/2 bg-white flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-6">
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 text-orange-600 mb-3 shadow-inner">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create Free Account</h2>
            <p className="text-xs text-slate-500 mt-1">Register in 30 seconds to access all study notes & PYQs</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
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
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-semibold shadow-sm"
                />
              </div>
            </div>

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
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-semibold shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Create Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-semibold shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Education Board</label>
                <select
                  value={targetBoard}
                  onChange={(e) => setTargetBoard(e.target.value)}
                  className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold focus:outline-none focus:border-orange-600 shadow-sm"
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
                <label className="block font-bold text-slate-700 mb-1">Class & Stream</label>
                <select
                  value={targetClass}
                  onChange={(e) => setTargetClass(e.target.value)}
                  className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold focus:outline-none focus:border-orange-600 shadow-sm"
                >
                  <option value="High School (Class 10)">High School (Class 9th-10th)</option>
                  <option value="Intermediate Science (Class 12)">Inter Science (PCM/PCB)</option>
                  <option value="Intermediate Commerce (Class 12)">Inter Commerce</option>
                  <option value="Intermediate Arts (Class 12)">Inter Arts</option>
                </select>
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
              {loading ? 'Registering Account...' : 'Create Free Student Account'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Bottom Actions */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={triggerQuickStudentDemo}
              className="w-full py-3 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl text-xs font-bold text-orange-700 transition flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-500" /> Instant Demo Student Account
            </button>

            <div className="flex items-center justify-between text-xs pt-2">
              <span className="text-slate-500 font-medium">Already registered?</span>
              <Link to="/login" className="font-extrabold text-orange-600 hover:underline">
                Sign In to Account →
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SignupPage;
