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
    default:
      return state;
  }
};