import { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import cpp from 'highlight.js/lib/languages/cpp';
import go from 'highlight.js/lib/languages/go';
import ruby from 'highlight.js/lib/languages/ruby';
import xml from 'highlight.js/lib/languages/xml';
import { useConfig } from '../context/ConfigContext';
import "../App.css";
import { languageTemplates } from './LanguageTemplates';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);
hljs.registerLanguage('c++', cpp);
hljs.registerLanguage('go', go);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('html', xml);

export default function CodeEditor() {
  const { selectedLanguage, theme, fontSize, bg, refToDownload, refWithoutBg } = useConfig();
  const [code, setCode] = useState<string>(languageTemplates["c++"]);

  useEffect(() => {
    const existingLink = document.getElementById('hljs-theme') as HTMLLinkElement;
    if (existingLink) {
        existingLink.remove(); 
    }
    const link = document.createElement('link');
    link.id = 'hljs-theme';
    link.rel = 'stylesheet';
    const newSrc = "/hlStyles/" + theme;
    link.href = newSrc;
    document.head.appendChild(link);
    return () => {
        const currentLink = document.getElementById('hljs-theme');
        if (currentLink === link) {
             link.remove();
        }
    };
  }, [theme]);

  useEffect(() => {
    setCode(languageTemplates[selectedLanguage])
  }, [selectedLanguage])

  return (
    <>
    <div className={`z-2 mt-[10vh] p-[8vh] bg-gradient-to-tl ${bg}`} ref={refToDownload}>
    <div className="w-auto md:w-160 h-auto rounded-xl p-4 bg-black/60 backdrop-blur-md border border-gray-700" ref={refWithoutBg}>
      <div className="flex items-center justify-between mb-3 ml-2">
        <div className="flex gap-3">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>

      <Editor
        value={code}
        onValueChange={setCode}
        highlight={(code) =>
          hljs.highlight(code, { language: selectedLanguage }).value
        }
        padding={12}
        className={`jetbrainsmono ${fontSize}`}
        style={{
          color: '#fff',
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      />
    </div>
    </div>
    </>
  );
}
