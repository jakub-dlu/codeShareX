import { useState } from "react";
import { useConfig } from "../../context/ConfigContext";
import { TbBackground } from "react-icons/tb";

export default function BackgroundSelector() {
  const { bg, setBg } = useConfig();
  const [menuOpen, setMenuOpen] = useState(false);

  const themes = [
    { name: "Pinky", value: "from-blue-500 via-purple-500 to-rose-500" },
    { name: "Sky", value: "from-violet-600 via-blue-500 to-sky-400" },
    { name: "Dark Fusion", value: "from-black to-white" },
    { name: "Flame", value: "from-red-600 via-orange-500 to-yellow-500" },
    { name: "Dark-Neutral", value: "from-black to-neutral-500" },
  ];

  return (
    <div className="relative flex flex-col items-start w-full md:w-auto">
      <label className="text-gray-300 text-xs mb-1 ml-1">Background</label>
      <button
        className="flex w-full md:w-auto items-center gap-2 text-gray-200 hover:text-white transition-colors px-3 py-2 border border-gray-700 rounded-md bg-gray-900 hover:bg-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <TbBackground />
        {themes.find(t => t.value === bg)?.name || "Select"}
      </button>

      {menuOpen && (
        <ul className="absolute top-full mt-2 bg-gray-900 border border-gray-700 text-gray-200 rounded-md shadow-lg w-full md:w-auto z-20">
          {themes.map((t) => (
            <li
              key={t.value}
              className="px-4 py-3 cursor-pointer hover:bg-gray-800 transition-colors rounded-md flex flex-row gap-4 items-center"
              onClick={() => {
                setBg(t.value);
                setMenuOpen(false);
              }}
            >
              <div className={`w-8 h-8 bg-gradient-to-tl border border-gray-700 ${t.value} rounded-full`}></div>
              <p className="whitespace-nowrap">{t.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
