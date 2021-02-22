import React from 'react';
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewSurveyForm(props) {
  function handleNewSurveyFormSubmission(event) {
    event.preventDefault();
    props.onNewSurveyCreation({
      name: event.target.name.value,
      topic: event.target.brand.value,
      id: v4()
    });
  }
  return (
    <>
      <ReusableForm formSubmissionHandler={ handleNewSurveyFormSubmission }
        buttonText="Add New Survey" />
    </>
  );
}

NewSurveyForm.propTypes = {
  onNewSurveyCreation: PropTypes.func
};

export default NewSurveyForm;