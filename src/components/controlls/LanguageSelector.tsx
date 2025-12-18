import { useState } from "react";
import { useConfig } from "../../context/ConfigContext";
import { FaGlobe } from "react-icons/fa";

export default function LanguageSelector() {
  const { selectedLanguage, setSelectedLanguage } = useConfig();
  const [menuOpen, setMenuOpen] = useState(false);

  const languages = ["javascript", "typescript", "python", "java", "c++", "go", "ruby", "html"];
    return(
        <div className="relative flex flex-col items-start w-full md:w-auto">
        <label className="text-gray-300 text-xs mb-1 ml-1">Language</label>
        <button
          className="flex w-full md:w-auto items-center gap-2 text-gray-200 hover:text-white transition-colors px-3 py-2 border border-gray-700 rounded-md bg-gray-900 hover:bg-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaGlobe />
          {selectedLanguage ? selectedLanguage : "Select"}
        </button>

        {menuOpen && (
          <ul className="overflow-y-auto absolute top-full mt-2 bg-gray-900 border border-gray-700 text-gray-200 rounded-md shadow-lg w-full md:w-40 z-20">
            {languages.map((lang) => (
              <li
                key={lang}
                className="px-4 py-2 cursor-pointer hover:bg-gray-800 transition-colors rounded-md"
                onClick={() => {
                  setSelectedLanguage(lang);
                  setMenuOpen(false);
                }}
              >
                {lang}
              </li>
            ))}
          </ul>
        )}
      </div>  
    );
}