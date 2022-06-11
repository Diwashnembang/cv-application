import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CareerInfo from './getUserInfo/CareerInfo';
import EducationInfo from './getUserInfo/EducationInfo';
import PersonalInfo from './getUserInfo/PersonalInfo';
import SkillsInfo from './getUserInfo/SkillsInfo';

class WorkingArea extends PureComponent {
  render() {
    const {
      handelFirstName, handelLastName, handelAddress, handelContact, handelDescription, handelEmail,
    } = this.props;
    return (
      <div id="workingArea">
        <PersonalInfo
          getFirstName={handelFirstName}
          getLastName={handelLastName}
          getEmail={handelEmail}
          getAddress={handelAddress}
          getContact={handelContact}
          getDescription={handelDescription}
        />

        <EducationInfo />
        <CareerInfo />
        <SkillsInfo />
      </div>

    );
  }
}

WorkingArea.propTypes = {
  handelFirstName: PropTypes.func.isRequired,
  handelLastName: PropTypes.func.isRequired,
  handelAddress: PropTypes.func.isRequired,
  handelContact: PropTypes.func.isRequired,
  handelEmail: PropTypes.func.isRequired,
  handelDescription: PropTypes.func.isRequired,
};

export default WorkingArea;
