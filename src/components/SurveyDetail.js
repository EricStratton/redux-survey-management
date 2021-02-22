import React from 'react';
import PropTypes from 'prop-types';

function SurveyDetail(props) {
  const myStyledSurveyDetail = {
    paddingLeft: '10px'
  };

  const { survey, onClickingDelete, onClickingEdit } = props;

  return ( 
    <>
      <div style={myStyledKegDetail}>
        <h3>Survey Details</h3>
      </div>
      <hr />
      <div style={myStyledSurveyDetail}>
        <h3>{survey.name}</h3>
      </div>
      <button onClick={props.onClickEdit}>Update</button>
      <button onClick={ () => onClickingDelete(survey.id)}>Remove Survey</button>
    </>
  )
}

SurveyDetail.propTypes = {
  survey: propTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default SurveyDetail;