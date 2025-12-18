import { useState } from "react";
import { useConfig } from "../../context/ConfigContext";
import { RiFontSize } from "react-icons/ri";

export default function SizeSelector() {
  const { fontSize, setFontSize } = useConfig();
  const [menuOpen, setMenuOpen] = useState(false);

  const themes = [
    { name: "xlarge", value: "text-3xl" },
    { name: "large", value: "text-2xl" },
    { name: "medium", value: "text-xl" },
    { name: "small", value: "text-md" },
  ];

  return (
    <div className="relative flex flex-col items-start w-full md:w-auto">
      <label className="text-gray-300 text-xs mb-1 ml-1">Font Size</label>
      <button
        className="flex w-full md:w-auto items-center gap-2 text-gray-200 hover:text-white transition-colors px-3 py-2 border border-gray-700 rounded-md bg-gray-900 hover:bg-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <RiFontSize />
        {themes.find(t => t.value === fontSize)?.name || "Select"}
      </button>

      {menuOpen && (
        <ul className="absolute top-full mt-2 bg-gray-900 border border-gray-700 text-gray-200 rounded-md shadow-lg z-20 w-full md:w-40">
          {themes.map((t) => (
            <li
              key={t.value}
              className="px-4 py-2 cursor-pointer hover:bg-gray-800 transition-colors rounded-md"
              onClick={() => {
                setFontSize(t.value);
                setMenuOpen(false);
              }}
            >
              {t.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
