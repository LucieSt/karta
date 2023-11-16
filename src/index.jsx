import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import Player from './components/Player';
import Lyrics from './components/Lyrics';
import './style.css';
import audioSrc from '/fools-garden-lemon-tree.mp3'
import lyricsLines from './lyrics-lines';

const App = () => {

  const [activeLine, setActiveLine] = useState(4);

  return (
    <div className="container">
      <Player audioSrc={audioSrc} />
      <Lyrics lines={lyricsLines} currentLineIndex={activeLine}/>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
