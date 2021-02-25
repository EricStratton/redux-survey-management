import * as c from './ActionTypes';

export const addSurvey = (Survey) => {
  const { name, topic, id } = Survey;
  return {
    type: c.ADD_SURVEY,
    name,
    topic,
    id
  }
};

export const deleteSurvey = id => ({
  type: c.DELETE_SURVEY,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});


export const selectSurvey = (selectedSurvey) => {
  const { name, topic, id } = selectedSurvey;
  return {
    type: c.SELECT_SURVEY,
    name,
    topic,
    id
  };
}

export const deselectSurvey = () => ({
  type: c.DESELECT_SURVEY
});

export const toggleEdit = () => ({
  type: c.TOGGLE_EDIT
});