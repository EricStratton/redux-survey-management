import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, topic, id } = action;
  switch(action.type) {
    case "ADD_SURVEY":
      return Object.assign({}, state, {
        [id]: {
          name,
          topic,
          id
        }
      });
    case "DELETE_SURVEY":
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};