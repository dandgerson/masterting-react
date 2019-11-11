import React from 'react';
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'

import store from './redux/store'
import { resetAction } from './redux/actions'

import './App.scss';

import HelloReact from './components/HelloReact/index'
import LikeCounter from './components/LikeCounter/index'
import UserList from './components/UserList/index'
import Button from './components/Button'
import Icon from './components/Icon'

const App = ({
  resetAction,
  ...props
}) => {
  const reload = () => {
    resetAction && resetAction(undefined)
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
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
        <div className="row">
          <div className="col">
            <LikeCounter />
          </div>
          <div className="col">
            <HelloReact />
          </div>
        </div>
        <div className="row">
          <UserList />
        </div>

      </main>
      <footer>
        <Button onClick={reload}>
          <Icon title='redo-alt'/>{' Reload'}
        </Button>
      </footer>
    </div>
  );
}

const mapDispatchToProps = {
  resetAction,
}

export default connect(null, mapDispatchToProps)(App);
