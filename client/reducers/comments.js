function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment,
      }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1),
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ... state,
      // overwrite this comment with a new oen
      [action.postId]: postComments(state[action.postId], action),
    }
  }
  return state;
}

export default comments;