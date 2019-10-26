import React, { useState } from 'react';
import { Transition, SwitchTransition as Transition } from 'react-transition-group'

import './SwitchTransitionComponent.scss'

import TransitionComponent from '../TransitionComponent'

function SwitchTransitionComponent() {
  const [state, setState] = useState(false)
  return (
    <SwitchTransition>
      <Transition
        in={state}
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias rerum sunt qui cupiditate cum officiis quas laboriosam quod distinctio?</p>
          <p></p>
          <div></div>
        </div>
      </Transition>
    </SwitchTransition>
  );
}

export default SwitchTransitionComponent;
