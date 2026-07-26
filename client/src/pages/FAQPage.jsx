import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Is EduBoard India completely free for High School & Intermediate students?",
      a: "Yes! All handwritten notes, NCERT textbook solutions, model question papers, and past 5-year question papers (2022-2026) are 100% free with zero paywalls."
    },
    {
      q: "Which Education Boards are supported on EduBoard India?",
      a: "We support UPMSP (UP Board), CBSE, CISCE (ICSE/ISC), BSEB (Bihar Board), NIOS Open Board, BSER (Rajasthan Board), MPBSE (MP Board), MSBSHSE (Maharashtra Board), PSEB, BSEH, and all state education boards in India."
    },
    {
      q: "Can I download notes as offline PDF files?",
      a: "Yes, every study material contains a direct PDF download link that allows you to view and print materials offline."
    },
    {
      q: "How can teachers or school administrators upload notes?",
      a: "Teachers can log in using the Faculty Portal to upload chapter notes, model test papers, and assign study materials to their target board students."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <HelpCircle className="w-10 h-10 text-orange-600 mx-auto mb-3" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Frequently Asked Questions</h1>
          <p className="text-sm text-slate-600 mt-2">Everything you need to know about EduBoard India resources</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-900 text-sm"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-orange-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
