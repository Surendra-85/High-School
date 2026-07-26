import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Lock, Mail, ArrowRight, ArrowLeft, Sparkles, GraduationCap } from 'lucide-react';

const StaffLoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@eduboard.in');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await login(email, password, 'admin');
    setLoading(false);
    if (res?.success) {
      setStatusMsg('Authenticated as System Director! Redirecting to Admin Suite...');
      setTimeout(() => {
        navigate('/admin');
      }, 800);
    }
  };

  const triggerQuickAdminDemo = async () => {
    setLoading(true);
    const res = await login('admin@eduboard.in', 'password123', 'admin');
    setLoading(false);
    if (res?.success) {
      setStatusMsg('Demo System Director Login Active! Redirecting...');
      setTimeout(() => {
        navigate('/admin');
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        
        <Link to="/" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-orange-600 mb-6">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Student Home
        </Link>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 text-orange-600 mb-3 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-orange-700" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            EduBoard Admin Gateway
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Exclusive System Management Portal for Directors & Administrators
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-2xl border border-slate-200 rounded-3xl sm:px-10">
          
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                System Administrator Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="admin@eduboard.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Admin Security Password</label>
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
              {loading ? 'Authenticating...' : 'Enter Admin Control Panel'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Admin Demo Trigger */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <button
              type="button"
              onClick={triggerQuickAdminDemo}
              className="w-full py-3 px-3 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl text-xs font-bold text-orange-700 transition flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-500" /> Instant 1-Click Demo Admin Login
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default StaffLoginPage;
