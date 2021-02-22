import React from 'react';
import PropTypes from 'prop-types';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
import EditSurveyForm from './EditSurveyForm';
import NewSurveyForm from './NewSurveyForm';
import { connect } from 'react-redux';
import * as a from './../actions';

class SurveyControl extends React.Component {

  handleAddingNewSurveyToList = (newSurvey) => {
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

  handleEditingSurveyInList = (surveyToEdit) => {
    const { dispatch } = this.props;
    const action = a.addSurvey(surveyToEdit);
    dispatch(action);
    const action2 = a.deselectSurvey();
    dispatch(action2);
    if (this.props.editing) {
      const action3 = a.toggleEdit();
      dispatch(action3);
    }
  }

  handleDeletingSurvey = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.deselectKeg();
    dispatch(action2);
  }
  
  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
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
      currentlyVisibleState = <EditSurveyForm survey={ this.props.selectSurvey } onEditSurvey={ this.handleEditingSurveyInList } />
      buttonText = "Return to Survey List";
    } else if (this.props.selectedSurvey != null) {
      currentlyVisibleState = <SurveyDetail survey={ this.props.selectSurvey } />
      buttonText = "Return to Survey List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewSurveyForm onNewFormCreation={ this.handleAddingNewSurveyToList } />
      buttonText = "Return to Survey List";
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
  mainSurveyList: PropTypes.object,
  selectedSurvey: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool
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