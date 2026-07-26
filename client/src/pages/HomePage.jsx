import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, Sparkles, BookOpen, GraduationCap, FileText, ArrowRight, 
  Star, Download, Eye, Zap, ShieldCheck, CheckCircle2, TrendingUp, 
  Layers, Compass, Award, Flame, Users, Calendar, HelpCircle, ChevronDown, ChevronUp, Heart, PlayCircle,
  FileCheck, Trophy, Bell, ChevronRight, Target, Quote, Clock, Check, Ticket, Briefcase, FileBadge,
  ChevronLeft
} from 'lucide-react';
import AOS from 'aos';
import { boardsData, materialsData, noticesData, subjectsData } from '../data/mockData';

const HomePage = ({ onOpenAuth, onOpenSearch, onSelectMaterial }) => {
  const [selectedStateFilter, setSelectedStateFilter] = useState('All');
  const [typedText, setTypedText] = useState('');
  const [materials, setMaterials] = useState([]);
  const [openFaqIdx, setOpenFaqIdx] = useState(0);
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const navigate = useNavigate();

  // Initialize AOS Scroll Animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);

  // Slider items data
  const sliderSlides = [
    {
      tag: "VERIFIED CONTENT",
      title: "100% NCERT Aligned Study Material",
      desc: "Every concept, formula sheet, and diagram is mapped line-by-line with official 2026 NCERT & State Board syllabus.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      badge: "Class 10 & 12 Ready"
    },
    {
      tag: "HANDWRITTEN NOTES",
      title: "Step-by-Step Physics Derivations & Diagrams",
      desc: "Master complex electrostatics, optics, and organic reaction mechanisms with clean faculty handwritten notes.",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      badge: "Top Examiner Verified"
    },
    {
      tag: "BOARD EXAM PYQS",
      title: "5-Year Solved Board Question Papers (2022-2026)",
      desc: "Practice real past board paper questions with step-wise marking scheme answers for UP, CBSE, and Bihar Board.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      badge: "High-Speed PDF Download"
    },
    {
      tag: "CHAPTER QUIZZES",
      title: "Instant Chapterwise Online Quizzes",
      desc: "Test your speed and retention with chapter-wise objective quizzes and get instant scorecards with explanations.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      badge: "10,000+ Daily Attempts"
    }
  ];

  // Auto slide timer
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlideIdx((prev) => (prev + 1) % sliderSlides.length);
    }, 4500);
    return () => clearInterval(slideTimer);
  }, []);

  // Typing effect text
  useEffect(() => {
    const textOptions = [
      "UP Board & CBSE Master Notes", 
      "Free Solved PYQs (2022-2026)", 
      "Bihar & State Board Textbooks", 
      "NCERT Chapterwise Question Banks"
    ];
    let optionIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      const currentFullText = textOptions[optionIdx];
      if (!isDeleting) {
        setTypedText(currentFullText.substring(0, charIdx + 1));
        charIdx++;
        if (charIdx === currentFullText.length) {
          isDeleting = true;
          setTimeout(() => {}, 1200);
        }
      } else {
        setTypedText(currentFullText.substring(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          optionIdx = (optionIdx + 1) % textOptions.length;
        }
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  // Fetch materials from API or fallback
  useEffect(() => {
    fetch('/api/v1/materials')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data.length > 0) {
          setMaterials(data.data);
        } else {
          setMaterials(materialsData);
        }
      })
      .catch(() => setMaterials(materialsData));
  }, []);

  const filteredBoards = selectedStateFilter === 'All'
    ? boardsData
    : selectedStateFilter === 'Popular'
    ? boardsData.filter(b => b.isPopular)
    : boardsData.filter(b => b.state.includes(selectedStateFilter) || b.name.includes(selectedStateFilter));

  const homeFaqs = [
    {
      q: "Is EduBoard India 100% free for High School & Intermediate students?",
      a: "Yes! All handwritten notes, NCERT textbook solutions, model question papers, and solved PYQs (2022-2026) are completely free with zero hidden fees or paywalls."
    },
    {
      q: "Which Education Boards are available on this platform?",
      a: "EduBoard India supports all 20+ major boards including UPMSP (UP Board), CBSE, ICSE/ISC, BSEB (Bihar Board), NIOS Open School, RBSE (Rajasthan), MPBSE, MSBSHSE (Maharashtra), and all State Education Boards."
    },
    {
      q: "Can I download study notes for offline reading?",
      a: "Absolutely! Every study material card has a direct high-speed PDF download button allowing offline reading and printing."
    },
    {
      q: "How are the study notes prepared and verified?",
      a: "Our content is crafted by experienced faculty members, senior board paper examiners, and verified against the latest 2026 NCERT curriculum."
    }
  ];

  const toppersList = [
    {
      name: "Aarav Sharma",
      score: "96.4% UP Board 12th",
      subject: "Physics & Mathematics Topper",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote: "EduBoard's handwritten Physics formula sheets saved my revision time in the last 2 months before theory exams!"
    },
    {
      name: "Ananya Roy",
      score: "98.2% CBSE Class 10th",
      subject: "Science & English Topper",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      quote: "The NCERT chapter-wise question bank and 5-year solved papers gave me complete confidence in my board exam."
    },
    {
      name: "Rohan Kumar",
      score: "95.8% Bihar Board Inter",
      subject: "Chemistry & Biology Topper",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "The 100 objective model question paper sets for Bihar Board were identical to the real board exam questions!"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#faf8f5] text-slate-900 overflow-hidden font-jakarta">
      
      {/* Top Urgent Announcement Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white text-xs font-bold py-2.5 px-4 text-center flex items-center justify-center gap-2 shadow-sm relative z-30">
        <Flame className="w-4 h-4 text-amber-200 animate-bounce shrink-0" />
        <span>OFFICIAL ALERT: 2026 Board Exam Datesheets & Solved Sample Model Papers are now Live for All Boards!</span>
        <Link to="/notices" className="underline hover:text-amber-200 ml-2 font-extrabold hidden sm:inline">
          View Notices →
        </Link>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION WITH CLEAN WARM BACKGROUND & STUDENT BOY IMAGE */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-12 lg:pt-10 lg:pb-16 overflow-hidden">
        
        {/* Soft Background Warm Glow Blob */}
        <div className="absolute top-10 right-10 w-[550px] h-[450px] bg-gradient-to-bl from-orange-200/40 via-amber-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-[450px] h-[400px] bg-gradient-to-tr from-amber-200/30 via-yellow-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Content with AOS Animation */}
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              
              {/* Clean Rating Badge (No floating tilt, no icon overlap) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-amber-200 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span>4.95/5 Rating</span>
                <span className="text-slate-300">•</span>
                <span className="text-orange-700 font-extrabold">500,000+ Students</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Study Together. <br />
                <span className="text-gradient">Achieve Better.</span>
              </h1>

              {/* Typing Sub-headline */}
              <div className="h-8 flex items-center">
                <p className="text-base sm:text-lg font-bold text-slate-700">
                  Access <span className="text-orange-600 border-b-2 border-orange-500/60 pb-0.5">{typedText}</span>
                  <span className="animate-pulse text-orange-600 ml-1">|</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Free notes, NCERT solutions, previous year papers, chapter-wise quizzes and latest updates for High School & Intermediate students.
              </p>

              {/* Buttons: Explore Notes + Start Quiz */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/subject/hs-science"
                  className="px-8 py-4 bg-[#0f172a] hover:bg-orange-600 text-white font-extrabold rounded-2xl text-xs shadow-md shadow-glow-orange flex items-center gap-2 transition transform active:scale-95"
                >
                  <BookOpen className="w-4 h-4 text-orange-400" /> Explore Notes
                </Link>

                <Link
                  to="/notices"
                  className="px-8 py-4 bg-white border border-slate-300 hover:border-orange-500 text-slate-900 hover:text-orange-600 font-extrabold rounded-2xl text-xs shadow-sm flex items-center gap-2 transition transform active:scale-95"
                >
                  <Target className="w-4 h-4 text-orange-600" /> Start Quiz
                </Link>
              </div>

              {/* Student Community Avatars Stack */}
              <div className="flex items-center gap-3 pt-4 border-t border-amber-200/60">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student 1" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-xs" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Student 2" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-xs" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Student 3" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-xs" />
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Student 4" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-xs" />
                </div>
                <p className="text-xs text-slate-600 font-bold">
                  Join <span className="text-orange-600 font-black">20,000+ students</span> who are learning with us!
                </p>
              </div>

            </div>

            {/* Right Column: EXACT USER UPLOADED STUDENT BOY IMAGE WITH ANIMATED FLOATING STICKY NOTES */}
            <div className="lg:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0" data-aos="fade-left">
              <div className="relative w-full max-w-xl">
                
                {/* 1. Yellow Sticky Note (Top Left - Floating Animation) */}
                <div className="absolute -top-3 left-2 z-30 bg-[#fef08a] border border-amber-300 text-amber-950 p-3 rounded-xl shadow-md transform -rotate-6 w-32 text-[11px] font-bold leading-tight animate-float-slow">
                  <div>• Plan</div>
                  <div>• Study</div>
                  <div>• Practice</div>
                  <div>• Revise</div>
                  <span className="absolute -top-2 -right-2 text-base">💡</span>
                </div>

                {/* 2. Blue Sticky Note (Top Right - Floating Reverse Animation) */}
                <div className="absolute -top-4 right-4 z-30 bg-[#bae6fd] border border-sky-300 text-sky-950 p-2.5 rounded-xl shadow-md transform rotate-6 w-32 text-[10px] font-bold text-center animate-float-reverse">
                  Don't Stop Until You're Proud!
                  <div className="text-xs mt-0.5">🚀</div>
                </div>

                {/* 3. Pink Sticky Note (Far Right - Floating Animation) */}
                <div className="absolute top-28 -right-2 z-30 bg-[#fbcfe8] border border-pink-300 text-pink-950 p-3 rounded-xl shadow-md transform rotate-3 w-28 text-[11px] font-bold text-center animate-float-slow">
                  Focus <br /> Learn <br /> Succeed
                </div>

                {/* 4. EXACT UPLOADED STUDENT BOY IMAGE */}
                <div className="relative rounded-3xl overflow-hidden group shadow-lg">
                  <img
                    src="/student-hero-boy.jpg"
                    alt="Indian Boy Student Studying at Desk"
                    className="w-full h-auto max-h-[460px] object-cover rounded-3xl group-hover:scale-102 transition duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: HORIZONTAL QUICK FEATURE NAVIGATION CARDS ROW (WITH AOS) */}
      {/* ========================================================================= */}
      <section className="py-4" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Notes", desc: "Chapter-wise study material", icon: BookOpen, color: "bg-blue-100 text-blue-700", link: "/subject/hs-science" },
              { title: "Previous Papers", desc: "Download and practice PYQs", icon: FileText, color: "bg-emerald-100 text-emerald-700", link: "/notices" },
              { title: "NCERT", desc: "NCERT solutions chapter-wise", icon: GraduationCap, color: "bg-purple-100 text-purple-700", link: "/subject/hs-math" },
              { title: "Quiz", desc: "Test yourself with quizzes", icon: Target, color: "bg-amber-100 text-amber-700", link: "/notices" },
              { title: "Results", desc: "Check latest results", icon: Award, color: "bg-rose-100 text-rose-700", link: "/notices" },
              { title: "Updates", desc: "Latest news & datesheets", icon: Bell, color: "bg-orange-100 text-orange-700", link: "/notices" },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <Link
                  key={idx}
                  to={card.link}
                  className="p-4 bg-white border border-slate-200/80 rounded-2xl flex items-center gap-3 shadow-sm hover:border-orange-300 hover:shadow-md transition group"
                >
                  <div className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center shrink-0 font-bold`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900 group-hover:text-orange-600 transition">{card.title}</h4>
                    <p className="text-[10px] text-slate-500 line-clamp-1">{card.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2.5: LIVE NOTICES, DATESHEETS, ADMIT CARDS & RESULTS BULLETIN (WITH AOS) */}
      {/* ========================================================================= */}
      <section className="py-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-bold shadow-md shadow-orange-600/20">
                  <Bell className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">Live Official Updates Portal 2026</h3>
                  <p className="text-xs text-slate-500 font-semibold">Latest Exam Datesheets, Admit Cards, Board Results & Scholarship Notifications</p>
                </div>
              </div>

              <Link to="/notices" className="px-4 py-2 bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200 rounded-xl text-xs font-extrabold inline-flex items-center gap-1.5 transition">
                View All Notices <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4 Category Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              
              {/* Column 1: Datesheets & Timetables */}
              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-extrabold text-slate-900 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-600" /> Exam Datesheets
                  </span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-black rounded">2026</span>
                </div>

                <div className="space-y-2.5">
                  <Link to="/notices" className="block p-2.5 bg-white border border-slate-200 rounded-xl hover:border-orange-400 transition group">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                      <span>UPMSP Board</span>
                      <span className="text-emerald-600 font-extrabold">RELEASED</span>
                    </div>
                    <h5 className="font-bold text-slate-800 group-hover:text-orange-600 transition leading-snug">
                      UP Board Class 10 & 12 Final Time Table 2026 (PDF Download)
                    </h5>
                  </Link>

                  <Link to="/notices" className="block p-2.5 bg-white border border-slate-200 rounded-xl hover:border-orange-400 transition group">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                      <span>CBSE Board</span>
                      <span className="text-blue-600 font-extrabold">UPDATED</span>
                    </div>
                    <h5 className="font-bold text-slate-800 group-hover:text-orange-600 transition leading-snug">
                      CBSE Class 10th & 12th Theory Exam Dates Announced
                    </h5>
                  </Link>
                </div>
              </div>

              {/* Column 2: Admit Card Alerts */}
              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-extrabold text-slate-900 flex items-center gap-1.5">
                    <Ticket className="w-4 h-4 text-emerald-600" /> Admit Cards
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-black rounded">ACTIVE</span>
                </div>

                <div className="space-y-2.5">
                  <Link to="/notices" className="block p-2.5 bg-white border border-slate-200 rounded-xl hover:border-orange-400 transition group">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                      <span>UP Board</span>
                      <span className="text-emerald-600 font-extrabold">LINK LIVE</span>
                    </div>
                    <h5 className="font-bold text-slate-800 group-hover:text-orange-600 transition leading-snug">
                      UP MSP Roll Number & Admit Card Direct Portal Login
                    </h5>
                  </Link>

                  <Link to="/notices" className="block p-2.5 bg-white border border-slate-200 rounded-xl hover:border-orange-400 transition group">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                      <span>BSEB Bihar</span>
                      <span className="text-emerald-600 font-extrabold">AVAILABLE</span>
                    </div>
                    <h5 className="font-bold text-slate-800 group-hover:text-orange-600 transition leading-snug">
                      Bihar Board Matric / Inter Dummy Admit Card Released
                    </h5>
                  </Link>
                </div>
              </div>

              {/* Column 3: Board Exam Results */}
              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-extrabold text-slate-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-purple-600" /> Exam Results
                  </span>
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-[10px] font-black rounded">RESULTS</span>
                </div>

                <div className="space-y-2.5">
                  <Link to="/notices" className="block p-2.5 bg-white border border-slate-200 rounded-xl hover:border-orange-400 transition group">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                      <span>UPMSP Result</span>
                      <span className="text-orange-600 font-extrabold">COMING SOON</span>
                    </div>
                    <h5 className="font-bold text-slate-800 group-hover:text-orange-600 transition leading-snug">
                      UP Board 10th & 12th Result Check Direct Portal Link
                    </h5>
                  </Link>

                  <Link to="/notices" className="block p-2.5 bg-white border border-slate-200 rounded-xl hover:border-orange-400 transition group">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                      <span>CBSE Result</span>
                      <span className="text-slate-500 font-extrabold">ARCHIVE</span>
                    </div>
                    <h5 className="font-bold text-slate-800 group-hover:text-orange-600 transition leading-snug">
                      CBSE Class 10th & 12th Verification / Scrutiny Portal
                    </h5>
                  </Link>
                </div>
              </div>

              {/* Column 4: Jobs & Scholarships */}
              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-extrabold text-slate-900 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-amber-600" /> Scholarships & Jobs
                  </span>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-black rounded">SCHOLARSHIP</span>
                </div>

                <div className="space-y-2.5">
                  <Link to="/notices" className="block p-2.5 bg-white border border-slate-200 rounded-xl hover:border-orange-400 transition group">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                      <span>Govt Scholarship</span>
                      <span className="text-emerald-600 font-extrabold">OPEN</span>
                    </div>
                    <h5 className="font-bold text-slate-800 group-hover:text-orange-600 transition leading-snug">
                      NSP Post-Matric Scholarship 2026 Online Registration Form
                    </h5>
                  </Link>

                  <Link to="/notices" className="block p-2.5 bg-white border border-slate-200 rounded-xl hover:border-orange-400 transition group">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                      <span>National Olympiad</span>
                      <span className="text-emerald-600 font-extrabold">APPLY NOW</span>
                    </div>
                    <h5 className="font-bold text-slate-800 group-hover:text-orange-600 transition leading-snug">
                      National Science Talent Search Scholarship Scheme 2026
                    </h5>
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2.8: ALL INDIAN EDUCATION BOARDS DIRECTORY (WITH AOS) */}
      {/* ========================================================================= */}
      <section id="boards-section" className="py-12 bg-white border-y border-slate-200/80" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-extrabold text-orange-600 uppercase tracking-widest">STATE & NATIONAL BOARDS</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1 tracking-tight">Explore 20+ Education Boards</h2>
              <p className="text-sm text-slate-600 mt-1 font-medium">Official board syllabus, model question papers, and result announcements.</p>
            </div>

            {/* Filter Tabs */}
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
              {['All', 'Popular', 'Uttar Pradesh', 'Bihar', 'Rajasthan', 'All India'].map(filter => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedStateFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    selectedStateFilter === filter
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-orange-600 hover:border-orange-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Boards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBoards.map((board) => (
              <Link
                key={board.id}
                to={`/board/${board.id}`}
                className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-amber-200/80 flex flex-col justify-between group shadow-xs hover:shadow-xl hover:border-orange-300 transition duration-300 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1 bg-orange-100 text-orange-800 font-extrabold rounded-xl text-xs uppercase tracking-wider">
                      {board.code}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">Est. {board.established}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-orange-600 transition mb-2">
                    {board.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-6 font-medium">
                    {board.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-extrabold text-slate-900">{board.studentsCount}</span>
                    <span className="text-slate-400 ml-1 font-semibold">Active Students</span>
                  </div>

                  <div className="flex items-center gap-1 text-orange-600 font-extrabold group-hover:translate-x-1 transition">
                    Explore Board <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: EXPLORE BY CLASSES (Class 10 vs Class 12 Layout WITH AOS) */}
      {/* ========================================================================= */}
      <section className="py-14" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 font-extrabold text-[11px] uppercase tracking-widest rounded-full inline-block mb-2">
                ACADEMIC CURRICULUM
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Explore by Classes
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-semibold mt-2 sm:mt-0">
              Select your class to access chapter notes, NCERT solutions & PYQs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* CLASS 10 CARD */}
            <div className="bg-gradient-to-b from-white via-[#fffdfa] to-[#fef8f0] border border-amber-200/90 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 relative group overflow-hidden">
              
              {/* Corner Glow Blur Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3.5 py-1 bg-orange-600 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-xl shadow-sm">
                    CLASS 10TH HIGH SCHOOL
                  </span>
                  <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-lg border border-orange-200">
                    50+ Chapter Notes
                  </span>
                </div>

                <h3 className="text-3xl font-black text-slate-900 mb-1">Class 10 Board Vault</h3>
                <p className="text-xs text-slate-600 font-medium mb-6">Complete syllabus notes, NCERT solutions & 5-year solved question papers.</p>

                {/* Subject Items List */}
                <div className="space-y-2.5">
                  {[
                    { name: "Science", icon: "⚛️", chapters: "Physics • Chemistry • Biology", path: "/subject/hs-science" },
                    { name: "Mathematics", icon: "📐", chapters: "Algebra • Geometry • Trigonometry", path: "/subject/hs-math" },
                    { name: "Social Science", icon: "🌍", chapters: "History • Civics • Geography • Eco", path: "/board/cbse" },
                    { name: "English", icon: "📖", chapters: "First Flight • Footprints • Grammar", path: "/board/up-board" },
                    { name: "Hindi", icon: "🕉️", chapters: "Kavya • Gadya • Sanskrit • Vyakaran", path: "/board/bihar-board" },
                  ].map((sub, idx) => (
                    <Link
                      key={idx}
                      to={sub.path}
                      className="p-3.5 bg-white border border-amber-100 hover:border-orange-300 rounded-2xl flex items-center justify-between text-xs font-bold text-slate-800 hover:text-orange-600 shadow-xs hover:shadow transition group/item"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center text-sm font-extrabold shrink-0 group-hover/item:scale-110 transition">
                          {sub.icon}
                        </span>
                        <div>
                          <span className="text-slate-900 font-extrabold group-hover/item:text-orange-600 transition block">{sub.name}</span>
                          <span className="text-[10px] text-slate-400 font-medium">{sub.chapters}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover/item:text-orange-600 group-hover/item:translate-x-1 transition" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-amber-200/60 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Updated for 2026 Exams</span>
                <Link to="/board/cbse" className="px-6 py-3.5 bg-[#0f172a] hover:bg-orange-600 text-white font-extrabold rounded-2xl text-xs inline-flex items-center gap-2 shadow-md transition transform active:scale-95">
                  Browse Class 10 Notes →
                </Link>
              </div>
            </div>

            {/* CLASS 12 CARD */}
            <div className="bg-gradient-to-b from-white via-[#fffdfa] to-[#fef8f0] border border-amber-200/90 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 relative group overflow-hidden">
              
              {/* Corner Glow Blur Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3.5 py-1 bg-slate-900 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-xl shadow-sm">
                    CLASS 12TH INTERMEDIATE
                  </span>
                  <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-lg border border-orange-200">
                    100+ Derivation Sheets
                  </span>
                </div>

                <h3 className="text-3xl font-black text-slate-900 mb-1">Class 12 Board Vault</h3>
                <p className="text-xs text-slate-600 font-medium mb-6">Handwritten derivations, formula sheets, objective MCQs & sample papers.</p>

                {/* Subject Items List */}
                <div className="space-y-2.5">
                  {[
                    { name: "Physics", icon: "⚡", chapters: "Electrostatics • Optics • Magnetism", path: "/subject/inter-physics" },
                    { name: "Chemistry", icon: "🧪", chapters: "Organic • Inorganic • Physical", path: "/subject/inter-chemistry" },
                    { name: "Mathematics", icon: "📐", chapters: "Calculus • Vectors • Matrices", path: "/subject/inter-math" },
                    { name: "Biology", icon: "🌿", chapters: "Genetics • Ecology • Biotechnology", path: "/subject/inter-bio" },
                    { name: "English", icon: "📖", chapters: "Flamingo • Vistas • Writing Skills", path: "/board/up-board" },
                  ].map((sub, idx) => (
                    <Link
                      key={idx}
                      to={sub.path}
                      className="p-3.5 bg-white border border-amber-100 hover:border-orange-300 rounded-2xl flex items-center justify-between text-xs font-bold text-slate-800 hover:text-orange-600 shadow-xs hover:shadow transition group/item"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center text-sm font-extrabold shrink-0 group-hover/item:scale-110 transition">
                          {sub.icon}
                        </span>
                        <div>
                          <span className="text-slate-900 font-extrabold group-hover/item:text-orange-600 transition block">{sub.name}</span>
                          <span className="text-[10px] text-slate-400 font-medium">{sub.chapters}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover/item:text-orange-600 group-hover/item:translate-x-1 transition" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-amber-200/60 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Updated for 2026 Exams</span>
                <Link to="/board/up-board" className="px-6 py-3.5 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold rounded-2xl text-xs inline-flex items-center gap-2 shadow-md shadow-orange-600/20 transition transform active:scale-95">
                  Browse Class 12 Notes →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: POPULAR SUBJECT CARDS QUICK FILTER GRID (WITH AOS) */}
      {/* ========================================================================= */}
      <section className="py-10 bg-white border-y border-slate-200/80" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-extrabold text-orange-600 uppercase tracking-widest">CHAPTERWISE MATERIAL</span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">Popular Core Subjects</h2>
            </div>
            <p className="text-xs text-slate-500 font-semibold mt-2 sm:mt-0">Select subject to view chapter notes & PYQs</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Physics", icon: "⚡", chapters: "14 Chapters", color: "from-sky-500 to-blue-600", path: "/subject/inter-physics" },
              { name: "Chemistry", icon: "🧪", chapters: "10 Chapters", color: "from-emerald-500 to-green-600", path: "/subject/inter-chemistry" },
              { name: "Mathematics", icon: "📐", chapters: "15 Chapters", color: "from-purple-500 to-indigo-600", path: "/subject/hs-math" },
              { name: "Biology", icon: "🌿", chapters: "16 Chapters", color: "from-rose-500 to-pink-600", path: "/subject/inter-bio" },
              { name: "English", icon: "📖", chapters: "16 Chapters", color: "from-amber-500 to-orange-600", path: "/subject/hs-english" },
              { name: "Hindi", icon: "🕉️", chapters: "18 Chapters", color: "from-red-500 to-amber-700", path: "/subject/hs-hindi" },
            ].map((sub, idx) => (
              <Link
                key={idx}
                to={sub.path}
                className="p-5 bg-slate-50 hover:bg-orange-50/60 border border-slate-200/80 hover:border-orange-200 rounded-3xl text-center group transition shadow-sm"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${sub.color} text-white flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-md group-hover:scale-110 transition duration-300`}>
                  {sub.icon}
                </div>
                <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-orange-600 transition">{sub.name}</h4>
                <p className="text-[10px] text-slate-400 font-semibold mt-1">{sub.chapters}</p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: 3-COLUMN ACTIVITY GRID (UPDATES, QUIZZES, DAILY QUIZ WITH AOS) */}
      {/* ========================================================================= */}
      <section className="py-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Col 1: Latest Updates */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-extrabold text-slate-900">Latest Updates</h3>
                <Link to="/notices" className="text-xs font-bold text-orange-600 hover:underline">View All →</Link>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  { tag: "NEW", title: "UP Board 2026 Time Table Released", time: "2 hours ago", bg: "bg-blue-600" },
                  { tag: "NEW", title: "Class 12 Physics Notes Added (Chapter 1-5)", time: "1 day ago", bg: "bg-emerald-600" },
                  { tag: "NEW", title: "Class 10 Science MCQ Quiz Updated", time: "2 days ago", bg: "bg-amber-600" },
                  { tag: "NEW", title: "New NCERT Solutions Uploaded", time: "3 days ago", bg: "bg-purple-600" },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className={`px-2 py-0.5 ${item.bg} text-white font-extrabold text-[9px] rounded uppercase`}>
                        {item.tag}
                      </span>
                      <h4 className="font-bold text-slate-900 mt-1 line-clamp-1">{item.title}</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2: Top Quizzes */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-extrabold text-slate-900">Top Quizzes</h3>
                <Link to="/notices" className="text-xs font-bold text-orange-600 hover:underline">View All →</Link>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  { num: "01", title: "Class 12 Physics Chapter 3 Quiz", count: "15 Questions" },
                  { num: "02", title: "Class 10 Math Chapter 5 Quiz", count: "15 Questions" },
                  { num: "03", title: "Class 12 Chemistry Chapter 2 Quiz", count: "15 Questions" },
                  { num: "04", title: "Class 10 Science Full Chapter Quiz", count: "20 Questions" },
                ].map((q, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-orange-600 text-sm">{q.num}</span>
                      <div>
                        <h4 className="font-bold text-slate-900 line-clamp-1">{q.title}</h4>
                        <p className="text-[10px] text-slate-400">{q.count}</p>
                      </div>
                    </div>
                    <Link to="/notices" className="px-3 py-1 bg-white border border-slate-200 text-orange-600 font-bold rounded-lg text-[10px] shrink-0">
                      Start →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3: Daily Quiz Challenge Banner (Redesigned with Rich Orange Terracotta Gradient & Engaging Text) */}
            <div className="bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group">
              
              {/* Subtle Decorative Background Glow Elements */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-orange-800/40 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-3xl shadow-lg group-hover:scale-110 transition duration-300">
                    🏆
                  </div>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-full">
                    LIVE TODAY
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                    Daily Quiz Challenge
                  </h3>
                  <p className="text-xs text-amber-100 font-bold mt-1">
                    ⚡ 15 Daily MCQs • Instant Scorecard & Explanations
                  </p>
                </div>

                <p className="text-xs text-orange-50 leading-relaxed font-medium">
                  Attempt today's board-level quiz for Physics, Math & Chemistry. Test your speed, rank on the daily leaderboard, and win achievement badges!
                </p>

                {/* Stat Badge */}
                <div className="pt-2 flex items-center gap-2 text-[11px] font-bold text-amber-200">
                  <Flame className="w-4 h-4 text-amber-300 animate-bounce" />
                  <span>10,000+ Students attempted today</span>
                </div>
              </div>

              <div className="pt-6 relative z-10">
                <Link to="/notices" className="w-full py-4 bg-white hover:bg-amber-400 text-slate-950 font-black rounded-2xl text-xs shadow-lg flex items-center justify-center gap-2 transition transform active:scale-95">
                  <Target className="w-4 h-4 text-orange-600" /> Attempt Quiz Now →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5.5: INTERACTIVE FEATURE HIGHLIGHT & SLIDING IMAGE CAROUSEL (WITH AOS) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-gradient-to-b from-white via-orange-50/30 to-[#faf8f5]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Inspiring Text & Key Feature Checklist */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-100/80 border border-orange-200 rounded-full text-xs font-black text-orange-800">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>WHY 500,000+ STUDENTS TRUST EDUBARD INDIA</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Smart Learning. <br />
                <span className="text-orange-600">Top Exam Ranks.</span>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                EduBoard India provides free chapterwise handwritten notes, NCERT solutions, and 5-year solved model paper PDFs designed by senior board examiners.
              </p>

              {/* Bullet Points Checklist */}
              <div className="space-y-3.5 pt-2">
                {[
                  { title: "100% Free High-Speed PDF Downloads", desc: "No subscription fees or paywalls. Read notes offline anytime." },
                  { title: "Senior Examiner Verified Answer Schemes", desc: "Learn exact step-wise marking methods to score maximum marks." },
                  { title: "Daily Live Practice Quizzes & Scorecard", desc: "Evaluate speed & accuracy with chapterwise online MCQs." },
                  { title: "Complete 2026 Board Syllabus Updates", desc: "Stay informed with official exam timetables, admit cards & results." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons & Stat Pill */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/subject/hs-science"
                  className="px-7 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-extrabold rounded-2xl text-xs shadow-lg shadow-orange-600/20 flex items-center gap-2 transition transform active:scale-95"
                >
                  Start Learning Now <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="px-4 py-3 bg-white border border-amber-200 rounded-2xl flex items-center gap-2 shadow-xs">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className="text-xs font-black text-slate-800">98.4% Pass Success Rate</span>
                </div>
              </div>

            </div>

            {/* Right Column: AUTO-SLIDING IMAGE CAROUSEL WITH PREV/NEXT CONTROLS */}
            <div className="lg:col-span-6 relative">
              <div className="relative bg-white border border-amber-200/90 rounded-[32px] p-3 shadow-xl overflow-hidden group">
                
                {/* Active Slide Display */}
                <div className="relative rounded-2xl overflow-hidden h-[360px] sm:h-[420px]">
                  <img
                    src={sliderSlides[currentSlideIdx].img}
                    alt={sliderSlides[currentSlideIdx].title}
                    className="w-full h-full object-cover rounded-2xl transition duration-700 transform scale-102"
                  />
                  
                  {/* Overlay Gradient for Text Clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-orange-600 text-white text-[10px] font-black uppercase tracking-wider rounded-lg shadow-sm">
                        {sliderSlides[currentSlideIdx].tag}
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-amber-300 text-[10px] font-extrabold rounded-lg">
                        {sliderSlides[currentSlideIdx].badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black leading-snug mb-1">
                      {sliderSlides[currentSlideIdx].title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 font-medium">
                      {sliderSlides[currentSlideIdx].desc}
                    </p>

                  </div>
                </div>

                {/* Left/Right Control Arrows */}
                <button
                  type="button"
                  onClick={() => setCurrentSlideIdx((prev) => (prev === 0 ? sliderSlides.length - 1 : prev - 1))}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg transition backdrop-blur-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentSlideIdx((prev) => (prev + 1) % sliderSlides.length)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg transition backdrop-blur-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dot Indicators */}
                <div className="flex items-center justify-center gap-2 pt-3 pb-1">
                  {sliderSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlideIdx(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlideIdx === idx ? 'w-8 bg-orange-600' : 'w-2 bg-slate-300'
                      }`}
                    />
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: FEATURED TOPPERS & STUDENT SUCCESS STORIES (WITH AOS) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-gradient-to-b from-white via-amber-50/40 to-[#faf8f5] border-y border-amber-200/60" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3.5 py-1 bg-orange-100 text-orange-800 font-extrabold rounded-full text-xs uppercase tracking-widest inline-flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5 text-amber-600" /> STUDENT SUCCESS STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
              Meet Our Board Exam Toppers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
              Read how EduBoard India study materials helped thousands achieve 95%+ in State & National Board exams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toppersList.map((top, idx) => (
              <div key={idx} className="bg-white border border-amber-200/80 rounded-3xl p-7 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-300 relative group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-orange-500/40" />
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-medium mb-6 italic">
                    "{top.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                  <img src={top.image} alt={top.name} className="w-12 h-12 rounded-2xl object-cover border-2 border-orange-500/40 shadow-sm" />
                  <div>
                    <h4 className="text-sm font-black text-slate-900">{top.name}</h4>
                    <p className="text-xs font-black text-orange-600">{top.score}</p>
                    <p className="text-[10px] text-slate-500 font-semibold">{top.subject}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: FAQ SECTION ACCORDION (WITH AOS) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-t border-slate-200/80" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold mx-auto mb-3">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">Quick answers to common questions from students and teachers.</p>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="bg-slate-50/70 border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-extrabold text-slate-900 text-sm hover:text-orange-600 transition"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-orange-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 mt-1 font-medium bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
