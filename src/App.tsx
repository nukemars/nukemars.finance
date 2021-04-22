import React from 'react';
import logo from './logo.svg';
import telegramLogo from './telegram.svg';
import twitterLogo from './twitter.svg';
import githubLogo from './github.svg';
import pancakeswapLogo from './pancakeswap.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-social">
        <a
            className="App-link"
            href="https://t.me/nukemarsfinance"
            target="_blank"
            rel="noopener noreferrer">
          <img src={telegramLogo} className="Social-logo" alt="Telegram" />
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
            className="App-link"
            href="https://twitter.com/NukeMars_crypto"
            target="_blank"
            rel="noopener noreferrer">
          <img src={twitterLogo} className="Social-logo" alt="Twitter" />
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
            className="App-link"
            href="https://github.com/nukemars"
            target="_blank"
            rel="noopener noreferrer">
          <img src={githubLogo} className="Social-logo" alt="Github" />
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
            className="App-link"
            href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=BNB&outputCurrency=0x789ca7305cf04fb1ba26c28028cd4676e5f5f5d7"
            target="_blank"
            rel="noopener noreferrer">
          <img src={pancakeswapLogo} className="Social-logo" alt="PancakeSwap" />
        </a>
      </header>
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
