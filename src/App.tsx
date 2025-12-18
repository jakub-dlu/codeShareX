import './App.css'
import CodeEditor from './components/Editor'
import "@fontsource/jetbrains-mono/300.css";
import { useConfig } from './context/ConfigContext';
import Controllers from './components/Controllers';

function App() {
  const { bg } = useConfig();
  return (
      <div className={`relative bg-gradient-to-tl ${bg} h-screen flex justify-center items-center`}>
        <CodeEditor />
        <Controllers />
        <div className="absolute inset-0 bg-black/50 z-1"></div>
      </div>
  )
}

export default App
