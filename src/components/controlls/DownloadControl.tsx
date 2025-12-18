import { useState } from "react";
import { useConfig } from "../../context/ConfigContext";
import { MdDownload } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";

export default function DownloadButton() {
    const { handleDownload } = useConfig();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return(
    <div className="relative flex flex-col items-start w-full md:w-auto">
      <label className="text-gray-300 text-xs mb-1 ml-1">Export</label>
      <button
        className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors px-3 py-2 border border-gray-700 rounded-md bg-gray-900 hover:bg-gray-800 w-full md:w-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaShareAlt />
        Download
      </button>
      {menuOpen && (
        <ul className="overflow-y-auto absolute top-full mt-2 bg-gray-900 border border-gray-700 text-gray-200 rounded-md shadow-lg w-full md:w-50 z-20">
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-800 transition-colors rounded-md flex flex-row items-center gap-3" onClick={() => handleDownload(true)}><MdDownload size={20}/> With background</li>
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-800 transition-colors rounded-md flex flex-row items-center gap-3" onClick={() => handleDownload(false)}><MdDownload size={20}/> Only snippet</li>
        </ul>
      )}
    </div>
    );
}