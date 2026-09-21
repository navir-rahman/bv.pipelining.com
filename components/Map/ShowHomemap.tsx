"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const HomeMap = dynamic(() => import("./HomeMap"), {
  ssr: false,
});
interface ShowHomeMap{
  searchTerm: string,
  isdark: boolean,
  setIsDark: any
}

function ShowHomemap({searchTerm,isdark, setIsDark}: ShowHomeMap) {


  return (
    <div>
      <button
        type="button"
        onClick={() => setIsDark(!isdark)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Change Theme
      </button>

      <HomeMap searchTerm={searchTerm} setIsDark={setIsDark} isdark={isdark} />
    </div>
  );
}

export default ShowHomemap;