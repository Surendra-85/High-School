import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 text-center">
      <div className="max-w-md bg-white border border-slate-200 p-8 rounded-3xl shadow-lg">
        <AlertTriangle className="w-16 h-16 text-orange-600 mx-auto mb-4 animate-bounce" />
        <h1 className="text-4xl font-extrabold text-slate-900">404</h1>
        <h2 className="text-xl font-bold text-slate-800 mt-2">Board Chapter Page Not Found</h2>
        <p className="text-xs text-slate-600 mt-2 mb-6">The page or material you are looking for might have been relocated to a different education board stream.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl text-xs shadow-md">
          <Home className="w-4 h-4" /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
