import React from 'react';
import Survey from './Survey';
import PropTypes from 'prop-types';

function SurveyList(props) {
  return (
    <>
      {Object.values(props.surveyList).map((survey) => 
        <Survey
          whenSurveyClicked = { props.onSurveySelection }
          name={ survey.name }
          key={ survey.id }
          id={ survey.id } />
      )}
    </>
  );
}

SurveyList.propTypes = {
  kegList: PropTypes.object,
  onSurveySelection: PropTypes.func
};

export default SurveyList;