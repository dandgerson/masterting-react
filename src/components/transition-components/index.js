import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import TransitionComponent from './components/TransitionComponent'
import TransitionWithChildren from './components/TransitionWithChildren'
import CSSTransitionComponent from './components/CSSTransitionComponent'
import SwitchTransitionComponent from './components/SwitchTransitionComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Training React Transition Group Components.
        </h1>
        <a
          className="App-link"
          href="https://reactcommunity.org/react-transition-group/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Transition Group
        </a>
      </header>
      <main className="App-content">
        <TransitionComponent />
        <TransitionWithChildren />
        <CSSTransitionComponent />
        <SwitchTransitionComponent />
        {[...Array(2)].map((_, i) => (
          <div key={i} className="App-item">
            <span>
              Deserunt enim nisi in fugiat sunt consectetur nostrud eu ad consectetur officia.
            </span>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
