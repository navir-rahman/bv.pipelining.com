import React from 'react';
import { ArrowRight,  } from 'lucide-react';

// Simple Twitter/X icon since lucide-react might not have 'X'
const XIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#050B14] text-white font-sans overflow-hidden">
      
      {/* CONTRACTOR CALL-TO-ACTION BANNER */}
      <div className="relative w-full bg-[#091524] border-b border-slate-800/80 overflow-hidden">
        {/* Background Sunset / Worker Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600" 
            alt="Trenchless Contractor" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[11px] font-bold tracking-widest text-cyan-400 uppercase">
              ARE YOU A TRENCHLESS CONTRACTOR?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Get discovered by people <br className="hidden sm:inline" />
              looking for contractors in your area.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Claim your listing and grow your business with Pipelining.com.
            </p>
          </div>

          {/* Right Action Button */}
          <div>
            <a
              href="#claim-listing"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-slate-600 bg-slate-900/60 backdrop-blur-md text-white text-xs sm:text-sm font-medium hover:border-cyan-400 hover:bg-slate-900 transition-all shadow-lg group"
            >
              <span>Claim Your Listing</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      {/* BOTTOM FOOTER NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="#" className="flex items-center space-x-1 text-lg font-extrabold tracking-tight text-white">
              <span className="text-cyan-400">@</span>
              <span>pipelining</span>
              <span className="text-slate-400 font-normal">.com</span>
            </a>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-400">
            <a href="#find-contractors" className="hover:text-white transition-colors">Find Contractors</a>
            <a href="#resources" className="hover:text-white transition-colors">Resources</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Tagline */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3 text-slate-400">
            
              <a href="#x" aria-label="X (Twitter)" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-slate-700 transition-colors">
                <XIcon className="w-3.5 h-3.5" />
              </a>
          
            </div>

            <div className="hidden xl:block text-[11px] text-slate-500 tracking-wide border-l border-slate-800 pl-6">
              Better pipes. Stronger communities.
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}