import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CareerInfo from './getUserInfo/CareerInfo';
import EducationInfo from './getUserInfo/EducationInfo';
import PersonalInfo from './getUserInfo/PersonalInfo';

class WorkingArea extends PureComponent {
  render() {
    const { personalInfoUtility, careerInfoUtility, educationInfoUtility } = this.props;
    return (
      <div id="workingArea">
        <PersonalInfo
          getFirstName={personalInfoUtility.handelFirstName}
          getLastName={personalInfoUtility.handelLastName}
          getEmail={personalInfoUtility.handelEmail}
          getAddress={personalInfoUtility.handelAddress}
          getContact={personalInfoUtility.handelContact}
          getDescription={personalInfoUtility.handelDescription}
        />

        <CareerInfo
          handelUpdateInArray={careerInfoUtility.handelUpdateInArray}
          getCareerHistory={careerInfoUtility.careerHistory}
          addCareer={careerInfoUtility.addCareer}
          handelDeletInArray={careerInfoUtility.handelDeletInArray}
        />
        <EducationInfo
          handelDeletInArray={educationInfoUtility.handelDeletInArray}
          handelUpdateInArray={educationInfoUtility.handelUpdateInArray}
          addEducation={educationInfoUtility.addEducation}
          getEducationHistory={educationInfoUtility.educationHistory}

        />
      </div>

    );
  }
}

WorkingArea.propTypes = {
  personalInfoUtility: PropTypes.shape(
    {
      handelFirstName: PropTypes.func.isRequired,
      handelLastName: PropTypes.func.isRequired,
      handelAddress: PropTypes.func.isRequired,
      handelContact: PropTypes.func.isRequired,
      handelEmail: PropTypes.func.isRequired,
      handelDescription: PropTypes.func.isRequired,
    },
  ).isRequired,
  careerInfoUtility: PropTypes.shape(
    {
      handelUpdateInArray: PropTypes.func.isRequired,
      careerHistory: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        position: PropTypes.shape(
          {
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
          },
        ),
        company: PropTypes.shape(
          {
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
          },
        ),
        city: PropTypes.shape(
          {
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
          },
        ),
        from: PropTypes.shape(
          {
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
          },
        ),
        to: PropTypes.shape(
          {
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
          },
        ),
      })).isRequired,
      addCareer: PropTypes.func.isRequired,
      handelDeletInArray: PropTypes.func.isRequired,
    },
  ).isRequired,

  educationInfoUtility: PropTypes.shape({
    educationHistory: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      university: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
      degree: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
      city: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    })).isRequired,
    handelDeletInArray: PropTypes.func.isRequired,
    handelUpdateInArray: PropTypes.func.isRequired,
    addEducation: PropTypes.func.isRequired,
  }).isRequired,

};

export default WorkingArea;
