import React, { useState } from 'react';
import { Transition } from 'react-transition-group'

import './TransitionWithChildren.scss'

const ChildComponent = (props) => (
  <div
    className={`App-item transition transition-${props.transitionState}`}
    onMouseEnter={props.handleMouseEnter}
    onMouseLeave={props.handleMouseLeave}>
    <span>I'm a <b>Transition</b> with child component</span>
  </div>
)

function TransitionWithChildren() {
  const [inProp, setInProp] = useState(null)

  const handleMouseEnter = () => setInProp(true)
  const handleMouseLeave = () => setInProp(false)

  return (
    <Transition
      in={inProp}
      timeout={300}>
      {state => (
        <ChildComponent
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          transitionState={state}
          />
      )}
    </Transition>
  );
}

export default TransitionWithChildren;
