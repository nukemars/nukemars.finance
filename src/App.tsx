import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's Nuke Mars all together!
        </p>
        <a
          className="App-link"
          href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=BNB&outputCurrency=0x789ca7305cf04fb1ba26c28028cd4676e5f5f5d7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy $NukeMars token
        </a>
      </header>
    </div>
  );
}

export default App;
