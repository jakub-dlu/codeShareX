import { useState } from "react";
import BackgroundSelector from "./controlls/BackgroundSelector";
import DownloadButton from "./controlls/DownloadControl";
import LanguageSelector from "./controlls/LanguageSelector";
import SizeSelector from "./controlls/SizeSelector";
import ThemeSelector from "./controlls/ThemeSelector";
import { FaX } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Controllers() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-5 left-1/2 transform -translate-x-1/2 z-10">
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? (<FaX/>) : <GiHamburgerMenu size={30}/>}
        </button>
      </div>

      {isOpen && (
        <div className="bg-black/60 w-90 backdrop-blur-md border border-gray-700 rounded-lg p-6 flex flex-col items-center gap-4 shadow-md mt-2">
          <LanguageSelector />
          <ThemeSelector />
          <BackgroundSelector />
          <SizeSelector />
          <DownloadButton />
        </div>
      )}

      {/* Oryginalne menu dla md i większych ekranów */}
      <div className="hidden md:flex bg-black/60 backdrop-blur-md border border-gray-700 rounded-lg w-90 md:w-200 p-6 flex-row items-center gap-4 shadow-md">
        <LanguageSelector />
        <ThemeSelector />
        <BackgroundSelector />
        <SizeSelector />
        <DownloadButton />
      </div>
    </nav>
  );
}
