import surveyListReducer from './../../reducers/survey-list-reducer';

describe('surveyListReducer', () => {

  test('Should return default state if no action is passed', () => {
    expect(surveyListReducer({}, { type: null })).toEqual({});
  });
});