 "use client" 
import { stateAbbreviations } from "@/lib/statesName";
 import dynamic from "next/dynamic";


import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const badges = [
  { name: "CA", coordinates: [-119.4179, 36.7783], count: 24 },
  { name: "TX", coordinates: [-99.9018, 31.9686], count: 18 },
  { name: "FL", coordinates: [-81.5158, 27.6648], count: 32 },
  { name: "NY", coordinates: [-74.0060, 40.7128], count: 16 },
];

type FilterProps = {
  area: string;
  setArea: React.Dispatch<React.SetStateAction<string>>;

};



const GlassStatesMap = ({ area, setArea }: FilterProps) => {
  const [hoveredState, setHoveredState] = useState(null);
  const [activeState, setActiveState] = useState(null);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, name: "" });


  // Glass color logic using 8-Digit Hex Codes (#RRGGBBAA)
const getStateStyles = (geoId: any, stateName: any) => {
  const isHighlighted = ["06", "48", "12", "36"].includes(geoId);

  // 1. ACTIVE STATE (Brightest Neon - White core with Purple glow)
  if (activeState === stateName) {
    return { 
      fill: "rgba(167, 139, 250, 0.2)", // White at 40%
      stroke: "#A78BFA",                 // Solid white core
      strokeWidth: "2px",                // Thicker border for emphasis
      // The Neon Glow: Inner tight white glow, outer wide purple glow
      filter: "drop-shadow(0 0 6px #FFFFFF) drop-shadow(0 0 15px #A78BFA)" 
    };
  }

  // 2. HOVERED STATE (Bright Neon - Purple core with Purple glow)
  if (hoveredState === stateName) {
    return { 
      fill: "rgba(167, 139, 250, 0.2)", // Purple at 20%
      stroke: "#A78BFA",                 // Neon purple core
      strokeWidth: "1.5px",
      filter: "drop-shadow(0 0 5px #A78BFA) drop-shadow(0 0 10px #A78BFA)" 
    };
  }

  // 3. HIGHLIGHTED STATES (CA, TX, FL, NY - Neon Cyan)
  if (isHighlighted) {
    return { 
      fill: "rgba(0, 255, 255, 0.15)",  // Cyan at 15%
      stroke: "#00FFFF",                 // Neon cyan core
      strokeWidth: "1.5px",
      filter: "drop-shadow(0 0 4px #00FFFF) drop-shadow(0 0 8px #00FFFF)" 
    };
  }

  // 4. DEFAULT STATE (No glow, just subtle outlines to keep focus on the neon states)
  return { 
    fill: "rgba(255, 255, 255, 0.05)", // White at 5%
    stroke: "rgba(255, 255, 255, 0.2)", // White at 20%
    strokeWidth: "1px"
  };
};

  return (
    <>
      <style>
        {`
        
.map_bg {
  background-image:
    /* A — soft white bloom */
    radial-gradient(ellipse 38% 28% at 43% 43%, rgba(255, 255, 255, 0.75), transparent 72%),
    /* B — cool blue haze */
    radial-gradient(ellipse 32% 35% at 67% 52%, rgba(137, 215, 255, 0.20), transparent 75%),
    /* C — upper-right highlight */
    radial-gradient(ellipse 25% 22% at 82% 30%, rgba(255, 255, 255, 0.38), transparent 70%),
    /* D — large blue atmosphere */
    radial-gradient(ellipse 75% 95% at 72% 48%, rgba(164, 226, 255, 0.62) 0%, rgba(164, 226, 255, 0.48) 24%, rgba(164, 226, 255, 0.30) 46%, rgba(164, 226, 255, 0.12) 68%, transparent 82%),
    /* E — bright center */
    radial-gradient(ellipse 48% 65% at 50% 52%, rgba(255, 255, 255, 0.95) 0%, rgba(244, 251, 255, 0.78) 30%, rgba(215, 242, 255, 0.42) 60%, transparent 80%),
    /* F — upper-right light */
    radial-gradient(ellipse 55% 45% at 86% 10%, rgba(177, 229, 255, 0.48) 0%, rgba(207, 241, 255, 0.25) 42%, transparent 75%),
    /* G — lower-right light */
    radial-gradient(ellipse 55% 48% at 84% 92%, rgba(171, 226, 255, 0.42) 0%, rgba(208, 241, 255, 0.22) 45%, transparent 78%),
    /* H — base gradient */
    linear-gradient(105deg, #ffffff 0%, #ffffff 15%, #fcfeff 28%, #f7fcff 42%, #edf9ff 62%, #e2f5ff 82%, #daf1ff 100%);
}

          .rsm-geography:focus {
            outline: none;
          }

          .tooltip {
            position: fixed;
            background: #FFFFFF26; /* 15% White */
            backdrop-filter: blur(16px) brightness(1.1);
            -webkit-backdrop-filter: blur(16px) brightness(1.1);
            border: 1px solid #FFFFFF4D; /* 30% White */
            /* All shadows converted to 8-digit Hex */
            box-shadow: inset 4px 4px 0px -4px #FFFFFFB3, 
                        inset 0 0 8px 1px #FFFFFF80,
                        0 8px 32px #0000004D;
            padding: 12px 18px;
            border-radius: 16px;
            color: black;
            pointer-events: none;
            z-index: 1000;
          }

        `}
      </style>

      {tooltip.show && (
        <div className="tooltip" style={{ top: tooltip.y + 15, left: tooltip.x + 15 }}>
          <div style={{ fontWeight: "700", fontSize: "14px" }}>{tooltip.name}</div>
          <div style={{ fontSize: "12px", opacity: 0.8, marginTop: "4px" }}>
            Verified: {"not set"}
          </div>
        </div>
      )}

      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        style={{ width: "100%", height: "100%", overflow: "visible" ,  }}
      >
        <defs>
          {/* Drop shadow filter - floodColor uses Hex */}
          <filter id="glassDropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.4" />
          </filter>

          {/* Inner shine filter - flood-color uses Hex */}
          <filter id="glassInnerShine">
            <feOffset dx="2" dy="2"/>
            <feGaussianBlur stdDeviation="3" result="offset-blur"/>
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
            <feFlood floodColor="" floodOpacity="0.6" result="color"/>
            <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
            <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
          </filter>
        </defs>

        {/* <ZoomableGroup zoom={1} minZoom={0.8} maxZoom={5}> */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const stateName = geo?.properties?.name;
                const styles = getStateStyles(geo.id, stateName);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    tabIndex={-1}
                    fill={styles.fill}
                    stroke={styles.stroke}
                    strokeWidth={1.5}
                    filter="url(#glassDropShadow) url(#glassInnerShine)"
                    
                    onMouseEnter={(e) => {
                      setHoveredState(stateName);
                      setTooltip({ show: true, x: e.clientX, y: e.clientY, name: stateName });
                    }}
                    onMouseMove={(e) => {
                      setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
                    }}
                    onMouseLeave={() => {
                      setHoveredState(null);
                      setTooltip((prev) => ({ ...prev, show: false }));
                    }}
                    onClick={() => {
                        const newState = stateName === activeState ? null : stateName;
                        setActiveState(newState);
                        setArea(newState ? stateAbbreviations[newState] || "" : "");
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Glass Badges */}
          {badges.map(({ name, coordinates, count }) => (
            <Marker key={name} coordinates={[coordinates[0], coordinates[1]]}>
              <g transform="translate(-18, -18)" filter="url(#glassDropShadow)">
                <circle 
                  cx="18" cy="18" r="18" 
                  fill="#FFFFFF26" 
                  stroke="#FFFFFF99" 
                  strokeWidth="1.5"
                />
                <text textAnchor="middle" x="18" y="15" fill="#FFFFFF" fontSize="13" fontWeight="700">
                  {count}
                </text>
                <text textAnchor="middle" x="18" y="26" fill="#FFFFFFCC" fontSize="9" fontWeight="500">
                  {name}
                </text>
              </g>
            </Marker>
          ))}
        {/* </ZoomableGroup> */}
      </ComposableMap>
    </>
  );
};

export default GlassStatesMap;