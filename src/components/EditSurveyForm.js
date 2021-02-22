import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditSurveyForm(props) {
  const { survey } = props;

  function handleEditSurveyFormSubmission(event) {
    event.preventDefault();
    props.onEditSurvey({
      name: event.target.name.value,
      topic: event.target.topic.value,
      id: survey.id
    })
    return (
      <>
        <ReusableForm
          formSubmissionHandler={handleEditSurveyFormSubmission}
          buttonText="Update Survey" />
      </>
    );
  }
}

EditSurveyForm.propTypes = {
  survey: PropTypes.object,
  onEditSurvey: PropTypes.func
};

export default EditSurveyForm;

