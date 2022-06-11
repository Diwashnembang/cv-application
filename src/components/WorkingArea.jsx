import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CareerInfo from './getUserInfo/CareerInfo';
import EducationInfo from './getUserInfo/EducationInfo';
import PersonalInfo from './getUserInfo/PersonalInfo';
import SkillsInfo from './getUserInfo/SkillsInfo';

class WorkingArea extends PureComponent {
  render() {
    const { handelFirstName, handelLastName } = this.props;
    return (
      <div id="workingArea">
        <PersonalInfo
          getFirstName={handelFirstName}
          getLastName={handelLastName}
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
};

export default WorkingArea;
