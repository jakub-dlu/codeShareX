import { createContext, useContext, useRef, useState, type RefObject } from "react";
import * as htmlToImage from 'html-to-image';

type ConfigContextType = {
    selectedLanguage: string;
    setSelectedLanguage: (lang: string) => void;
    theme: string;
    setTheme: (theme: string) => void;
    bg: string;
    setBg: (theme: string) => void;
    fontSize: string;
    setFontSize: (theme: string) => void;
    refToDownload: RefObject<HTMLDivElement | null>;
    handleDownload: (containsBg: boolean) => void;
    refWithoutBg: RefObject<any | null>;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider = ({ children }: { children: any }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("c++");
    const [theme, setTheme] = useState<string>("atom-one-dark.css");
    const [bg, setBg] = useState<string>("from-blue-500 via-purple-500 to-rose-500");
    const [fontSize, setFontSize] = useState<string>("text-2xl");
    const refToDownload = useRef<HTMLDivElement | null>(null);
    const refWithoutBg = useRef<any | null>(null);

    const handleDownload = async (containsBg: boolean) => {
        let tempRef = null;
        if(containsBg)
            tempRef = refToDownload;
        else
            tempRef = refWithoutBg;

        if (!tempRef.current) return;
        try {
            const dataUrl = await htmlToImage.toPng(tempRef.current, {
            cacheBust: true,
            pixelRatio: 2
        });
    
        const link = document.createElement("a");
            link.download = "export.png";
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error("Błąd generowania obrazu", err);
        }
    }

    return (
        <ConfigContext.Provider value={{ selectedLanguage, setSelectedLanguage, theme, setTheme, bg, setBg, fontSize, setFontSize, refToDownload, handleDownload, refWithoutBg }}>
        {children}
        </ConfigContext.Provider>
    );
}

export const useConfig = () => {
    const context = useContext(ConfigContext);
    if (!context) {
        throw new Error("useLanguage musi być użyty wewnątrz LanguageProvider");
    }
    return context;
};