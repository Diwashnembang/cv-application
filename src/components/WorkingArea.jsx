import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CareerInfo from './getUserInfo/CareerInfo';
import EducationInfo from './getUserInfo/EducationInfo';
import PersonalInfo from './getUserInfo/PersonalInfo';
import SkillsInfo from './getUserInfo/SkillsInfo';

class WorkingArea extends PureComponent {
  render() {
    const { personalInfoUtility, careerInfoUtility } = this.props;
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
          getPosition={careerInfoUtility.handelPositon}
          getCareerHistory={careerInfoUtility.careerHistory}
          addCareer={careerInfoUtility.addCareer}
        />
        <EducationInfo />
        <SkillsInfo />
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
      handelPositon: PropTypes.func.isRequired,
      careerHistory: PropTypes.array.isRequired,
      addCareer: PropTypes.func.isRequired,
      // handelLastName: PropTypes.func.isRequired,
      // handelAddress: PropTypes.func.isRequired,
      // handelContact: PropTypes.func.isRequired,
      // handelEmail: PropTypes.func.isRequired,
      // handelDescription: PropTypes.func.isRequired,
    },
  ).isRequired,

};

export default WorkingArea;
