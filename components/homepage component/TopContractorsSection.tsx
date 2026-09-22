import React from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  MessageSquare, 
  Globe, 
  MapPin, 
  Star, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

interface Contractor {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  distance: string;
  imageUrl: string;
  isVerified: boolean;
  tags: string[];
}

const features = [
  {
    icon: Wrench,
    title: 'Trenchless Experts',
    description: 'Specialized contractors for modern pipe solutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Listings',
    description: 'Real businesses verified and trusted.',
  },
  {
    icon: MessageSquare,
    title: 'Real Customer Reviews',
    description: 'See what real customers have to say.',
  },
  {
    icon: Globe,
    title: 'Nationwide & Worldwide',
    description: 'Find contractors in your state, country or anywhere.',
  },
];

const contractors: Contractor[] = [
  {
    id: '1',
    name: 'Riverside Trenchless Solutions',
    location: 'Houston, TX',
    rating: 4.9,
    reviewCount: 32,
    distance: '2.3 mi',
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=600',
    isVerified: true,
    tags: ['CIPP Lining', 'Pipe Bursting', 'Slip Lining'],
  },
  {
    id: '2',
    name: 'Summit Pipe Solutions',
    location: 'Dallas, TX',
    rating: 4.8,
    reviewCount: 41,
    distance: '4.6 mi',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600',
    isVerified: true,
    tags: ['CIPP Lining', 'Pipe Bursting', 'Slip Lining'],
  },
  {
    id: '3',
    name: 'Northwest Trenchless',
    location: 'Seattle, WA',
    rating: 4.7,
    reviewCount: 28,
    distance: '8.1 mi',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600',
    isVerified: true,
    tags: ['CIPP Lining', 'Slip Lining', 'Pipe Repair'],
  },
];

export default function TopContractorsSection() {
  return (
    <div className="w-full bg-[#031522]  text-slate-900 font-sans relative">
      
      {/* TOP CARVED WAVE DIVIDER */}
      <div className="w-full overflow-hidden leading-none -mb-1 select-none pointer-events-none">
        <svg 
          viewBox="0 0 1440 90" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-12 sm:h-20 lg:h-24 block"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,30 C320,80 520,10 820,50 C1120,90 1320,20 1440,35 L1440,90 L0,90 Z" 
            fill="#F8FAFC" 
          />
        </svg>
      </div>

      {/* FULL WIDTH LIGHT SECTION */}
      <section className="w-full bg-[#F8FAFC] py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* TOP 4 FEATURES ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 pt-2 border-b border-slate-200/70">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className={`flex items-start space-x-4 ${
                    index !== 0 ? 'lg:border-l lg:border-slate-200/80 lg:pl-6' : ''
                  }`}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MAIN CONTENT ROW: Heading Left + Cards Carousel Right */}
          <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[11px] font-bold tracking-wider text-blue-600 uppercase">
                FIND TRUSTED CONTRACTORS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Top Rated Contractors
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                Highly rated and trusted by homeowners, municipalities and businesses.
              </p>
              <div className="pt-2">
                <a
                  href="#all-contractors"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium hover:bg-slate-900 hover:text-white transition-all duration-200 shadow-sm"
                >
                  <span>View All Contractors</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-8 relative">
              
              {/* Carousel Navigation Buttons */}
              <div className="flex justify-end space-x-2 mb-4">
                <button
                  type="button"
                  aria-label="Previous contractors"
                  className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 flex items-center justify-center shadow-sm transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next contractors"
                  className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 flex items-center justify-center shadow-sm transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Contractor Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {contractors.map((contractor) => (
                  <div
                    key={contractor.id}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Image + Verified Badge */}
                      <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                        <img
                          src={contractor.imageUrl}
                          alt={contractor.name}
                          className="w-full h-full object-cover"
                        />
                        {contractor.isVerified && (
                          <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                            VERIFIED
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-2">
                        <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-1">
                          {contractor.name}
                        </h3>

                        <div className="flex items-center text-xs text-slate-500 space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                          <span>{contractor.location}</span>
                        </div>

                        {/* Service Tags */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {contractor.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-4 pb-4 pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 mt-auto">
                      <div className="flex items-center space-x-1 font-semibold text-slate-800">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{contractor.rating}</span>
                        <span className="text-slate-400 font-normal">
                          ({contractor.reviewCount})
                        </span>
                      </div>
                      <span className="text-slate-400">{contractor.distance}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* BOTTOM CARVED WAVE DIVIDER */}
      <div className="w-full overflow-hidden leading-none -mt-1 select-none pointer-events-none">
        <svg 
          viewBox="0 0 1440 90" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-12 sm:h-20 lg:h-24 block"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 L1440,0 L1440,40 C1100,90 700,10 360,70 C180,100 60,50 0,35 Z" 
            fill="#F8FAFC" 
          />
        </svg>
      </div>

    </div>
  );
}