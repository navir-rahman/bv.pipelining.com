"use client";

import {
  MapPin,
  Wrench,
  Star,
  ShieldCheck,
  Clock3,
  SlidersHorizontal,
  RotateCcw,
  ChevronDown,
} from "lucide-react";

export default function Filter() {
  return (
    <div
      className=" 
        group relative w-full rounded-[24px] p-[1px]
        bg-[linear-gradient(135deg,rgba(244,130,23,0.45)_0%,rgba(0,240,255,0.35)_50%,rgba(255,255,255,0.12)_100%)]
        shadow-[0_16px_36px_rgba(0,0,0,0.45),0_0_20px_rgba(244,130,23,0.08)]
        transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]
        hover:-translate-y-1
        hover:bg-[linear-gradient(135deg,rgba(244,130,23,0.9)_0%,rgba(0,240,255,0.7)_50%,rgba(255,255,255,0.35)_100%)]
        hover:shadow-[0_24px_50px_rgba(0,0,0,0.6),0_0_35px_rgba(244,130,23,0.25)]
      "
    >
      {/* Inner container */}
      <div
        className="h-[90vh]  mt-auto flex flex-col justify-end
          relative overflow-hidden rounded-[23px]
          bg-[linear-gradient(155deg,#182032_0%,#0f1523_50%,#0b0e18_100%)]
          p-5
        "
      >
        {/* Subtle metallic grid */}
        <div
          className="
            pointer-events-none absolute inset-0 opacity-[0.45]
            bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
            bg-[size:20px_20px]
          "
        />

        {/* Orange / cyan ambient glow */}
        <div
          className="
            pointer-events-none absolute -top-32 -left-24
            h-72 w-72 rounded-full
            bg-[#f48217]/10 blur-[90px]
            transition-opacity duration-300
            group-hover:bg-[#f48217]/15
          "
        />

        <div
          className="
            pointer-events-none absolute -bottom-32 -right-24
            h-72 w-72 rounded-full
            bg-cyan-400/10 blur-[90px]
            transition-opacity duration-300
            group-hover:bg-cyan-400/15
          "
        />

        {/* Content */}
        <div className="relative z-10">

          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-[18px] font-bold text-white">
              Filters
            </h2>

            <button
              className="
                text-[12px] font-medium text-[#f48217]
                transition-colors duration-200
                hover:text-[#ffb15c]
              "
            >
              Clear all
            </button>
          </div>

          {/* Location */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#00f0ff]" />

              <span className="text-[12px] font-semibold text-slate-200">
                Location
              </span>
            </div>

            <div className="relative">
              <select
                defaultValue=""
                className="
                  h-[42px] w-full appearance-none
                  rounded-lg
                  border border-white/10
                  bg-[#0b111d]/80
                  px-3 pr-10
                  text-[12px] text-slate-400
                  outline-none
                  transition-all duration-200
                  hover:border-[#f48217]/40
                  focus:border-[#00f0ff]/60
                  focus:ring-1 focus:ring-[#00f0ff]/20
                "
              >
                <option value="" disabled>
                  Select a state
                </option>

                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Connecticut</option>
                <option>Delaware</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Texas</option>
                <option>Washington</option>
              </select>

              <ChevronDown
                className="
                  pointer-events-none absolute right-3 top-1/2
                  h-4 w-4 -translate-y-1/2
                  text-slate-500
                "
              />
            </div>
          </div>

          {/* Services */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-[#00f0ff]" />

              <span className="text-[12px] font-semibold text-slate-200">
                Services
              </span>
            </div>

            <div className="relative">
              <select
                defaultValue="All Services"
                className="
                  h-[42px] w-full appearance-none
                  rounded-lg
                  border border-white/10
                  bg-[#0b111d]/80
                  px-3 pr-10
                  text-[12px] text-slate-400
                  outline-none
                  transition-all duration-200
                  hover:border-[#f48217]/40
                  focus:border-[#00f0ff]/60
                  focus:ring-1 focus:ring-[#00f0ff]/20
                "
              >
                <option>All Services</option>
                <option>Pipe Lining</option>
                <option>Pipe Bursting</option>
                <option>CIPP Lining</option>
                <option>Manhole Rehab</option>
                <option>CCTV Inspection</option>
                <option>Slip Lining</option>
              </select>

              <ChevronDown
                className="
                  pointer-events-none absolute right-3 top-1/2
                  h-4 w-4 -translate-y-1/2
                  text-slate-500
                "
              />
            </div>
          </div>

          {/* Rating */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <Star className="h-4 w-4 fill-[#f48217] text-[#f48217]" />

              <span className="text-[12px] font-semibold text-slate-200">
                Rating
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                className="
                  rounded-md
                  border border-[#f48217]/50
                  bg-[#f48217]/10
                  px-3 py-1.5
                  text-[10px] font-medium
                  text-[#f48217]
                  transition-all
                  hover:bg-[#f48217]/20
                  hover:border-[#f48217]
                "
              >
                All
              </button>

              {["5 ★", "4 & up", "3 & up", "2 ★ & up", "1 ★ & up"].map(
                (rating) => (
                  <button
                    key={rating}
                    className="
                      rounded-md
                      border border-white/10
                      bg-white/[0.03]
                      px-3 py-1.5
                      text-[10px] font-medium
                      text-slate-400
                      transition-all duration-200
                      hover:border-[#00f0ff]/40
                      hover:bg-[#00f0ff]/5
                      hover:text-[#00f0ff]
                    "
                  >
                    {rating}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="mb-4 h-px bg-white/10" />

          {/* Verified */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-[17px] w-[17px] text-[#00f0ff]" />

              <span className="text-[12px] font-semibold text-slate-200">
                Verified only
              </span>
            </div>

            <div
              className="
                relative h-5 w-9 rounded-full
                bg-[#f48217]
                shadow-[0_0_10px_rgba(244,130,23,0.25)]
              "
            >
              <div
                className="
                  absolute right-[3px] top-[3px]
                  h-3.5 w-3.5 rounded-full
                  bg-white shadow-sm
                "
              />
            </div>
          </div>

          {/* Open now */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock3 className="h-[17px] w-[17px] text-[#00f0ff]" />

              <span className="text-[12px] font-semibold text-slate-200">
                Open now
              </span>
            </div>

            <div className="relative h-5 w-9 rounded-full bg-white/10">
              <div
                className="
                  absolute left-[3px] top-[3px]
                  h-3.5 w-3.5 rounded-full
                  bg-slate-500
                "
              />
            </div>
          </div>

          {/* Availability */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#00f0ff]" />

              <span className="text-[12px] font-semibold text-slate-200">
                Availability
              </span>
            </div>

            <div className="relative">
              <select
                defaultValue="Any time"
                className="
                  h-[42px] w-full appearance-none
                  rounded-lg
                  border border-white/10
                  bg-[#0b111d]/80
                  px-3 pr-10
                  text-[12px] text-slate-400
                  outline-none
                  transition-all duration-200
                  hover:border-[#f48217]/40
                  focus:border-[#00f0ff]/60
                  focus:ring-1 focus:ring-[#00f0ff]/20
                "
              >
                <option>Any time</option>
                <option>Today</option>
                <option>This week</option>
                <option>Next week</option>
              </select>

              <ChevronDown
                className="
                  pointer-events-none absolute right-3 top-1/2
                  h-4 w-4 -translate-y-1/2
                  text-slate-500
                "
              />
            </div>
          </div>

          {/* Apply */}
          <button
            className="
              flex h-[40px] w-full
              items-center justify-center gap-2
              rounded-xl
              bg-white
              text-[12px] font-semibold text-[#000]
              shadow-[0_8px_20px_rgba(244,130,23,0.18)]
              transition-all duration-300
              hover:shadow-[0_0_22px_rgba(244,130,23,0.35),0_0_30px_rgba(0,240,255,0.2)]
              hover:-translate-y-0.5
            "
          >
            <SlidersHorizontal className=" h-[15px] w-[15px]" />
            Apply filters
          </button>

          {/* Reset */}
          <button
            className="
              mt-3 flex w-full
              items-center justify-center gap-2
              text-[11px] font-medium
              text-slate-400
              transition-colors duration-200
              hover:text-[#00f0ff]
            "
          >
            <RotateCcw className="h-[13px] w-[13px]" />
            Reset filters
          </button>

        </div>
      </div>
    </div>
  );
}