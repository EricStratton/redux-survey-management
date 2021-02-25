import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, topic, id } = action;
  switch(action.type) {
    case c.ADD_SURVEY:
      return Object.assign({}, state, {
        [id]: {
          name,
          topic,
          id
        }
      });
    case c.DELETE_SURVEY:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};