import Map from './components/Map';
import BlinkingText from './components/BlinkingText';
import Instruction from './components/Instruction';
import { useState } from "react";


import './App.css';

function App() {

  const [position, setPosition] = useState([]); 

  const [blink, setBlink] = useState(null);

  return (
    <div className="App">
      <div style={{ position: 'relative' }}>
        <Instruction blink={blink} setBlink={setBlink} position={position}/>
        <BlinkingText blink={blink} setBlink={setBlink} position={position}/>
      </div>
        <Map position={position} setPosition={setPosition}/>
    </div>
  );
}

export default App;
