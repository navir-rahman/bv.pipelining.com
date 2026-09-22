"use client";

import React from 'react';
import { MapPin, ListFilter, Send, ArrowRight } from 'lucide-react';

interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  delay: string;
  colorClass: {
    number: string;
    glow: string;
    border: string;
    bg: string;
    icon: string;
    particle: string;
  };
}

const steps: StepItem[] = [
  {
    id: 'search',
    number: '01',
    title: 'Search',
    description: 'Tell us what you need and where you are.',
    icon: MapPin,
    delay: '0s',
    colorClass: {
      number: 'text-cyan-400',
      glow: 'shadow-[0_0_30px_rgba(34,211,238,0.4)]',
      border: 'border-cyan-500/60 group-hover:border-cyan-300',
      bg: 'bg-cyan-950/40',
      icon: 'text-cyan-300',
      particle: '#22d3ee',
    },
  },
  {
    id: 'compare',
    number: '02',
    title: 'Compare',
    description: 'View profiles, services, ratings and reviews.',
    icon: ListFilter,
    delay: '0.4s',
    colorClass: {
      number: 'text-purple-400',
      glow: 'shadow-[0_0_30px_rgba(168,85,247,0.4)]',
      border: 'border-purple-500/60 group-hover:border-purple-300',
      bg: 'bg-purple-950/40',
      icon: 'text-purple-300',
      particle: '#c084fc',
    },
  },
  {
    id: 'connect',
    number: '03',
    title: 'Connect',
    description: 'Contact the right contractor directly or request a quote.',
    icon: Send,
    delay: '0.8s',
    colorClass: {
      number: 'text-pink-400',
      glow: 'shadow-[0_0_30px_rgba(236,72,153,0.4)]',
      border: 'border-pink-500/60 group-hover:border-pink-300',
      bg: 'bg-pink-950/40',
      icon: 'text-pink-300',
      particle: '#f472b6',
    },
  },
];

export default function HowItWorksSection() {
  const wavePath = "M -50,90 C 80,150 110,30 160,80 C 210,130 400,20 460,80 C 520,140 700,20 760,80 C 820,130 870,50 950,90";

  return (
    <section className="w-full bg-[#050b14] text-white py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden font-sans select-none">
      
      {/* EMBEDDED ANIMATION KEYFRAMES */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
        @keyframes dashFlow {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes textShimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: floatSlow 5s ease-in-out infinite;
        }
        .animate-dash-flow {
          stroke-dasharray: 12 8;
          animation: dashFlow 8s linear infinite;
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: textShimmer 4s ease infinite;
        }
      `}</style>

      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Text Content & Animated CTA */}
        <div className="lg:col-span-4 space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase">
            HOW IT WORKS
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.12]">
            Find a contractor <br />
            in{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-shimmer">
              3 simple steps
            </span>
          </h2>

          <div className="text-slate-400 text-sm space-y-1.5 font-normal leading-relaxed">
            <p>It only takes a minute to get started.</p>
            <p>Search, compare and connect — all on this page.</p>
          </div>

          <div className="pt-3">
            <a
              href="#search"
              className="inline-flex items-center space-x-3 px-7 py-3 rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-200 text-sm font-medium hover:border-cyan-400 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-300 group backdrop-blur-md"
            >
              <span>Start Searching</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive 3-Step Flow with Animated SVG Wave */}
        <div className="lg:col-span-8 relative pt-8 lg:pt-0">
          
          {/* ANIMATED CONNECTING WAVE SVG (Desktop/Tablet) */}
          <div className="hidden md:block absolute top-6 left-0 right-0 w-full h-40 pointer-events-none z-0">
            <svg 
              className="w-full h-full overflow-visible" 
              viewBox="0 0 900 160" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Wave Gradient */}
                <linearGradient id="wave-gradient-animated" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#c084fc" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#f472b6" stopOpacity="0.9" />
                </linearGradient>

                {/* Soft Glow Filter */}
                <filter id="glow-heavy" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Light Particle Glow Filter */}
                <filter id="dot-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Ambient Background Wave Glow */}
              <path
                d={wavePath}
                stroke="url(#wave-gradient-animated)"
                strokeWidth="6"
                strokeOpacity="0.25"
                filter="url(#glow-heavy)"
                fill="none"
              />

              {/* Flowing Dashed Wave Line */}
              <path
                d={wavePath}
                stroke="url(#wave-gradient-animated)"
                strokeWidth="2.5"
                className="animate-dash-flow"
                fill="none"
              />

              {/* TRAVELLING LIGHT BEAM 1 (Fast Pulse) */}
              <circle r="5" fill="#ffffff" filter="url(#dot-glow)">
                <animateMotion 
                  path={wavePath} 
                  dur="4s" 
                  repeatCount="indefinite" 
                  rotate="auto"
                />
              </circle>

              {/* TRAVELLING LIGHT BEAM 2 (Cyan Trail) */}
              <circle r="4" fill="#22d3ee" filter="url(#dot-glow)">
                <animateMotion 
                  path={wavePath} 
                  dur="4s" 
                  begin="0.15s"
                  repeatCount="indefinite" 
                  rotate="auto"
                />
              </circle>
            </svg>
          </div>

          {/* 3 STEPS CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.id} 
                  className="group flex flex-col items-start space-y-3.5 px-2 cursor-pointer"
                  style={{ animationDelay: step.delay }}
                >
                  
                  {/* Glowing Icon Badge with Floating Animation */}
                  <div className="relative animate-float" style={{ animationDelay: step.delay }}>
                    
                    {/* Radial Background Ripple Pulse */}
                    <div 
                      className={`absolute inset-0 rounded-full blur-md opacity-40 transition-opacity duration-500 group-hover:opacity-100 ${step.colorClass.glow}`}
                      style={{ animation: 'pulseGlow 3s ease-in-out infinite' }}
                    />

                    {/* Main Circle Badge */}
                    <div 
                      className={`relative w-16 h-16 rounded-full border backdrop-blur-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xl ${step.colorClass.border} ${step.colorClass.bg}`}
                    >
                      <Icon className={`w-7 h-7 transition-transform duration-300 group-hover:rotate-6 ${step.colorClass.icon}`} />
                    </div>
                  </div>

                  {/* Step Number */}
                  <span className={`text-sm font-extrabold tracking-widest ${step.colorClass.number}`}>
                    {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-white tracking-snug group-hover:text-cyan-300 transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-slate-400 leading-relaxed max-w-[210px] group-hover:text-slate-300 transition-colors duration-200">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}