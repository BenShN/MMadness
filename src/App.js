import Map from './components/Map';
import BlinkingText from './components/BlinkingText';
import Instruction from './components/Instruction';

import './App.css';

function App() {

  return (
    <div className="App">
      <div style={{ position: 'relative' }}>
        <Instruction/>
        <BlinkingText/>
      </div>
        <Map />
    </div>
  );
}

export default App;
