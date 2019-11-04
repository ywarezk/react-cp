import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import HelloWorldClass from './components/HelloWorld/HelloWorldClass';
import HelloChange from './components/HelloChange/HelloChange';
import HelloChangeFunc from './components/HelloChange/HelloChangeFunc';
import Countdown from './components/Countdown/Countdown';
import CountdownFunc from './components/Countdown/CountdownFunc';

function App() {
  const [isCountdownShowing, setIsCountdownShowing] = useState(true)

  return (
    <div className="App">
      <HelloWorld msg={'hello from parent'} />

      <HelloWorldClass />

      <HelloChange />

      <HelloChangeFunc />

      {
        isCountdownShowing && <CountdownFunc 
                                initialCounter={3} 
                                destroyCb={setIsCountdownShowing} />
      }
      

      {/* <CountdownFunc initialCounter={3} destroyCb={setIsCountdownShowing} /> */}
    </div>
  );
}

export default App;
