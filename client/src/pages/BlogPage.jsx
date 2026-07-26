import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, BookOpen, Clock, User, ArrowRight, Flame, Calendar, Tag } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Score 95%+ in Class 12 UP Board & CBSE Physics Exam 2026",
      category: "Exam Preparation Tips",
      author: "System Admin",
      date: "July 24, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
      excerpt: "Master top derivation strategies, formula retention techniques, and previous 5 years numerical problem patterns to top your 2026 board examination."
    },
    {
      id: 2,
      title: "Complete Roadmap for Class 10 NCERT Mathematics Revision in 30 Days",
      category: "Maths Strategy",
      author: "EduBoard Math Council",
      date: "July 20, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
      excerpt: "Step-by-step chapter prioritization guide for Real Numbers, Quadratic Equations, Trigonometry, and Statistics to guarantee full marks."
    },
    {
      id: 3,
      title: "UPMSP & Bihar Board 2026 Model Question Papers & Marking Scheme Analysis",
      category: "Board News",
      author: "Academic Director",
      date: "July 18, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
      excerpt: "Detailed breakdown of 100 MCQs objective paper patterns, internal choice options, and practical examination evaluation criteria."
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] py-12 font-jakarta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1 bg-orange-100 text-orange-700 font-extrabold rounded-full text-xs uppercase tracking-widest inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> EDUBOARD BLOG & ARTICLES
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Academic Insights & Exam Strategies
          </h1>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Expert guidance, board datesheets, and study tips written by senior board examiners.
          </p>
        </div>

        {/* Featured Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white border border-amber-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition group flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-orange-600 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-lg shadow">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition leading-snug mb-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-bold">By {post.author}</span>
                <Link to="/notices" className="text-orange-600 font-extrabold group-hover:translate-x-1 transition flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogPage;
