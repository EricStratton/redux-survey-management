import React from 'react';
import PropTypes from 'prop-types';

class SurveyControl extends React.Component {

  handleAddingNewSurvey = (newSurvey) => {
    const { dispatch } = this.props;
    const action = a.addSurvey(newSurvey);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedSurvey = (id) => {
    const selectedSurvey = this.props.mainSurveyList[id];
    const { dispatch } = this.props;
    const action = a.selectSurvey(selectedSurvey);
    dispatch(action);
  }
  
  handleClick = () => {
    if (this.props.selectedSurvey != null) {
      const { dispatch } = this.props;
      const action = a.deselectSurvey();
      dispatch(action);
      if (this.props.editing) {
        const action2 = a.toggleEdit();
        dispatch(action2);
      }
    } else {
      const { dispatch } = this.props;
      const action3 = a.toggleForm();
      dispatch(action3);
    };
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing) {

    } else if (this.props.selectedSurvey != null) {

    } else if (this.props.formVisibleOnPage) {

    } else {
      currentlyVisibleState = <SurveyList surveyList={ this.props.mainSurveyList } onSurveySelection={ this.handleChangingSelectedSurvey } />
      buttonText = "New Survey";
    }
    return (
      <>
        { currentlyVisibleState }
        <button onClick={ this.handleClick }>{ buttonText }</button>
      </>
    )
  }
}

SurveyControl.propTypes = {
  mainSurveyList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    mainSurveyList: state.mainSurveyList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedSurvey: state.selectSurvey,
    editing: state.editing
  }
}

SurveyControl = connect(mapStateToProps)(SurveyControl);

export default SurveyControl;