"use client";

import ShowHomemap from "@/components/Map/ShowHomemap";
import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { setupRipple, type RippleController } from "@/lib/ripple";
import OilDropButton from "../OilDropSearch/ OilDropSearch";



export default function HeroSection() {
  // Reference to the element where the ripple effect is applied
  const mapRef = useRef<HTMLDivElement>(null);

  // Reference to the search button so we can find its center position
  // const searchButtonRef =
  //   useRef<HTMLButtonElement>(null);
  const searchButtonRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  let rippleController: RippleController | undefined;

  setupRipple(mapRef, searchButtonRef).then((controller) => {
    rippleController = controller;

    if (mapActive && controller) {
      controller.pause();
    }
  });

  return () => {
    rippleController?.cleanup();
  };
}, []);

  // Search input value
  const [searchTerm, setSearchTerm] = useState("");

  // console.log(searchTerm)
  // Location input value
  const [location, setLocation] = useState("");

  // Controls whether the map/search UI is active
  const [mapActive, setMapActive] = useState(false);

  const [isdark, setIsDark] = useState(false);

  return (
    <>
      {mapActive && (
        <button
          onClick={() => setMapActive(false)}
          className="absolute right-10 top-24 z-50 flex items-center gap-2 rounded-full border border-white/20 bg-[#071b2a]/85 px-4 py-2.5 text-sm text-white shadow-lg backdrop-blur-xl transition-all hover:bg-[#0b2639]"
        >
          <span>←</span>
          <span>Exit Map Mode</span>
        </button>
      )}

      <section
        onClick={() => setMapActive(true)}
        ref={mapRef}
        className="relative min-h-[650px] md:min-h-[720px] w-full overflow-hidden bg-[#031522] text-white"
      >
        <div className="absolute inset-0 z-0">
          <ShowHomemap
            searchTerm={searchTerm}
            isdark={isdark}
            setIsDark={setIsDark}
          />
        </div>

        <div>
          <div
            className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#031522] via-[#031522]/90 via-45% to-transparent transition-opacity duration-700 ease-in-out ${
              mapActive
                ? "opacity-0"
                : "opacity-100"
            }`}
          />

          <div
            className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#031522]/70 via-transparent to-transparent transition-opacity duration-700 ease-in-out ${
              mapActive
                ? "opacity-0"
                : "opacity-100"
            }`}
          />

          <div
            className={`pointer-events-none relative z-20 mx-auto flex min-h-[650px] md:min-h-[720px] w-full max-w-[] items-start px-6 md:px-10 lg:px-12 pt-28 md:pt-36 transition-all duration-700 ease-in-out ${
              mapActive
                ? "opacity-0 -translate-y-8"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className="w-full max-w-[650px]">
              <div className="mb-5">
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
                  The trusted directory for
                  trenchless contractors
                </p>
              </div>

              <h1 className="mb-5 max-w-[650px] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.05] tracking-[-0.035em] text-white">
                Find the right
                <br />
                contractor{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  near you.
                </span>
              </h1>

              <p className="mb-8 max-w-[530px] text-sm md:text-base leading-6 md:leading-7 text-slate-300">
                Search by service, location or
                zip code and connect with verified
                trenchless contractors in your area.
              </p>
            </div>
          </div>

          <div
            className={`absolute left-6 top-[360px] w-[calc(100%-48px)] max-w-[700px] md:left-10 lg:left-12 pointer-events-auto z-30 rounded-[28px] border border-white/20 bg-[#071b2a]/85 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-700 ease-in-out ${
              mapActive
                ? "opacity-0 -translate-y-8"
                : "opacity-100 translate-y-0"
                
                
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex-1 px-4 py-2">
                <label className="mb-1 block text-[10px] md:text-[11px] font-semibold text-white">
                  What service do you need?
                </label>
                <p className="text-sm text-slate-500">
                        e.g. CIPP Lining, Pipe Bursting...
                      </p>
              </div>

              <div className="hidden md:block h-10 w-px bg-white/20" />

              <div className="block md:hidden h-px w-full bg-white/10" />

              <div className="flex-1 px-4 py-2">
                <label className="mb-1 block text-[10px] md:text-[11px] font-semibold text-white">
                  Location
                </label>

                <p className="text-sm text-slate-500">
                  City, State or Zip Code
                </p>
              </div>

            </div>
          </div>
          <div
           ref={searchButtonRef}
            className={`absolute left-6 top-[360px] w-[calc(100%-48px)] max-w-[700px] md:left-10 lg:left-12 flex `}
          >
                <OilDropButton mapActive={mapActive}  className="z-50 my-2 ml-auto mr-5 "onSubmit={(q) => setSearchTerm(q)} />
          </div>


          <div
            className={`pointer-events-none absolute left-6 md:left-10 lg:left-12 top-[540px] z-20 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-300 transition-all duration-700 ease-in-out ${
              mapActive
                ? "opacity-0 translate-y-8"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5">
                ✓
              </span>

              <span>
                Verified Contractors
              </span>
            </div>

            <div className="hidden sm:block h-5 w-px bg-white/15" />

            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5">
                ★
              </span>

              <span>
                Real Reviews
              </span>
            </div>

            <div className="hidden sm:block h-5 w-px bg-white/15" />

            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5">
                ◎
              </span>

              <span>
                Local &amp; Global
              </span>
            </div>
          </div>

          <div
            className={`pointer-events-auto absolute right-6 top-24 z-20 hidden lg:flex items-center gap-3 rounded-full border border-white/10 bg-[#061725]/80 px-4 py-2.5 backdrop-blur-md transition-all duration-700 ease-in-out ${
              mapActive
                ? "opacity-0 translate-x-8"
                : "opacity-100 translate-x-0"
            }`}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
              +
            </span>

            <div>
              <p className="text-xs font-semibold text-white">
                538 contractors found
              </p>

              <p className="text-[10px] text-slate-400">
                near your location
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}