// reducer takes in two things:

// 1: copy of current state
// 2: the action (info about what happened)
function posts(state = [], action) {
  const i = action.index;
  switch(action.type) {
    case 'INCREMENT_LIKES':
      return [
        ...state.slice(0,i), // before updated index
        {...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1), // after updated index
      ];
    default:
      return state;
  }
}

export default posts;