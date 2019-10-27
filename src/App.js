import React from 'react';
import ReactDOM from 'react-dom'

// import logo from './logo.svg';
import './App.scss';

import HelloReact from './components/HelloReact/index'
import LikeCounter from './components/LikeCounter/index'
import Button from './components/Button'
import Icon from './components/Icon'

function App() {
  const reload = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )
  }
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
      <main className="App-main">
        <LikeCounter />
        <HelloReact />
      </main>
      <footer>
        <Button onClick={reload}>
          <Icon title='redo-alt'/>{' Reload'}
        </Button>
      </footer>
    </div>
  );
}

export default App;
