"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";

const ico: any = {
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
};

export default function Map() {
  const [coordinates, setCoordinates] = useState({lat: 23.8103,lng: 90.4125,});
  const [searchLoacation, setSearchLoaction] = useState("");

  const markerRef = useRef<L.Marker | null>(null);

const mapRef = useRef<L.Map | null>(null);


  useEffect(() => {

    const map = L.map("map").setView([23.8103, 90.4125], 13);
      mapRef.current = map;

    markerRef.current = L.marker([coordinates.lat, coordinates.lng],{ icon: L.icon(ico) }).addTo(map);

    map.on("click", (event) => {
      setCoordinates({
        lat: event.latlng.lat,
        lng: event.latlng.lng,
      });
      markerRef.current?.setLatLng(event.latlng);
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    return () => {map.remove();};
    }, []);

  return (
    <>
<form
  onSubmit={async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${searchLoacation}`
    );

    const data = await response.json();
    const lat = Number(data[0].lat);
    const lng = Number(data[0].lon);

    setCoordinates({lat: lat,lng: lng,});
    markerRef.current?.setLatLng([lat, lng]);
    mapRef.current?.flyTo([lat, lng], 15,{duration: 2,});
  }}
>
  <input
    type="text"
    value={searchLoacation}
    onChange={(event) => setSearchLoaction(event.target.value)}
    placeholder="Search a location..."
  />

  <button type="submit">
    Search
  </button>
</form>
      <div>{coordinates.lat}</div>
      <div id="map" style={{ height: "500px" }}></div>
    </>
  );
}