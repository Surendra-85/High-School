import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Upload, Plus, FileText, CheckCircle2, BookOpen, Layers, Sparkles } from 'lucide-react';
import { materialsData } from '../data/mockData';

const TeacherDashboard = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: '',
    board: 'up-board',
    level: 'Intermediate',
    stream: 'Science',
    subject: 'Physics (भौतिक विज्ञान)',
    type: 'Handwritten Notes',
    year: '2026',
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: '',
    tags: 'Physics, Formula Sheet, 2026 Board'
  });
  const [status, setStatus] = useState('');
  const [materials, setMaterials] = useState(materialsData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMat = {
      id: "mat_" + Date.now(),
      title: form.title,
      board: form.board,
      level: form.level,
      stream: form.stream,
      subject: form.subject,
      type: form.type,
      year: Number(form.year),
      fileUrl: form.fileUrl,
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80",
      rating: 5.0,
      views: 1,
      downloadsCount: 0,
      author: user?.name || "Senior Faculty",
      tags: form.tags.split(',').map(t => t.trim()),
      description: form.description || "Teacher uploaded official study note."
    };

    setMaterials([newMat, ...materials]);
    setStatus('Study material published successfully!');
    setForm({ ...form, title: '', description: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="min-h-screen bg-white pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="p-8 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 rounded-3xl mb-10 shadow-lg text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="px-3 py-1 bg-white/20 font-extrabold rounded text-[10px] uppercase">
              FACULTY PORTAL
            </span>
            <h1 className="text-3xl font-extrabold mt-1">Teacher Upload Center</h1>
            <p className="text-sm opacity-90 mt-1">Publish verified notes, PYQs, and model question papers to EduBoard students.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Upload Form */}
          <div className="lg:col-span-1 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5 text-orange-600" /> Upload New Material
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Class 12 Physics Formula Book"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-orange-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Target Board</label>
                  <select
                    value={form.board}
                    onChange={(e) => setForm({ ...form, board: e.target.value })}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none"
                  >
                    <option value="up-board">UP MSP (UP Board)</option>
                    <option value="cbse">CBSE (Central)</option>
                    <option value="icse">ICSE / ISC</option>
                    <option value="bihar-board">Bihar Board</option>
                    <option value="nios">NIOS Open</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Level</label>
                  <select
                    value={form.level}
                    onChange={(e) => setForm({ ...form, level: e.target.value })}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none"
                  >
                    <option value="High School">High School (Class 9-10)</option>
                    <option value="Intermediate">Intermediate (Class 11-12)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Material Type</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none"
                  >
                    <option value="Handwritten Notes">Handwritten Notes</option>
                    <option value="Previous Papers">Previous Papers (PYQ)</option>
                    <option value="Question Bank">Question Bank</option>
                    <option value="Model Papers">Model Papers</option>
                    <option value="Books">Textbooks</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Session Year</label>
                  <input
                    type="number"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">PDF File URL</label>
                <input
                  type="url"
                  required
                  value={form.fileUrl}
                  onChange={(e) => setForm({ ...form, fileUrl: e.target.value })}
                  className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Description</label>
                <textarea
                  rows="3"
                  placeholder="Summary of topics covered..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none"
                />
              </div>

              {status && (
                <div className="p-3 bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl font-bold text-center">
                  {status}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition"
              >
                <Plus className="w-4 h-4" /> Publish Material
              </button>
            </form>
          </div>

          {/* Published Materials List */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Published Academic Materials ({materials.length})</h2>
            
            <div className="space-y-3">
              {materials.map((m) => (
                <div key={m.id} className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center justify-between shadow-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold uppercase rounded">
                        {m.type}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">• {m.board.toUpperCase()}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{m.title}</h4>
                  </div>
                  <span className="text-xs text-emerald-700 font-bold">Active</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TeacherDashboard;
