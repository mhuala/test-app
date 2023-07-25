"use client";
import Home1 from "@/components/Home/Home1";
import Home2 from "@/components/Home/Home2";
import Home3 from "@/components/Home/Home3";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState(1);

  const handleViews = (e) => {
    if (view === 3) {
      setView(1);
    } else {
      setView(view + 1);
    }
  };
  return (
    <div className="flex-col">
      <div className="bg-sky-900 flex space-x-4 h-12 p-8 items-center">
        <button
          className="text-white py-2 bg-gray-700 rounded-xl px-12 font-amatic"
          onClick={handleViews}
        >
          Opción {view}
        </button>
      </div>
      <div className={view === 1 ? "block" : "hidden"}>
        <Home1 />
      </div>
      <div className={view === 2 ? "block" : "hidden"}>
        <Home2 />
      </div>
      <div className={view === 3 ? "block" : "hidden"}>
        <Home3 />
      </div>
    </div>
  );
}
