import React from 'react';
import './App.css';
import LoginFunction from './components/Login/LoginFunction';
import LoginClass from './components/Login/LoginClass';
import LoginControlledClass from './components/LoginControlled/LoginControlledClass';
import LoginControlledFunction from './components/LoginControlled/LoginControlledFunction';
import LoginRenderNoop from './components/LoginControlled/LoginControlledWithNoop';
import LoginFormik from './components/LoginFormik/LoginFormik';

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

            <LoginRenderNoop />

            <LoginFormik />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
