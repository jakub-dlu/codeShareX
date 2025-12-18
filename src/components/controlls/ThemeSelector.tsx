import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { useConfig } from "../../context/ConfigContext";

export default function ThemeSelector() {
  const { theme, setTheme } = useConfig();
  const [menuOpen, setMenuOpen] = useState(false);

  const themes = [
    { name: "Atom", value: "atom-one-dark.css" },
    { name: "GitHub", value: "github-dark.css" },
    { name: "Kimbie", value: "kimbie-dark.css" },
    { name: "Tokyo", value: "tokyo-night-dark.css" },
  ];

  return (
    <div className="relative flex flex-col items-start w-full md:w-auto">
      <label className="text-gray-300 text-xs mb-1 ml-1">Theme</label>
      <button
        className="flex items-center gap-2 w-full md:w-auto text-gray-200 hover:text-white transition-colors px-3 py-2 border border-gray-700 rounded-md bg-gray-900 hover:bg-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaMoon />
        {themes.find(t => t.value === theme)?.name || "Select"}
      </button>

      {menuOpen && (
        <ul className="absolute top-full mt-2 bg-gray-900 border border-gray-700 text-gray-200 rounded-md shadow-lg w-full md:w-40 z-20">
          {themes.map((t) => (
            <li
              key={t.value}
              className="px-4 py-2 cursor-pointer hover:bg-gray-800 transition-colors rounded-md"
              onClick={() => {
                setTheme(t.value);
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
