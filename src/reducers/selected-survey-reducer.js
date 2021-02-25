import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { name, topic, id } = action;
  switch(action.type) {
    case c.SELECT_SURVEY:
      return {
        name,
        topic,
        id
      }
    case c.DESELECT_SURVEY:
      return null;
    default:
      return state;
  }
}