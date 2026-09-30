"use client";
import React from "react";
export default function Card4() {
  return (
    <div className="flex items-center justify-center" >
      <article  className="hover:-translate-y-1.5 ease-in duration-300
hover:shadow-[0_24px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,240,255,0.25)]
 group relative h-[410px] w-[260px] overflow-hidden rounded-[20px] bg-[#111735] border-l-[3px] border-t-[3px] border-l-[#530094] border-t-[#530094] shadow-[0_18px_35px_rgba(0,0,0,0.55)] ">
        <div className=" border-[#CEC4DF] ">

<div className="pointer-events-none absolute inset-[0px] rounded-[15px] border  border-t-[#CEC4DF]/40 border-l-[#CEC4DF]/40 z-20" />
        
        {" "}
        {/*=====================================================CARD DEPTH Thin dark underside — gives physical thickness======================================================*/}{" "}
        <div className=" pointer-events-none absolute -bottom-[3px] left-[4px] right-[2px] h-[5px] rounded-b-[20px] bg-[#080c20] " />
        <div className=" pointer-events-none absolute bottom-[3px] left-0 top-[5px] w-[4px] rounded-l-[22px] bg-gradient-to-b from-[#403b75] via-[#1b2043] to-[#080c20] " />{" "}
        {/*=====================================================MAIN CARD SURFACE======================================================*/}{" "}
        <div className="absolute inset-0 overflow-hidden rounded-[22px]">
            
          {" "}
          {/* overall material */}{" "}
          <div className=" absolute inset-0 bg-[#101633] bg-[radial-gradient( circle_at_48%_38%, rgba(54,47,126,0.34), transparent_48% )] " />{" "}
          {/* subtle surface reflection */}{" "}
          <div className=" pointer-events-none absolute inset-0 bg-[linear-gradient( 125deg, rgba(255,255,255,0.055)_0%, transparent_17%, transparent_70%, rgba(108,87,255,0.055)_100% )] " />{" "}
          {/*===================================================TOP ARTWORK====================================================*/}{" "}
          <div className=" absolute inset-x-0 top-0 h-[276px] overflow-hidden bg-[radial-gradient( circle_at_50%_76%, #5033a5_0%, #292366_32%, #151a3d_64%, #0b1129_100% )] ">
            
            
            <div className="pointer-events-none absolute inset-[0px] rounded-[16px] border border-b-0 border-[#CEC4DF]/50 z-20" />
            {/* <img className="h-full w-full" src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5" alt="" /> */}
            
            
            {" "}
            {/* atmospheric purple glow */}{" "}
            <div className=" absolute left-1/2 top-[155px] h-[145px] w-[220px] -translate-x-1/2 rounded-full bg-[#7138db]/20 blur-[42px] " />{" "}
            {/*=================================================STARS==================================================*/}{" "}
            <span className="absolute left-[18%] top-[31%] h-[2px] w-[2px] rounded-full bg-white/50" />
            <span className="absolute left-[73%] top-[29%] h-[2px] w-[2px] rounded-full bg-white/50" />
            <span className="absolute left-[61%] top-[52%] h-[2px] w-[2px] rounded-full bg-white/45" />
            <span className="absolute left-[31%] top-[57%] h-[2px] w-[2px] rounded-full bg-white/35" />
            <span className="absolute left-[81%] top-[63%] h-[1px] w-[1px] rounded-full bg-white/50" />
            <span className="absolute left-[44%] top-[43%] h-[1px] w-[1px] rounded-full bg-white/40" />{" "}
            {/*=================================================CODE ICON==================================================*/}{" "}
            <div className=" absolute left-1/2 top-[47px] -translate-x-1/2 text-[18px] font-black tracking-[-5px] text-[#9b4bea] drop-shadow-[0_0_9px_rgba(155,75,234,0.7)] ">
              {" "}
              &lt;/&gt;{" "}
            </div>{" "}
            {/*=================================================SHIELD==================================================*/}{" "}
            <div className=" absolute left-[43px] top-[99px] h-[27px] w-[25px] bg-gradient-to-br from-[#54e9ec] via-[#29cbdc] to-[#179ab8] drop-shadow-[0_7px_12px_rgba(0,220,255,0.25)] [clip-path:polygon( 50%_0%, 100%_17%, 88%_72%, 50%_100%, 12%_72%, 0%_17% )] ">
              <div className=" absolute left-[6px] top-[5px] h-[17px] w-[13px] bg-[#152044] [clip-path:inherit] " />
            </div>{" "}
            {/*=================================================CHECK==================================================*/}{" "}
            <div className=" absolute right-[45px] top-[102px] flex h-[15px] w-[15px] items-center justify-center rounded-full bg-gradient-to-br from-[#63ece7] to-[#27bbc8] text-[9px] font-black text-[#14204a] shadow-[0_0_12px_rgba(53,220,220,0.4)] ">
              {" "}
              ✓{" "}
            </div>{" "}
            {/*=================================================WARNING TRIANGLE==================================================*/}{" "}
            <div className=" absolute right-[27px] top-[111px] h-[28px] w-[28px] rotate-[12deg] rounded-[5px] bg-gradient-to-br from-[#c17bf1] via-[#9a5cda] to-[#6337a8] shadow-[0_8px_16px_rgba(99,54,175,0.4)] [clip-path:polygon( 50%_0%, 100%_86%, 0%_86% )] ">
              <span className=" absolute left-1/2 top-[7px] -translate-x-1/2 text-[10px] font-black text-white/80 ">
                {" "}
                !{" "}
              </span>
            </div>{" "}
            {/*=================================================CLOUD==================================================*/}{" "}
            <div className=" absolute left-[70px] top-[157px] h-[19px] w-[53px] rounded-full bg-gradient-to-b from-[#42aae8] via-[#2989d6] to-[#2564bd] shadow-[0_8px_17px_rgba(25,125,220,0.4)] before:absolute before:-left-[1px] before:-top-[10px] before:h-[27px] before:w-[27px] before:rounded-full before:bg-[#39a1df] after:absolute after:left-[17px] after:-top-[7px] after:h-[22px] after:w-[22px] after:rounded-full after:bg-[#369dde] " />{" "}
            {/*=================================================PERSPECTIVE GRID==================================================*/}{" "}
            <div className=" absolute -bottom-[100px] left-1/2 h-[220px] w-[430px] -translate-x-1/2 opacity-45 [transform:perspective(260px)_rotateX(63deg)] bg-[linear-gradient( rgba(133,78,255,0.23)_1px, transparent_1px ),linear-gradient( 90deg, rgba(133,78,255,0.23)_1px, transparent_1px )] bg-[size:35px_35px] [mask-image:linear-gradient( to_bottom, transparent, black_30%, black_75%, transparent )] " />{" "}
            {/*=================================================AI PLATFORM==================================================*/}{" "}
            <div className=" absolute left-1/2 top-[176px] h-[61px] w-[140px] -translate-x-1/2 rotate-[5deg] rounded-[17px] bg-gradient-to-br from-[#ad57eb] via-[#8541d0] to-[#572aa0] shadow-[ 0_14px_26px_rgba(60,20,130,0.58), 0_0_20px_rgba(126,56,225,0.25) ] ">
             
              {" "}
             
              {/* platform surface */}{" "}
              <div className=" absolute inset-[1px] rounded-[16px] bg-[linear-gradient( 135deg, rgba(255,255,255,0.13), transparent_35%, rgba(0,0,0,0.08) )] " />{" "}
              {/* platform lower thickness */}{" "}
              <div className=" absolute -bottom-[5px] left-[7px] right-[7px] h-[7px] rounded-b-[12px] bg-[#43217e] -z-10 " />{" "}
              {/* AI */}{" "}
              <div className=" absolute inset-0 flex items-center justify-center -translate-y-[1px] text-[44px] font-black italic tracking-[-5px] text-transparent bg-gradient-to-b from-[#72f7ef] via-[#42d9e5] to-[#28a9c3] bg-clip-text drop-shadow-[0_4px_2px_rgba(0,0,0,0.35)] ">
                {" "}
                AI{" "}
              </div>{" "}
              {/* tiny surface highlight */}{" "}
              <div className=" absolute left-[18px] right-[18px] top-[4px] h-px bg-white/20 " />
            </div>
          </div>{" "}
          {/*===================================================LOWER CARD SECTION STRAIGHT — NO DIAGONAL / NO ANGLED DIVIDER====================================================*/}{" "}
          <div className=" absolute inset-x-0 bottom-0 h-[140px] bg-gradient-to-b from-[#4c43b4] via-[#4139a6] to-[#322a83] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ">
            {" "}
            {/* soft material reflection */}{" "}
            <div className=" pointer-events-none absolute inset-0 bg-[linear-gradient( 110deg, rgba(255,255,255,0.07), transparent_32%, transparent_75%, rgba(0,0,0,0.08) )] " />{" "}
            {/* STRAIGHT divider */}{" "}
            <div className=" absolute left-0 right-0 top-0 h-px bg-[#7c75d4]/70 " />{" "}
            {/* arrow */}{" "}
            <div className=" absolute right-[17px] top-[11px] text-[21px] font-light text-white/70 ">
              {" "}
              ↗{" "}
            </div>{" "}
            {/* date */}{" "}
            <div className=" absolute left-[20px] top-[50px] text-[10px] font-medium text-white/60 ">
              {" "}
              May 5, 2024{" "}
            </div>{" "}
            {/* title */}{" "}
            <div className=" absolute left-[20px] top-[70px] text-[14px] font-semibold leading-[18px] text-white ">
              {" "}
              Just Launched: <br /> Checkmarx AI Security{" "}
            </div>
          </div>{" "}
          {/*===================================================FINAL MATERIAL HIGHLIGHT====================================================*/}{" "}
          <div className=" pointer-events-none absolute inset-0 rounded-[22px] bg-[linear-gradient( 125deg, rgba(255,255,255,0.045), transparent_20%, transparent_80%, rgba(125,100,255,0.035) )] " />
        
        
        
        </div>

</div>
      </article>
    </div>
  );
}
