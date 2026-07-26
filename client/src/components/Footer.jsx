import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Facebook, Instagram, Send as Telegram, Youtube, 
  Mail, Phone, MapPin, ArrowUp, Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#f5efe6] text-slate-800 border-t border-amber-200/60 font-jakarta pt-10 pb-6">
      
      {/* Top Decorative Wavy Line Separator */}
      <div className="absolute -top-3 left-0 right-0 overflow-hidden leading-none h-3 text-amber-200/80">
        <svg viewBox="0 0 1200 12" preserveAspectRatio="none" className="w-full h-full fill-current">
          <path d="M0,0 C150,12 350,-12 500,0 C650,12 850,-12 1000,0 C1150,12 1200,0 1200,0 L1200,12 L0,12 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-amber-200/60">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold shadow">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-lg font-black text-slate-900 tracking-tight">
                ALL BOARD STUDY GROUP
              </span>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Our goal is to make quality education accessible to every student across India.
            </p>

            {/* Circular Social Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a href="#facebook" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-orange-600 flex items-center justify-center shadow-sm transition">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#instagram" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-orange-600 flex items-center justify-center shadow-sm transition">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#telegram" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-orange-600 flex items-center justify-center shadow-sm transition">
                <Telegram className="w-3.5 h-3.5" />
              </a>
              <a href="#youtube" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-orange-600 flex items-center justify-center shadow-sm transition">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">QUICK LINKS</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
              <li><Link to="/" className="hover:text-orange-600 transition">Home</Link></li>
              <li><Link to="/notices" className="hover:text-orange-600 transition">Notices & Datesheets</Link></li>
              <li><Link to="/about" className="hover:text-orange-600 transition">About Platform</Link></li>
              <li><Link to="/contact" className="hover:text-orange-600 transition">Contact Support</Link></li>
              <li><Link to="/faq" className="hover:text-orange-600 transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">CATEGORIES</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
              <li><Link to="/board/up-board" className="hover:text-orange-600 transition">UP Board (UPMSP)</Link></li>
              <li><Link to="/board/cbse" className="hover:text-orange-600 transition">CBSE (Central)</Link></li>
              <li><Link to="/board/bihar-board" className="hover:text-orange-600 transition">Bihar Board (BSEB)</Link></li>
              <li><Link to="/board/icse" className="hover:text-orange-600 transition">ICSE / ISC</Link></li>
              <li><Link to="/board/nios" className="hover:text-orange-600 transition">NIOS Open School</Link></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">SUPPORT</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
              <li><Link to="/about" className="hover:text-orange-600 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-600 transition">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-orange-600 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-orange-600 transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div>
            <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">CONTACT</h4>
            <div className="space-y-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                <a href="mailto:support@eduboard.in" className="hover:text-orange-600 truncate">
                  support@eduboard.in
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div>
            © {new Date().getFullYear()} EDUBOARD INDIA. All rights reserved.
          </div>

          {/* Round Dark Floating Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#0f172a] hover:bg-orange-600 text-white flex items-center justify-center shadow-md transition transform active:scale-95"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
