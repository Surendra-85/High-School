import React, { useState } from 'react';
import { 
  Send, Mail, Phone, MapPin, Clock, User, Tag, MessageSquare, 
  CheckCircle2, Sparkles, Facebook, Instagram, Send as Telegram, Youtube, HelpCircle
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 pb-20 pt-6 font-jakarta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* HERO SECTION WITH CUSTOM SVG STUDENT READING ILLUSTRATION */}
        {/* ========================================================================= */}
        <div className="relative overflow-hidden pt-4 pb-10">
          
          {/* Dotted Grid Pattern Background */}
          <div className="absolute top-0 left-0 text-slate-300 pointer-events-none opacity-60">
            <svg width="100" height="100" fill="currentColor">
              <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" />
              </pattern>
              <rect width="100" height="100" fill="url(#dots)" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Headline */}
            <div className="lg:col-span-5 space-y-4">
              <h1 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight leading-none">
                Contact Us
              </h1>

              {/* Decorative Blue Wavy Line */}
              <svg width="48" height="8" viewBox="0 0 48 8" fill="none" className="text-orange-600">
                <path d="M2 5C6 2 10 2 14 5C18 8 22 8 26 5C30 2 34 2 38 5C42 8 46 8 46 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Have a question, suggestion, or just want to say hello? <br />
                We'd love to hear from you!
              </p>
            </div>

            {/* Right Side Vector SVG Illustration Card: Student Reading at Desk */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[360px]">
              
              {/* Soft Warm Glow Background Blob */}
              <div className="absolute inset-0 bg-[#fef3c7]/70 rounded-full blur-3xl -z-10 transform scale-90" />

              <div className="relative w-full max-w-xl flex items-center justify-center p-2">
                
                {/* 1. Yellow Sticky Note (Top Left) */}
                <div className="absolute -top-2 left-6 z-30 bg-[#fef08a] border border-amber-300 text-amber-950 p-3 rounded-lg shadow-md transform -rotate-6 w-32 text-[11px] font-bold leading-tight">
                  <div>• Plan</div>
                  <div>• Study</div>
                  <div>• Practice</div>
                  <div>• Revise</div>
                  <span className="absolute -top-3 -right-2 text-base">💡</span>
                </div>

                {/* 2. Blue Sticky Note (Top Right) */}
                <div className="absolute top-0 right-12 z-30 bg-[#bae6fd] border border-sky-300 text-sky-950 p-3 rounded-lg shadow-md transform rotate-6 w-28 text-[11px] font-bold text-center">
                  Keep Learning!
                  <div className="text-sm mt-0.5">🙂</div>
                </div>

                {/* 3. Pink Sticky Note (Far Right) */}
                <div className="absolute top-28 -right-2 z-30 bg-[#fbcfe8] border border-pink-300 text-pink-950 p-3 rounded-lg shadow-md transform rotate-3 w-28 text-[11px] font-bold text-center">
                  Focus <br /> Learn <br /> Succeed
                </div>

                {/* 4. MAIN VECTOR SVG STUDENT READING ILLUSTRATION CARD */}
                <div className="w-full bg-white/90 backdrop-blur-md border border-amber-200/80 rounded-3xl p-6 shadow-xl relative z-10 my-4 flex flex-col items-center">
                  
                  {/* SVG Illustration Graphics */}
                  <svg viewBox="0 0 500 240" className="w-full h-auto max-h-[220px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    
                    {/* Desk Surface */}
                    <rect x="20" y="210" width="460" height="12" rx="6" fill="#e2e8f0" />
                    <rect x="40" y="222" width="12" height="18" fill="#cbd5e1" />
                    <rect x="440" y="222" width="12" height="18" fill="#cbd5e1" />

                    {/* Desk Lamp */}
                    <path d="M70 210 L70 140 Q70 100 110 100" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
                    <path d="M95 90 L125 110 L100 115 Z" fill="#ea580c" />
                    <polygon points="105,112 180,210 120,210" fill="#ffedd5" opacity="0.5" />

                    {/* Stack of Colorful Books */}
                    <rect x="50" y="194" width="70" height="16" rx="3" fill="#0284c7" />
                    <rect x="54" y="178" width="62" height="16" rx="3" fill="#f59e0b" />
                    <rect x="48" y="162" width="74" height="16" rx="3" fill="#ea580c" />
                    
                    {/* Pencil Stand & Stationery */}
                    <rect x="135" y="175" width="24" height="35" rx="4" fill="#334155" />
                    <line x1="140" y1="175" x2="136" y2="145" stroke="#f59e0b" strokeWidth="3" />
                    <line x1="147" y1="175" x2="147" y2="140" stroke="#0284c7" strokeWidth="3" />
                    <line x1="154" y1="175" x2="158" y2="148" stroke="#ef4444" strokeWidth="3" />

                    {/* Laptop Screen & Keyboard */}
                    <rect x="180" y="115" width="140" height="90" rx="8" fill="#1e293b" />
                    <rect x="186" y="121" width="128" height="78" rx="5" fill="#ffffff" />
                    {/* Handwritten Laptop Message */}
                    <text x="250" y="152" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif" italic="true">
                      We are here to
                    </text>
                    <text x="250" y="168" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">
                      help you! ♡
                    </text>
                    <rect x="165" y="205" width="170" height="6" rx="3" fill="#94a3b8" />

                    {/* Student Reading Character Illustration */}
                    {/* Student Head & Hair */}
                    <circle cx="370" cy="115" r="22" fill="#fed7aa" />
                    <path d="M350 115 C350 90 390 90 390 115 C385 100 355 100 350 115 Z" fill="#1e293b" />
                    {/* Student Body & Shirt */}
                    <path d="M340 210 C340 155 400 155 400 210 Z" fill="#ea580c" />
                    {/* Open Book in Student's Hands */}
                    <path d="M335 195 L370 185 L405 195 L370 205 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                    <line x1="370" y1="185" x2="370" y2="205" stroke="#94a3b8" strokeWidth="2" />

                    {/* Coffee Mug */}
                    <rect x="420" y="182" width="20" height="28" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                    <path d="M440 188 C446 188 446 200 440 200" stroke="#f59e0b" strokeWidth="2" fill="none" />
                    {/* Steam */}
                    <path d="M426 176 Q428 170 426 164" stroke="#d97706" strokeWidth="1.5" fill="none" />

                  </svg>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* TWO CARDS GRID (SEND MESSAGE & GET IN TOUCH) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT CARD: SEND US A MESSAGE FORM */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Send Us a Message</h3>
                <svg width="32" height="6" viewBox="0 0 32 6" fill="none" className="text-orange-600 mt-1">
                  <path d="M2 3C5 1 8 1 11 3C14 5 17 5 20 3C23 1 26 1 29 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:border-slate-800 transition"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:border-slate-800 transition"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="relative">
                  <Tag className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full pl-10 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:border-slate-800 transition"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <textarea
                    rows="5"
                    required
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:border-slate-800 transition"
                  />
                </div>
              </div>

              {submitted && (
                <div className="p-3 bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Message sent successfully! We will get back to you soon.
                </div>
              )}

              <button
                type="submit"
                className="py-3.5 px-8 bg-[#0f172a] hover:bg-slate-800 text-white font-extrabold rounded-xl text-xs shadow-md flex items-center justify-center gap-2 transition"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>

            </form>

          </div>

          {/* RIGHT CARD: GET IN TOUCH CONTACT DETAILS */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Get in Touch</h3>
                  <svg width="32" height="6" viewBox="0 0 32 6" fill="none" className="text-orange-600 mt-1">
                    <path d="M2 3C5 1 8 1 11 3C14 5 17 5 20 3C23 1 26 1 29 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <p className="text-xs text-slate-500 font-medium mb-6">
                We are here to help and answer any question you might have.
              </p>

              {/* Contact Information List */}
              <div className="space-y-4 text-xs divide-y divide-slate-100">
                
                <div className="pt-2 flex items-start gap-4">
                  <div className="p-2.5 bg-amber-100/60 rounded-xl text-amber-900 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">Our Location</h4>
                    <p className="text-slate-600 mt-0.5 font-medium">Lucknow, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-4">
                  <div className="p-2.5 bg-amber-100/60 rounded-xl text-amber-900 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">Email Us</h4>
                    <a href="mailto:support@eduboard.in" className="text-slate-700 hover:text-orange-600 font-semibold mt-0.5 block">
                      support@eduboard.in
                    </a>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-4">
                  <div className="p-2.5 bg-amber-100/60 rounded-xl text-amber-900 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">Call Us</h4>
                    <a href="tel:+919876543210" className="text-slate-700 font-semibold mt-0.5 block">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-4">
                  <div className="p-2.5 bg-amber-100/60 rounded-xl text-amber-900 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">Working Hours</h4>
                    <p className="text-slate-600 font-medium mt-0.5">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Follow Us Social Icons */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Follow Us</span>
              
              <div className="flex items-center gap-3">
                <a href="#facebook" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow hover:opacity-90 transition">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#instagram" className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow hover:opacity-90 transition">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#telegram" className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center shadow hover:opacity-90 transition">
                  <Telegram className="w-4 h-4" />
                </a>
                <a href="#youtube" className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center shadow hover:opacity-90 transition">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;
