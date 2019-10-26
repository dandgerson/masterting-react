import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import HelloReact from './components/HelloReact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Training React with Mastering ReactJS.
        </h1>
        <a
          className="App-link"
          href="https://reactcommunity.org/react-transition-group/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mastering ReactJS
        </a>
      </header>
      <main className="App-content">
        <HelloReact />
      </main>
    </div>
  );
}

export default App;
