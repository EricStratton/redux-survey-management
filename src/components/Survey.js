import React from 'react';
import PropTypes from 'prop-types';

function Survey(props) {
  const myStyledSurvey = {
    paddingLeft: '10px'
  }

  return ( 
    <>
      <div style={myStyledSurvey}>
        <div onClick={() => props.whenSurveyClicked(props.id)}>
          <h3>{props.name}</h3>
          <h4>{props.topic}</h4>
        </div>
      </div>
      <hr />
    </>
  )
}

Survey.propTypes = {
  name: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenSurveyClicked: PropTypes.func
}

export default Survey;