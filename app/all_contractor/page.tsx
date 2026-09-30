"use client";

import CardPortate from "@/components/card/cardPortate";
import Filter from "@/components/filter/Filter";
import GlassStatesMap from "@/components/Map/reactSimpleMap/ReactSimpleMap";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [listScrollDistance, setListScrollDistance] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);


const listViewportRef = useRef<HTMLDivElement | null>(null);
const listContentRef = useRef<HTMLDivElement | null>(null);
  // ==========================================
  // PAGE SCROLL
  // ==========================================
  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      setScrollY(y);

      const value = Math.min(y / window.innerHeight, 1);
      setProgress(value);
    }

    function updateSize() {
      setViewportHeight(window.innerHeight);

      if (listViewportRef.current && listContentRef.current) {
        const distance =
          listContentRef.current.scrollHeight -
          listViewportRef.current.clientHeight;

        setListScrollDistance(Math.max(0, distance));
      }
    }

    handleScroll();
    updateSize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateSize);
    };
  }, []);
 
  // ==========================================
  // FETCH CONTRACTORS
  // ==========================================
  const [contractorsData, setContractorsData] = useState([]);

  useEffect(() => {
    async function getContractor() {
      try {
        const response = await fetch("/contractors.json");
        const data = await response.json();
        setContractorsData(data);
      } catch (error) {
        console.error("Failed to load contractors:", error);
      }
    }

    getContractor();
  }, []);

  // ==========================================
  // RECALCULATE LIST HEIGHT
  // ==========================================
useEffect(() => {
  const viewport = listViewportRef.current;
  const content = listContentRef.current;

  if (!viewport || !content) return;

  const updateListHeight = () => {
    const distance =
      content.scrollHeight - viewport.clientHeight;

    setListScrollDistance(Math.max(0, distance));
  };

  updateListHeight();

  const observer = new ResizeObserver(updateListHeight);

  observer.observe(content);
  observer.observe(viewport);

  return () => observer.disconnect();
}, [contractorsData]);

  // ==========================================
  // CONTRACTOR LIST PROGRESS
  // ==========================================
  const listingStart = viewportHeight;

  const listingProgress =
    listScrollDistance > 0
      ? Math.min(Math.max((scrollY - listingStart) / listScrollDistance, 0), 1)
      : 0;

  const listingOffset = listingProgress * listScrollDistance;

  const sectionHeight = viewportHeight * 2 + listScrollDistance;
  const listingEnd = listingStart + listScrollDistance;

  const mapExitOffset = Math.max(scrollY - listingEnd, 0);


  const [area, setArea] = useState("")

  return (
    <main className="relative">
      {/* <section className="h-lvh">df</section> */}
      <section
        className="relative map_bg"
        style={{ height: `${sectionHeight}px` }}
      >
{/* top */}




        {/* TOP LEFT */}
        <div  className="fixed top-10 left-40 h-[50vh] w-[70%]  will-change-transform"
          style={{
            transform: `translate3d(${-progress * 30}vw, 0, 0)`,
          }}
        >
          <div className="w-[30%] h-full">
            <div className="py-20 flex flex-col max-w-lg">
              <p className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-4">
                The Pipelining Network
              </p>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 mb-5">
                Trenchless
                <br />
                contractors,
                <br />
                <span className="bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  mapped.
                </span>
              </h1>

              <p className="text-lg text-slate-500 mb-8 max-w-md leading-relaxed">
                Search, explore and connect with verified trenchless
                professionals across the U.S.
              </p>

              <div className="flex items-center gap-6 bg-white/60 backdrop-blur-md border border-white/80 rounded-full px-6 py-3 shadow-sm w-fit">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-slate-900 leading-none">
                      1,248
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">
                      Contractors
                    </span>
                  </div>
                </div>

                <div className="w-px h-8 bg-slate-200" />

                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-slate-900 leading-none">
                      312
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">
                      Verified
                    </span>
                  </div>
                </div>

                <div className="w-px h-8 bg-slate-200" />

                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-slate-900 leading-none">
                      48
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">
                      States
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TOP RIGHT */}
        <div
          className=" fixed -right-10 z-10   will-change-transform"
          style={{
            top: `${50 - mapExitOffset}px`,
            width: `${70 - progress * 40}%`,
            height: `${100 - progress * 63}vh`,
            transform: `translate3d(${-progress * 70}vw, 0, 0)`,
          }}
        >
          <GlassStatesMap area={area} setArea={setArea } />
        </div>



        {/* BOTTOM LEFT */}
        <div className="sticky h-screen left-0  w-[0] bg-[#1f202c]"></div>

        {/* CONTRACTOR VIEWPORT */}
        <div
          ref={listViewportRef}
          className="sticky top-[40px] ml-auto h-[calc(100vh-40px)] w-[100%] overflow-hidden bg-[#1f202c]"
        >
          <div className="flex p-6">
            <div className="w-1/3 h-fit">
              <Filter area={area} setArea={setArea } />
            </div>

            {/* CONTRACTOR CONTENT */}
            <div
              ref={listContentRef}
              className="w-2/3 flex flex-col gap-6 p-6 will-change-transform"
              style={{
                transform: `translate3d(0, -${listingOffset}px, 0)`,
              }}
            >
              {contractorsData.filter((contractor) => !area || contractor["State"] === area).slice(0, 5).map((contractor, index) => {
                if (!contractor) return null;

                return (
                  <CardPortate
                    key={index}
                    date="May 5, 2024"
                    category="AI Security"
                    title={contractor?.["Company Name"]}
                    description={contractor?.["Claim Evidence"]}
                    platformText=""
                    
                   
                    href={contractor?.["Website"]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
