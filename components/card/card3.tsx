import React from "react";

export default function AiSecurityCard() {
  return (
    <article className="group relative w-[280px] rotate-[-4deg] cursor-pointer transition-all duration-500 hover:rotate-0 hover:-translate-y-2">
      {/* Outer glow / border */}
      <div className="rounded-[28px] bg-gradient-to-br from-violet-400/80 via-violet-600/50 to-cyan-400/30 p-[1px] shadow-[0_35px_80px_rgba(0,0,0,0.55),0_0_35px_rgba(100,60,230,0.25)]">
        <div className="relative min-h-[490px] overflow-hidden rounded-[27px] bg-[#111a42]">
          {/* Subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(170,145,255,.055) 1px, transparent 1px),
                linear-gradient(90deg, rgba(170,145,255,.055) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 75%)",
            }}
          />

          {/* Header */}
          <div className="relative z-20 flex items-center justify-between px-5 pt-5">
            <span className="text-[10px] text-[#b9b6dc]">
              May 5, 2024
            </span>

            <span className="rounded-md border border-cyan-300/25 bg-cyan-300/[0.08] px-2 py-1 text-[8px] font-bold uppercase tracking-[1px] text-cyan-300">
              AI Security
            </span>
          </div>

          {/* Artwork */}
          <div className="relative mt-1 h-[265px] overflow-hidden bg-[radial-gradient(circle_at_50%_68%,rgba(139,65,245,.55),transparent_25%),linear-gradient(155deg,#091634,#111a48_57%,#34208c)]">
            {/* Stars */}
            <span className="absolute left-[13%] top-[36%] h-[2px] w-[2px] rounded-full bg-[#d5caff] shadow-[0_0_6px_#bba4ff]" />
            <span className="absolute left-[39%] top-[46%] h-[2px] w-[2px] rounded-full bg-[#d5caff] shadow-[0_0_6px_#bba4ff]" />
            <span className="absolute right-[18%] top-[29%] h-[2px] w-[2px] rounded-full bg-[#d5caff] shadow-[0_0_6px_#bba4ff]" />
            <span className="absolute right-[31%] top-[50%] h-[2px] w-[2px] rounded-full bg-[#d5caff] shadow-[0_0_6px_#bba4ff]" />

            {/* Purple light beam */}
            <div
              className="absolute bottom-[-30px] left-1/2 h-[220px] w-[210px] -translate-x-1/2 rotate-x-[53deg] bg-gradient-to-t from-violet-500/50 to-transparent"
              style={{
                clipPath: "polygon(23% 100%,77% 100%,100% 0,0 0)",
              }}
            />

            {/* Perspective floor */}
            <div
              className="absolute -bottom-[58px] -left-[15%] -right-[15%] h-[155px] opacity-70"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(160,117,255,.12) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(160,117,255,.12) 1px, transparent 1px)
                `,
                backgroundSize: "28px 28px",
                transform: "perspective(280px) rotateX(60deg)",
              }}
            />

            {/* Code icon */}
            <div className="absolute left-1/2 top-5 z-10 -translate-x-1/2 text-[22px] font-extrabold text-violet-400 drop-shadow-[0_6px_9px_rgba(0,0,0,.35)]">
              &lt;/&gt;
            </div>

            {/* Shield */}
            <div
              className="absolute left-[18%] top-[34%] h-[31px] w-[25px] bg-cyan-300 drop-shadow-[0_6px_9px_rgba(0,0,0,.35)]"
              style={{
                clipPath:
                  "polygon(50% 0,100% 20%,85% 76%,50% 100%,15% 76%,0 20%)",
              }}
            />

            {/* Check */}
            <div className="absolute right-[24%] top-[35%] grid h-[17px] w-[17px] place-items-center rounded-full bg-cyan-300 text-[10px] font-extrabold text-white shadow-[0_6px_9px_rgba(0,0,0,.35)]">
              ✓
            </div>

            {/* Warning / diamond */}
            <div className="absolute right-[12%] top-[34%] rotate-12 text-[24px] text-purple-400 drop-shadow-[0_6px_9px_rgba(0,0,0,.35)]">
              ◆
            </div>

            {/* Cloud */}
            <div className="absolute left-[31%] top-[43%] z-20 h-[23px] w-[52px] rounded-[18px] bg-gradient-to-br from-sky-400 to-blue-600 drop-shadow-[0_7px_8px_rgba(0,0,0,.22)] before:absolute before:left-[9px] before:top-[-11px] before:h-[25px] before:w-[25px] before:rounded-full before:bg-sky-400 after:absolute after:right-[8px] after:top-[-7px] after:h-[18px] after:w-[21px] after:rounded-full after:bg-sky-400" />

            {/* AI platform */}
            <div className="absolute left-1/2 top-[57%] z-10 grid h-[64px] w-[128px] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] skew-x-[-6deg] place-items-center rounded-[13px_13px_19px_19px] bg-gradient-to-br from-[#9b4cf1] via-[#6333c7] to-[#4221a4] shadow-[0_18px_32px_rgba(43,15,110,.55),inset_0_1px_rgba(255,255,255,.2)] transition-transform duration-500 group-hover:scale-105">
              <div className="relative z-10 -skew-x-[-6deg] text-[42px] font-extrabold italic tracking-[-6px] text-cyan-300 [text-shadow:2px_3px_0_#258ac5,0_0_14px_rgba(67,227,239,.5)]">
                AI
              </div>

              {/* Platform bottom edge */}
              <div className="absolute -bottom-[9px] left-0 right-0 h-[10px] skew-x-[-13deg] rounded-b-[11px] bg-[#391680]" />
            </div>
          </div>

          {/* Content */}
          <div className="relative bg-gradient-to-b from-[#262c70] to-[#232865] px-[22px] pb-5 pt-6">
            <h2 className="max-w-[240px] font-sans text-[18px] font-bold leading-[1.28] tracking-[-0.02em] text-white">
              Just Launched: Checkmarx AI Security
            </h2>

            <p className="mt-2 min-h-[38px] text-[12px] leading-[1.5] text-[#aaa9d0]">
              Real-time LLM posture management and automated code synthesis
              threat protection.
            </p>

            <div className="mt-4 flex items-center justify-between border-t border-violet-300/10 pt-3">
              <span className="text-[11px] font-bold text-cyan-300">
                Explore Documentation
                <span className="ml-1 text-[16px]">↗</span>
              </span>
            </div>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-[18px] right-[18px] h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_14px_rgba(67,227,239,.5)]" />
          </div>
        </div>
      </div>
    </article>
  );
}