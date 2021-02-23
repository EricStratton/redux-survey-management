import surveyListReducer from './../../reducers/survey-list-reducer';

describe('surveyListReducer', () => {

  let action;
  const surveyData = {
    name: 'RUOK?',
    topic: 'Health Care',
    id: 1
  }

  test('Should return default state if no action is passed', () => {
    expect(surveyListReducer({}, { type: null })).toEqual({});
  });

  test('Should add new survey to mainSurveyList', () => {
    const { name, topic, id } = surveyData;
    action = {
      type: 'ADD_SURVEY',
      name,
      topic,
      id
    };
    expect(surveyListReducer({}, action)).toEqual({
      [id] : {
        name,
        topic,
        id
      }
    });
  });

});