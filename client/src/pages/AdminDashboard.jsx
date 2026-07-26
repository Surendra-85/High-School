import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Layers, BookOpen, Upload, Users, BarChart3, Settings, 
  Plus, Edit, Trash2, Search, Bell, ShieldCheck, LogOut, ArrowUpRight, 
  TrendingUp, Download, Eye, FileText, CheckCircle2, ChevronRight, Filter, Sparkles, FolderPlus, ArrowLeft
} from 'lucide-react';
import { boardsData, materialsData, testUsersData, subjectsData } from '../data/mockData';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview'); // overview, boards, subjects, materials, users, upload
  const [boards, setBoards] = useState(boardsData);
  const [materials, setMaterials] = useState(materialsData);
  const [users, setUsers] = useState(testUsersData);
  const [subjects, setSubjects] = useState(subjectsData);
  const navigate = useNavigate();

  // Search in Admin
  const [searchQuery, setSearchQuery] = useState('');

  // Upload Form State
  const [uploadForm, setUploadForm] = useState({
    title: '',
    board: 'up-board',
    level: 'Intermediate',
    stream: 'Science',
    subject: 'Physics (भौतिक विज्ञान)',
    type: 'Handwritten Notes',
    year: '2026',
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80',
    description: '',
    tags: 'Physics, 2026 Exam, Formula Sheet'
  });
  const [uploadStatus, setUploadStatus] = useState('');

  // Add Board Form State
  const [showBoardModal, setShowBoardModal] = useState(false);
  const [newBoard, setNewBoard] = useState({ name: '', code: '', state: '', studentsCount: '100K+' });

  // Upload handler
  const handleUploadSubmit = (e) => {
    e.preventDefault();
    const created = {
      id: "mat_" + Date.now(),
      title: uploadForm.title,
      board: uploadForm.board,
      level: uploadForm.level,
      stream: uploadForm.stream,
      subject: uploadForm.subject,
      type: uploadForm.type,
      year: Number(uploadForm.year),
      fileUrl: uploadForm.fileUrl,
      thumbnail: uploadForm.thumbnail,
      rating: 5.0,
      views: 1,
      downloadsCount: 0,
      author: "System Admin",
      tags: uploadForm.tags.split(',').map(t => t.trim()),
      description: uploadForm.description || "Official study note uploaded by System Administrator."
    };
    setMaterials([created, ...materials]);
    setUploadStatus('Material published to platform successfully!');
    setUploadForm({ ...uploadForm, title: '', description: '' });
    setTimeout(() => {
      setUploadStatus('');
      setActiveTab('materials');
    }, 1200);
  };

  const handleAddBoard = (e) => {
    e.preventDefault();
    const boardItem = {
      id: newBoard.code.toLowerCase() + '-board',
      name: newBoard.name,
      code: newBoard.code,
      state: newBoard.state,
      logo: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=150&q=80",
      banner: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      studentsCount: newBoard.studentsCount,
      subjectsCount: 15,
      description: `Official State Board of ${newBoard.state}.`,
      established: 2026,
      isPopular: false
    };
    setBoards([...boards, boardItem]);
    setNewBoard({ name: '', code: '', state: '', studentsCount: '100K+' });
    setShowBoardModal(false);
  };

  const handleDeleteBoard = (id) => {
    setBoards(boards.filter(b => b.id !== id));
  };

  const handleDeleteMaterial = (id) => {
    setMaterials(materials.filter(m => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex text-slate-900 font-jakarta">
      
      {/* ========================================================================= */}
      {/* SIDEBAR NAVIGATION */}
      {/* ========================================================================= */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 shadow-sm z-20">
        
        <div>
          {/* Brand Header */}
          <div className="h-20 border-b border-slate-100 flex items-center px-6 gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-600 flex items-center justify-center text-white font-bold shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-base font-extrabold tracking-tight text-slate-900">EduBoard Admin</span>
              <p className="text-[10px] text-orange-600 font-bold uppercase tracking-wider">Director Suite</p>
            </div>
          </div>

          {/* Upload Button in Sidebar */}
          <div className="p-4">
            <button
              onClick={() => setActiveTab('upload')}
              className="w-full py-3 px-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold rounded-xl text-xs shadow-md shadow-orange-600/20 flex items-center justify-center gap-2 transition"
            >
              <Upload className="w-4 h-4" /> Upload Material
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="px-3 space-y-1 text-xs font-semibold">
            {[
              { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard },
              { id: 'upload', label: 'Upload Materials', icon: Upload },
              { id: 'materials', label: 'Manage All Materials', icon: FileText, count: materials.length },
              { id: 'boards', label: 'Manage Boards (20+)', icon: Layers, count: boards.length },
              { id: 'subjects', label: 'Classes & Subjects', icon: BookOpen, count: subjects.length },
              { id: 'users', label: 'User Roles & Access', icon: Users, count: users.length },
            ].map(item => {
              const Icon = item.icon;
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl transition ${
                    active
                      ? 'bg-orange-50 text-orange-700 font-bold border border-orange-200'
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

        {/* Footer / Exit Sidebar */}
        <div className="p-4 border-t border-slate-100 space-y-2">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" /> Return to Website
          </Link>
          <button
            onClick={() => navigate('/login')}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition"
          >
            <LogOut className="w-4 h-4" /> Sign Out Admin
          </button>
        </div>

      </aside>

      {/* ========================================================================= */}
      {/* MAIN CONTENT SUITE */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        
        {/* TOP BAR */}
        <header className="h-20 bg-white border-b border-slate-200 px-6 sm:px-8 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          
          {/* Top Bar Search */}
          <div className="relative w-72 sm:w-96">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search boards, materials, users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-600"
            />
          </div>

          {/* Top Bar Right User Badge */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-orange-600 relative bg-slate-50 rounded-xl border border-slate-200">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-orange-600 rounded-full" />
            </button>

            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                alt="System Admin"
                className="w-9 h-9 rounded-xl object-cover border border-orange-300"
              />
              <div className="hidden sm:block">
                <div className="text-xs font-bold text-slate-900">System Director</div>
                <div className="text-[10px] text-slate-500 font-semibold">admin@eduboard.in</div>
              </div>
            </div>
          </div>

        </header>

        {/* DASHBOARD BODY VIEWS */}
        <main className="p-6 sm:p-8 flex-1">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { label: "Active Boards", val: boards.length, change: "+2 New", icon: Layers, color: "text-orange-600" },
                  { label: "Published Materials", val: materials.length + 1500, change: "+14 Today", icon: BookOpen, color: "text-amber-600" },
                  { label: "Registered Students", val: "1.42M+", change: "+24.8%", icon: Users, color: "text-orange-700" },
                  { label: "Total Downloads", val: "2.85M+", change: "99.99% Uptime", icon: Download, color: "text-emerald-600" },
                ].map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div key={idx} className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-slate-500">{card.label}</span>
                        <Icon className={`w-5 h-5 ${card.color}`} />
                      </div>
                      <div className="text-3xl font-extrabold text-slate-900">{card.val}</div>
                      <div className="text-xs text-emerald-700 font-bold mt-2 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> {card.change}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Banner */}
              <div className="p-8 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 rounded-3xl text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="px-2.5 py-0.5 bg-white/20 text-white font-extrabold rounded text-[10px] uppercase">QUICK ACTION</span>
                  <h2 className="text-2xl font-extrabold mt-1">Upload New Board Notes or Model Papers</h2>
                  <p className="text-xs opacity-90 mt-1">Add handwritten notes, PDF textbooks or solved PYQs for UP MSP, CBSE, Bihar Board & State Boards.</p>
                </div>
                <button
                  onClick={() => setActiveTab('upload')}
                  className="px-6 py-3.5 bg-white text-orange-700 hover:bg-orange-50 font-extrabold rounded-xl text-xs shadow-md transition shrink-0 flex items-center gap-2"
                >
                  <Upload className="w-4 h-4" /> Go to Upload Form
                </button>
              </div>

              {/* Recent Uploads Table */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-slate-900">Recent Materials Published</h3>
                  <button onClick={() => setActiveTab('materials')} className="text-xs font-bold text-orange-600 hover:underline">View All →</button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-slate-200 text-slate-500 uppercase font-bold">
                      <tr>
                        <th className="py-3 px-4">Title</th>
                        <th className="py-3 px-4">Board</th>
                        <th className="py-3 px-4">Type</th>
                        <th className="py-3 px-4">Year</th>
                        <th className="py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      {materials.slice(0, 5).map((m) => (
                        <tr key={m.id} className="hover:bg-orange-50/40 transition">
                          <td className="py-3.5 px-4 font-bold text-slate-900">{m.title}</td>
                          <td className="py-3.5 px-4"><span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded font-bold uppercase">{m.board}</span></td>
                          <td className="py-3.5 px-4">{m.type}</td>
                          <td className="py-3.5 px-4 font-semibold">{m.year}</td>
                          <td className="py-3.5 px-4">
                            <button onClick={() => handleDeleteMaterial(m.id)} className="text-rose-600 hover:underline font-bold">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: UPLOAD FORM */}
          {activeTab === 'upload' && (
            <div className="max-w-3xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Upload className="w-6 h-6 text-orange-600" /> Upload Study Material
                </h2>
                <p className="text-xs text-slate-500 mt-1">Publish verified chapter notes, textbooks, PYQs or model papers</p>
              </div>

              <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Material Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Class 12 Physics Complete Handwritten Notes 2026"
                    value={uploadForm.title}
                    onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold focus:outline-none focus:border-orange-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Education Board</label>
                    <select
                      value={uploadForm.board}
                      onChange={(e) => setUploadForm({ ...uploadForm, board: e.target.value })}
                      className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold focus:outline-none"
                    >
                      <option value="up-board">UP MSP (UP Board)</option>
                      <option value="cbse">CBSE (Central)</option>
                      <option value="icse">ICSE / ISC</option>
                      <option value="bihar-board">Bihar Board (BSEB)</option>
                      <option value="nios">NIOS Open Board</option>
                      <option value="rbse">Rajasthan (RBSE)</option>
                      <option value="mp-board">MP Board</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Class Level</label>
                    <select
                      value={uploadForm.level}
                      onChange={(e) => setUploadForm({ ...uploadForm, level: e.target.value })}
                      className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold focus:outline-none"
                    >
                      <option value="High School">High School (Class 9-10)</option>
                      <option value="Intermediate">Intermediate (Class 11-12)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Material Type</label>
                    <select
                      value={uploadForm.type}
                      onChange={(e) => setUploadForm({ ...uploadForm, type: e.target.value })}
                      className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold focus:outline-none"
                    >
                      <option value="Handwritten Notes">Handwritten Notes</option>
                      <option value="Previous Papers">Previous Papers (PYQ)</option>
                      <option value="Question Bank">Question Bank</option>
                      <option value="Model Papers">Model Papers</option>
                      <option value="Books">Textbooks</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Session Year</label>
                    <input
                      type="number"
                      value={uploadForm.year}
                      onChange={(e) => setUploadForm({ ...uploadForm, year: e.target.value })}
                      className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Direct PDF Mirror URL</label>
                  <input
                    type="url"
                    required
                    value={uploadForm.fileUrl}
                    onChange={(e) => setUploadForm({ ...uploadForm, fileUrl: e.target.value })}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Description</label>
                  <textarea
                    rows="3"
                    placeholder="Short summary of chapters and topics covered..."
                    value={uploadForm.description}
                    onChange={(e) => setUploadForm({ ...uploadForm, description: e.target.value })}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold focus:outline-none"
                  />
                </div>

                {uploadStatus && (
                  <div className="p-3 bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-xl font-bold text-center">
                    {uploadStatus}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold rounded-xl shadow-md shadow-orange-600/20 flex items-center justify-center gap-2 transition"
                >
                  <Upload className="w-4 h-4" /> Publish Material to Platform
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: MANAGE MATERIALS */}
          {activeTab === 'materials' && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-extrabold text-slate-900">Manage Published Materials ({materials.length})</h2>
                <button onClick={() => setActiveTab('upload')} className="px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-xl flex items-center gap-1 shadow-sm">
                  <Plus className="w-4 h-4" /> Add Material
                </button>
              </div>

              <div className="space-y-3">
                {materials.map((m) => (
                  <div key={m.id} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold uppercase rounded">
                          {m.type}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">• {m.board.toUpperCase()}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{m.title}</h4>
                    </div>

                    <button
                      onClick={() => handleDeleteMaterial(m.id)}
                      className="px-3 py-1.5 bg-rose-100 text-rose-700 hover:bg-rose-600 hover:text-white text-xs font-bold rounded-xl transition"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MANAGE BOARDS */}
          {activeTab === 'boards' && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-extrabold text-slate-900">Manage Education Boards ({boards.length})</h2>
                <button onClick={() => setShowBoardModal(true)} className="px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-xl flex items-center gap-1 shadow-sm">
                  <Plus className="w-4 h-4" /> Add New Board
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {boards.map((b) => (
                  <div key={b.id} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 bg-orange-100 text-orange-700 font-bold rounded text-xs uppercase">{b.code}</span>
                        <span className="text-xs text-emerald-700 font-bold">{b.studentsCount} Students</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{b.name}</h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">{b.description}</p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-200 flex justify-end">
                      <button onClick={() => handleDeleteBoard(b.id)} className="text-xs font-bold text-rose-600 hover:underline">Delete Board</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SUBJECTS & CLASSES */}
          {activeTab === 'subjects' && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 animate-fadeIn">
              <h2 className="text-xl font-extrabold text-slate-900">High School & Intermediate Subject Registry ({subjects.length})</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subjects.map((sub) => (
                  <div key={sub.id} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-orange-600 uppercase">{sub.code} • {sub.level}</span>
                      <h4 className="text-sm font-bold text-slate-900 mt-0.5">{sub.name}</h4>
                      <p className="text-xs text-slate-500">{sub.chaptersCount} Chapters</p>
                    </div>
                    <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded text-xs font-bold">{sub.stream}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: USERS */}
          {activeTab === 'users' && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 animate-fadeIn">
              <h2 className="text-xl font-extrabold text-slate-900">Platform User Roles & Permissions</h2>
              
              <div className="space-y-3">
                {users.map((u, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={u.avatar} alt={u.name} className="w-10 h-10 rounded-xl object-cover" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{u.name}</h4>
                        <p className="text-xs text-slate-500">{u.email}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-lg uppercase ${
                      u.role === 'admin' ? 'bg-rose-100 text-rose-700 border border-rose-200' :
                      u.role === 'teacher' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                      'bg-orange-100 text-orange-700 border border-orange-200'
                    }`}>
                      {u.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>

      </div>

      {/* Add Board Modal */}
      {showBoardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Add New Education Board</h3>
            <form onSubmit={handleAddBoard} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Board Name</label>
                <input type="text" required placeholder="e.g. Goa Board of Secondary Education" value={newBoard.name} onChange={(e) => setNewBoard({ ...newBoard, name: e.target.value })} className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold" />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Board Code</label>
                <input type="text" required placeholder="e.g. GBSHSE" value={newBoard.code} onChange={(e) => setNewBoard({ ...newBoard, code: e.target.value })} className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold" />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">State / UT</label>
                <input type="text" required placeholder="e.g. Goa" value={newBoard.state} onChange={(e) => setNewBoard({ ...newBoard, state: e.target.value })} className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold" />
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowBoardModal(false)} className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold">Cancel</button>
                <button type="submit" className="flex-1 py-3 bg-orange-600 text-white rounded-xl font-bold shadow-md">Create Board</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;
