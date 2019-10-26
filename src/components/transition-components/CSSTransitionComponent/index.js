import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'

import './CSSTransitionComponent.scss'

function CSSTransitionComponent() {
  const [inProp, setInProp] = useState(false)

  const handleMouseEnter = () => setInProp(true)
  const handleMouseLeave = () => setInProp(false)

  return (
    <CSSTransition
      in={inProp}
      timeout={1600}
      classNames='transition'
    >
      <div
        className="App-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>
          I'm a <b>CSSTransition</b> component.
        </span>
      </div>
    </CSSTransition>
  );
}

export default CSSTransitionComponent;
