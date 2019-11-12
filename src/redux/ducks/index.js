export const actionTypes = {
  setEditing: {
    SET_EDITING: 'SET_EDITING',
  },
  setFirstName: {
    SET_FIRSTNAME: 'SET_FIRSTNAME',
  },
  setLastName: {
    SET_LASTNAME: 'SET_LASTNAME',
  },
  setShowMessage: {
    SET_SHOW_MESSAGE: 'SET_SHOW_MESSAGE',
  },
  setLikes: {
    SET_LIKES: 'SET_LIKES',
  },
  setShowedLikes: {
    SET_SHOWED_LIKES: 'SET_SHOWED_LIKES',
  },
  setRateUp: {
    SET_RATE_UP: 'SET_RATE_UP',
  },
  setUsers: {
    SET_USERS: 'SET_USERS',
  },
  reset: {
    RESET: 'RESET',
  },
}

export const actions = {
  
}

export const setEditingAction = editing => ({
  type: SET_EDITING,
  payload: editing,
})

export const setFirstNameAction = firstName => ({
  type: SET_FIRSTNAME,
  payload: firstName
})
export const setLastNameAction = lastName => ({
  type: SET_LASTNAME,
  payload: lastName
})
export const setShowMessageAction = showMessage => ({
  type: SET_SHOW_MESSAGE,
  payload: showMessage
})

export const setLikesAction = likes => ({
  type: SET_LIKES,
  payload: likes
})
export const setShowedLikesAction = showedLikes => ({
  type: SET_SHOWED_LIKES,
  payload: showedLikes
})
export const setRateUpAction = reteUp => ({
  type: SET_RATE_UP,
  payload: reteUp
})

export const setUsersAction = users => ({
  type: SET_USERS,
  payload: users
})

export const resetAction = () => ({
  type: RESET,
})
