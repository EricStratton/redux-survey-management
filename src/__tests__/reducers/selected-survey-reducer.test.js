import selectedSurveyReducer from './../../reducers/selected-survey-reducer';

describe("selectedSurveyReducer", () => {

  let action;

  test('Should return default state if no action is passed into reducer', () => {
    expect(selectedSurveyReducer(null, { type: null })).toEqual(null);
  });
  
});