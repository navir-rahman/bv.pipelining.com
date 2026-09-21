"use client";

import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import { MapContainer, Circle, TileLayer, Marker, useMap } from 'react-leaflet';
import get_cordinate from "../../lib/convert_text_to_cordinate"
import { useEffect, useState } from "react"
import L from "leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';

type Cluster = {
  getChildCount: () => number;
};
interface HomeMapProps {
  searchTerm:string,
  setIsDark: any
  isdark: boolean
  overlayOpacity?: number // Optional custom opacity override
}
const radius = 160934; // 50 km
function HomeMap({ searchTerm, isdark, overlayOpacity , setIsDark}: HomeMapProps) {

  const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
});
  // Dynamically calculate overlay color based on theme, or use a custom opacity
  const defaultOpacity = isdark ? 0.35 : 0.4 
  const opacity = overlayOpacity ?? defaultOpacity
  const overlayColor = `rgba(0, 0, 0, ${opacity})`
  const [coords, setCoords] = useState([41.3006703,-105.2648026,]);
  useEffect(()=>{
    let cancelled = false;

    (async () => {
      if (!searchTerm?.trim()) {
        if (!cancelled) setCoords([coords[0], coords[1]]);
        return;
      }
      const result :any= await get_cordinate(searchTerm);
      setCoords(result);
  
    })();

    return () => { cancelled = true; };
  },[searchTerm])





  
const coordinates: [number, number] = [coords[0], coords[1]];

function FlyToLocation() {
  const map = useMap();

  useEffect(() => {
    map.flyTo(coordinates, 9);
  }, [map,coordinates]);

  return null;
}

// fectch contractor json and use it
const [contractorsData, setContractorsData] = useState([]);
useEffect(()=>{
  async function getContractor(){
    const response = await fetch('/contractors.json')
    const data = await response.json()
    setContractorsData(data)
  }

  getContractor();
},[])
  interface Contractor {
  ZIP: number;
  lat: number;
  lng: number;
}


  return (
    <div style={{position: "relative", height: "70vh", width: "100%" }}>
      <MapContainer
        center={[coords[0], coords[1]]}
        zoom={5}
        scrollWheelZoom={true}
        style={{
          height: "100%",
          width: "100%",
          background: isdark ? "#222" : "#fff",
          zIndex: 1,
        }}
      >
        <Circle
          center={[coords[0], coords[1]]}
          radius={radius}
        />
        <TileLayer
          url={
            isdark
              ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <FlyToLocation/>
       
         <MarkerClusterGroup
            iconCreateFunction={(cluster: Cluster) => {
              return L.divIcon({
                html: `<div>${cluster.getChildCount()}</div>`,
                className: "custom-cluster",
                iconSize: [50, 50],
              });
            }}
          >
            {contractorsData.map((contractor:Contractor,index) => ( 
            contractor?.lat && contractor?.lng &&
            <Marker
               key={index}
              position={[contractor?.lat, contractor?.lng]}
              icon={icon}
            />
          ))}
         </MarkerClusterGroup>
      </MapContainer>

      {/* Dynamic Overlay with Smooth Transition */}
      <div  style={{  position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: overlayColor, pointerEvents: "none",  zIndex: 400,  transition: "background-color 0.3s ease",  }}/>
    </div>
  )
}

export default HomeMap