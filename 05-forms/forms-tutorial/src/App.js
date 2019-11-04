import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginFunction from './components/Login/LoginFunction';
import LoginClass from './components/Login/LoginClass';
import LoginControlledClass from './components/LoginControlled/LoginControlledClass';
import LoginControlledFunction from './components/LoginControlled/LoginControlledFunction';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-6">
            <LoginFunction />

            <LoginClass  />

            <LoginControlledFunction />
            <LoginControlledClass />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
