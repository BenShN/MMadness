import Map from './components/Map';
import BlinkingText from './components/BlinkingText';
import Instruction from './components/Instruction';
import { useState, useEffect } from "react";
import GameOver from './components/GameOver';

import './App.css';

function App() {
  const [position, setPosition] = useState([]); 

  const [blink, setBlink] = useState(null);
  const [counter, setCounter] = useState(3);

  return (
    <div className="App">
      <div style={{ position: 'relative', width: '100%' }}>
        <Instruction blink={blink} setBlink={setBlink} position={position} counter={counter}/>
        <BlinkingText blink={blink} setBlink={setBlink} position={position}/>
      </div>
        <Map position={position} setPosition={setPosition} setCounter={setCounter} counter={counter}/>
        {counter == 0 && <GameOver />}
    </div>
  );
}

export default App;
