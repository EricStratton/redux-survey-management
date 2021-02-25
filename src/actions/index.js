
import * as c from './ActionTypes';

export const addSurvey = (Survey) => {
  const { name, topic, id } = Survey;
  return {
    type: c.ADD_Survey,
    name,
    topic,
    id
  }
};

export const deleteSurvey = id => ({
  type: c.DELETE_Survey,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});


export const selectSurvey = (selectedSurvey) => {
  const { name, topic, id } = selectedSurvey;
  return {
    type: c.SELECT_Survey,
    name,
    topic,
    id
  };
}

export const deselectSurvey = () => ({
  type: c.DESELECT_Survey
});

export const toggleEdit = () => ({
  type: c.TOGGLE_EDIT
});