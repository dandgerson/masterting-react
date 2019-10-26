import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faEdit,
  faCheck,
  faPen,
  faEye,
  faEyeSlash,
  faRedoAlt,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faEdit,
  faCheck,
  faPen,
  faEye,
  faEyeSlash,
  faRedoAlt,
)

const Icon = ({ title }) => <FontAwesomeIcon icon={title} />

export default Icon
