import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import HelloWorldClass from './components/HelloWorld/HelloWorldClass';
import HelloChange from './components/HelloChange/HelloChange';
import HelloChangeFunc from './components/HelloChange/HelloChangeFunc';

function App() {
  return (
    <div className="App">
      <HelloWorld msg={'hello from parent'} />

      <HelloWorldClass />

      <HelloChange />

      <HelloChangeFunc />
    </div>
  );
}

export default App;
