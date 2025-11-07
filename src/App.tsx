import { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



type TimedMessageProps = {
  message: string;
  duration?: number;
  onHide?: () => void;
  className?: string;
};



export function TimedMessageTS({
  message,
  duration = 3000,
  onHide,
  className,
}: TimedMessageProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const t = setTimeout(() => {
      setVisible(false);
      onHide?.();
    }, duration);
    return () => clearTimeout(t);
  }, [message, duration, onHide]);

  if (!visible) return null;

  return (
    <div role="status" aria-live="polite" className={className}>
      {message}
    </div>
  );
}

const roolit: string[] = [
  'hiljainen',
  'ujo',
  'kiusaaja',
  'kritisoija',
  'sovittelija',
  'aloitteentekijä',
  'kyseenalaistaja',
  'kilpailija',
  'huomion tavoittelija',
  'pelle',
  'kyselijä',
  'rohkaisija',
]

// list of strings for group tasks, lutheran confirmation camp context
const tehtavat: string[] = [
  'suunnitella leikki',
  'tehdä ryhmässä taideteos',
  'valmistaa pieni näytelmä',
  'järjestää kilpailu',
  'suunnitella yhteinen rukoushetki',
  'tehdä ryhmässä musiikkiesitys',
  'valmistaa yhdessä ruokaa',
  'suunnitella retki luontoon',
  'valita konfirmaatiolaulu',
  'päättää ryhmälle nimi, johon kaikki voivat samaistua',
]

// select randomly a string from string[] and return it
const  getRandomRooli = (texts: string []): string => {
  const index = Math.floor(Math.random() * texts.length);
  return texts[index];
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/*     <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        */}
      <h1>Ryhmäsimulaattori</h1>

      <h2>Ryhmän tehtävä:</h2>
      <TimedMessageTS
        message={`${getRandomRooli(tehtavat)}`}
        duration={10000}
        className="timed-message"
        />

      <h2>Roolisi ryhmässä:</h2>
      <TimedMessageTS
        message={`${getRandomRooli(roolit)}`}
        duration={1000}
        className="timed-message"
      />
    </>
  )
}

export default App
