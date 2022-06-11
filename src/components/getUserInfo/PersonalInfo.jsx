import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PersonalInfo extends PureComponent {
  render() {
    const { getFirstName, getLastName } = this.props;
    console.log('this is from presonalinfo', getLastName);
    return (
      <div>
        <label htmlFor="userFirstName">
          First Name
          <input type="text" name="firstName" id="userFirstName" onChange={getFirstName} />
        </label>
        <label htmlFor="userLastName">
          Last Name
          <input type="text" name="lastName" id="userLastName" onChange={getLastName} />
        </label>
      </div>
    );
  }
}

PersonalInfo.propTypes = {
  getFirstName: PropTypes.func.isRequired,
  getLastName: PropTypes.func.isRequired,
};

export default PersonalInfo;
