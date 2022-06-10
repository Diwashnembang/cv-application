import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        firstName: 'first Name',
        lastName: 'last Name',
      },
    };
    this.handelFirstName = this.handelFirstName.bind(this);
    this.handelLastName = this.handelLastName.bind(this);
  }

  // event handlet is asyn so use asunc so that update function doesnot run before the state update
  // otherwise it will create one character lag
  //   getFirstName() {
  //     return 'hel';
  //   }

  async handelFirstName(e) {
    const { updateFirstName } = this.props;
    const { firstName } = this.state;
    await this.setState((previousState) => ({
      info: {
        firstName: e.target.value,
        lastName: previousState.info.lastName,
      },
    }));

    updateFirstName(firstName);
  }

  async handelLastName(e) {
    const { updateLastName, info } = this.props;

    await this.setState((previousState) => ({
      info: {
        firstName: previousState.info.firstName,
        lastName: e.target.value,
      },
    }));
    updateLastName(info.lastName);
  }

  isWorking(bool) {
    const { info } = this.props;
    if (bool) {
      return (
        <div id="name">
          <label htmlFor="userFirstName">
            First Name
            <input type="text" value={info.firstName} onChange={this.handelFirstName} id="userFirstName" />
          </label>
          <label htmlFor="userLastName">
            Last Name
            <input type="text" value={info.lastName} onChange={this.handelLastName} id="userLastName" />
          </label>
        </div>

      );
    }

    return (
      <div id="userPersonalInfoPreview">
        <p id="previewFirstName">{info.firstName}</p>
        <p id="previewLastName">{info.lastName}</p>
      </div>
    );
  }

  render() {
    const { workingMode } = this.props;
    return (
      <div id="personalInfo">
        {this.isWorking(workingMode)}
      </div>

    );
  }
}
PersonalInfo.propTypes = {
  updateFirstName: PropTypes.func.isRequired,
  updateLastName: PropTypes.func.isRequired,
  workingMode: PropTypes.bool.isRequired,
  info: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,

};

export default PersonalInfo;
