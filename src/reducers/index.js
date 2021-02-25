import formVisibleReducer from './form-visible-reducer';
import surveyListReducer from './survey-list-reducer';
import selectedSurveyReducer from './selected-survey-reducer';
import editFormReducer from './edit-form-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainSurveyList: surveyListReducer,
  selectedSurvey: selectedSurveyReducer,
  editing: editFormReducer
});

export default rootReducer;