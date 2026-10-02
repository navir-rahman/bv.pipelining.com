"use client";

import React, { useState, useRef, useCallback, ReactNode } from "react";

export type CardCategory = "ai-security" | "cloud" | "pipeline" | string;

export interface cardPortate {
  title: string;
  description: string;
  date: string;
  category: CardCategory;
  platformText: string;
  actionText?: string;
  onClick?: () => void;
  customStage?: ReactNode;
  variant?: "orange-cyan" | "cyan-purple" | "blue-emerald" | "emerald-cyan";
  href?: string;
}

export const CardPortate: React.FC<cardPortate> = ({
  title,
  description,
  date,
  category,
  platformText,
  actionText = "Explore Documentation",
  onClick,
  customStage,
  variant = "orange-cyan",
  href="",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for dynamic #f48217 specular sheen
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  // Theme configuration presets using #f48217
  const variantStyles = {
    "orange-cyan": {
      categoryBorder: "border-[#f48217]/30 bg-[#f48217]/10 text-[#f48217]",
      platformBg:
        "bg-gradient-to-br from-[#f48217] via-[#d96e0c] to-[#9a4b00] shadow-[0_15px_30px_rgba(244,130,23,0.45)]",
      platformText:
        "text-[#ffffff] [text-shadow:0_3px_0_#9a4b00,0_0_15px_rgba(244,130,23,0.8)]",
      actionText: "text-[#f48217]",
      glowBar:
        "bg-gradient-to-r from-[#f48217] to-[#00f0ff] group-hover:shadow-[0_0_18px_rgba(244,130,23,0.9),0_0_30px_rgba(0,240,255,0.6)]",
      borderHover:
        "hover:bg-[linear-gradient(135deg,rgba(244,130,23,0.95)_0%,rgba(0,240,255,0.7)_50%,rgba(255,255,255,0.6)_100%)]",
      shadowHover:
        "hover:shadow-[0_24px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(244,130,23,0.35)]",
    },
    "cyan-purple": {
      categoryBorder: "border-[#00f0ff]/25 bg-[#00f0ff]/10 text-[#00f0ff]",
      platformBg:
        "bg-gradient-to-br from-purple-500 via-purple-700 to-purple-900 shadow-[0_15px_30px_rgba(109,40,217,0.6)]",
      platformText:
        "text-[#00f0ff] [text-shadow:0_3px_0_#0284c7,0_0_15px_rgba(0,240,255,0.6)]",
      actionText: "text-sky-400",
      glowBar:
        "bg-gradient-to-r from-[#00f0ff] to-[#a855f7] group-hover:shadow-[0_0_18px_rgba(0,240,255,0.9),0_0_30px_rgba(168,85,247,0.6)]",
      borderHover:
        "hover:bg-[linear-gradient(135deg,rgba(0,240,255,0.95)_0%,rgba(168,85,247,0.85)_50%,rgba(255,255,255,0.6)_100%)]",
      shadowHover:
        "hover:shadow-[0_24px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,240,255,0.25)]",
    },
    "blue-emerald": {
      categoryBorder: "border-sky-400/30 bg-sky-400/10 text-sky-400",
      platformBg:
        "bg-gradient-to-br from-sky-600 via-sky-700 to-sky-900 shadow-[0_15px_30px_rgba(3,105,161,0.6)]",
      platformText:
        "text-white [text-shadow:0_3px_0_#075985,0_0_15px_rgba(56,189,248,0.6)]",
      actionText: "text-sky-400",
      glowBar:
        "bg-gradient-to-r from-sky-400 to-emerald-500 group-hover:shadow-[0_0_18px_rgba(56,189,248,0.9),0_0_30px_rgba(16,185,129,0.6)]",
      borderHover:
        "hover:bg-[linear-gradient(135deg,rgba(56,189,248,0.95)_0%,rgba(16,185,129,0.85)_50%,rgba(255,255,255,0.6)_100%)]",
      shadowHover:
        "hover:shadow-[0_24px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(56,189,248,0.25)]",
    },
    "emerald-cyan": {
      categoryBorder:
        "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
      platformBg:
        "bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 shadow-[0_15px_30px_rgba(4,120,87,0.6)]",
      platformText:
        "text-emerald-300 [text-shadow:0_3px_0_#064e3b,0_0_15px_rgba(52,211,153,0.6)]",
      actionText: "text-emerald-400",
      glowBar:
        "bg-gradient-to-r from-emerald-500 to-[#00f0ff] group-hover:shadow-[0_0_18px_rgba(16,185,129,0.9),0_0_30px_rgba(0,240,255,0.6)]",
      borderHover:
        "hover:bg-[linear-gradient(135deg,rgba(16,185,129,0.95)_0%,rgba(0,240,255,0.85)_50%,rgba(255,255,255,0.6)_100%)]",
      shadowHover:
        "hover:shadow-[0_24px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(16,185,129,0.25)]",
    },
  }[variant];

  // Dynamic light color based on theme
  const sheenColor = variant === "orange-cyan" ? "244, 130, 23" : "0, 240, 255";

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative cursor-pointer rounded-[24px] p-[1px] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]
        bg-[linear-gradient(135deg,rgba(244,130,23,0.45)_0%,rgba(0,240,255,0.35)_50%,rgba(255,255,255,0.15)_100%)]
        ${variantStyles.borderHover}
        shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(244,130,23,0.12)]
        ${variantStyles.shadowHover}
        hover:-translate-y-1.5`}
    >
      {/* Inner Container */}
      <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[23px] bg-[linear-gradient(155deg,#182032_0%,#0f1523_50%,#0b0e18_100%)] p-6">
        {/* Metallic Brushed Surface Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60 
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:20px_20px]"
        />

        {/* Dynamic #f48217 Specular Light Follower */}
        <div
          className="pointer-events-none absolute -inset-[100px] z-20 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0.75,
            background: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, rgba(${sheenColor}, 0.22), transparent 80%)`,
          }}
        />

        <div className="flex flex-col">
          {/* Header Metadata */}
          <div className="relative z-30 mb-5 flex items-center justify-between">
            <span className="text-xs font-medium tracking-wide text-slate-400">
              {date}
            </span>
            <span
              className={`rounded-md border px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider ${variantStyles.categoryBorder}`}
            >
              {category}
            </span>
          </div>

          <div className="flex flex-row  gap-5">
            {/* 3D Stage / Artwork Display */}
            <div className="max-w-80 relative z-30 mb-6 flex h-[190px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_50%,rgba(28,24,38,0.85)_0%,rgba(8,12,22,0.95)_100%)]">
              {customStage ? (
                customStage
              ) : (
                <>
                  {/* Perspective Grid Floor */}
                  <div
                    className="absolute -top-[30%] h-[160%] w-[160%] opacity-25
                  bg-[linear-gradient(rgba(244,130,23,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(244,130,23,0.3)_1px,transparent_1px)]
                  bg-[size:24px_24px] [transform:perspective(250px)_rotateX(65deg)]
                  [mask-image:radial-gradient(circle_at_50%_50%,black_30%,transparent_80%)]"
                  />

                  {/* Floating Symbols */}
                  <div className="absolute top-[15px] text-lg font-bold text-[#f48217] drop-shadow-[0_0_10px_rgba(244,130,23,0.6)] transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-y-1">
                    &lt;/&gt;
                  </div>

                  <div className="absolute left-[20%] top-[38%] flex h-[36px] w-[32px] items-center justify-center bg-[#f48217] drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 [clip-path:polygon(50%_0%,100%_20%,85%_75%,50%_100%,15%_75%,0%_20%)]">
                    <div className="h-[24px] w-[20px] bg-[#0a0d14] [clip-path:inherit]" />
                  </div>

                  <div className="absolute right-[20%] top-[40%] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-emerald-500 text-xs font-extrabold text-[#05070a] shadow-[0_0_12px_rgba(16,185,129,0.4)] transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ✓
                  </div>

                  {/* Cloud Graphic Component */}
                  <div
                    className="absolute left-[30%] top-[30%] h-[28px] w-[60px] rounded-full bg-gradient-to-br from-amber-500 to-[#f48217] shadow-[0_8px_16px_rgba(244,130,23,0.35)]
                before:absolute before:-top-[12px] before:left-[10px] before:h-[26px] before:w-[26px] before:rounded-full before:bg-amber-500"
                  />

                  {/* Central Metallic #f48217 AI Platform */}
                  <div
                    className={`relative top-[15px] flex h-[60px] w-[130px] items-center justify-center rounded-xl [transform:perspective(400px)_rotateX(55deg)_rotateZ(-5deg)] transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105 ${variantStyles.platformBg}
                  after:absolute after:-bottom-[8px] after:left-0 after:right-0 after:h-[8px] after:-skew-x-[15deg] after:rounded-b-xl after:bg-[#5a2a00]`}
                  >
                    <span
                      className={`font-sans text-3xl font-extrabold italic [transform:perspective(300px)_rotateX(-10deg)] ${variantStyles.platformText}`}
                    >
                      {platformText}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Card Body & Text Content */}
            <div className="relative z-30 flex flex-grow flex-col justify-between">
              <div>
                <h3 className="mb-3 font-sans text-xl font-bold leading-snug text-slate-100 transition-colors duration-250 group-hover:text-white">
                  {title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                  {description}
                </p>
              </div>

              {/* Action Link Footer & Glow Bar */}
              <div className="relative flex items-center justify-between border-t border-white/10 pt-4">
                <span
                  className={`flex items-center gap-1.5 text-sm font-semibold ${variantStyles.actionText}`}
                >
                  {actionText}
                  <span className="text-base transition-transform duration-250 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </span>

                {/* Persistent Accent Light Bar */}
              </div>
            </div>
                <div
                  className={`absolute -bottom-0 -left-6 -right-6 h-[3px] opacity-60 transition-all duration-300 group-hover:opacity-100 ${variantStyles.glowBar}`}
                />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPortate;
