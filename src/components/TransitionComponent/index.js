import React, { useState } from 'react';
import { Transition } from 'react-transition-group'
// import logo from './logo.svg';
function TransitionComponent() {
  const [inProp, setInProp] = useState(null)

  const duration = 300
  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 1,
    color: 'white',
  }

  const transitionStyles = {
    entering: { color: '#09d3ac' },
    entered: { color: '#09d3ac' },
    exiting: { color: 'white' },
    exited: { color: 'white' },
  }

  const handleMouseEnter = () => setInProp(true)
  const handleMouseLeave = () => setInProp(false)

  return (
    <Transition
      in={inProp}
      timeout={duration}>
      {state => (
        <div
          className="App-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
          <span>
            I'm a <b>Transition</b> component.
          </span>
        </div>
      )}
    </Transition>
  );
}

export default TransitionComponent;
