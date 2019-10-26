import React from 'react';
import ReactDOM from 'react-dom'

// import logo from './logo.svg';
import './App.scss';

import HelloReact from './components/HelloReact'
import LikeCounter from './components/LikeCounter'
import Button from './components/Button'
import Icon from './components/Icon'

function App(props) {
  const reload = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    ReactDOM.render(
      <App reload={reload}/>,
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
