import React from 'react';
import PropTypes from 'prop-types';

function ReuseableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
      </form>
    </>
  )
}