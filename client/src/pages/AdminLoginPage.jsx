import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, KeyRound, ArrowLeft, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AdminLoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('admin@eduboard.in');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAdminLogin = async (e) => {
    if (e) e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await login(email, password, 'admin');
      navigate('/admin');
    } catch (err) {
      setError('Invalid Admin credentials. Please check password.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickDemoAdmin = async () => {
    setIsSubmitting(true);
    await login('admin@eduboard.in', 'admin123', 'admin');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-orange-950 text-white flex items-center justify-center p-4 sm:p-6 font-jakarta relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-orange-400 transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Public Portal
        </Link>

        {/* Executive Card Container */}
        <div className="bg-slate-900/90 border border-slate-800/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          
          {/* Header Icon & Title */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-orange-600 via-amber-600 to-orange-500 mx-auto flex items-center justify-center text-white shadow-xl shadow-orange-600/30">
              <ShieldCheck className="w-9 h-9" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 font-black text-[11px] rounded-xl uppercase tracking-wider mt-2">
              <Lock className="w-3 h-3" /> Secure Executive Access
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Admin Control Portal
            </h1>
            
            <p className="text-xs text-slate-400 font-medium">
              All Board Study Group • Administrator Login
            </p>
          </div>

          {/* Quick Demo Admin Login Button */}
          <button
            type="button"
            onClick={handleQuickDemoAdmin}
            className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black rounded-2xl transition duration-300 shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 text-sm transform active:scale-95"
          >
            <Sparkles className="w-4 h-4 fill-slate-950" />
            ⚡ Instant Demo Admin Login (1-Click)
          </button>

          <div className="flex items-center gap-3 text-slate-600 text-xs my-2">
            <div className="h-px bg-slate-800 flex-1" />
            <span>OR LOGIN WITH CREDENTIALS</span>
            <div className="h-px bg-slate-800 flex-1" />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-2xl text-rose-300 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-black uppercase text-slate-300 mb-1.5 tracking-wider">
                Admin Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@eduboard.in"
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl py-3 pl-10 pr-4 text-sm font-semibold text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase text-slate-300 mb-1.5 tracking-wider">
                Admin Security Password
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl py-3 pl-10 pr-4 text-sm font-semibold text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-2xl transition duration-300 shadow-md shadow-orange-600/30 flex items-center justify-center gap-2 text-sm transform active:scale-95"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Authenticating Admin...</span>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Enter Admin Dashboard
                </>
              )}
            </button>
          </form>

        </div>

      </div>

    </div>
  );
};

export default AdminLoginPage;
