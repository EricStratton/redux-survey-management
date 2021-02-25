import React from 'react';
import PropTypes from 'prop-types';

function SurveyDetail(props) {
  const myStyledSurveyDetail = {
    paddingLeft: '10px'
  };

  const { survey, onClickingDelete } = props;

  return ( 
    <>
      <div style={myStyledSurveyDetail}>
        <h3>Survey Details</h3>
      </div>
      <hr />
      <div style={myStyledSurveyDetail}>
        <h3>{survey.name}</h3>
        <h4>{survey.topic}</h4>
      </div>
      <button onClick={ props.onClickingEdit }>Update</button>
      <button onClick={ () => onClickingDelete(survey.id)}>Remove Survey</button>
    </>
  )
}

SurveyDetail.propTypes = {
  survey: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default SurveyDetail;