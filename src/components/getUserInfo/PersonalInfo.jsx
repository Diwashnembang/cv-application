import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PersonalInfo extends PureComponent {
  render() {
    const { getFirstName } = this.props;
    return (
      <div>
        <label htmlFor="userFirstName">
          First Name
          <input type="text" name="firstName" id="userFirstName" onChange={getFirstName} />
        </label>
      </div>
    );
  }
}

PersonalInfo.propTypes = {
  getFirstName: PropTypes.func.isRequired,
};

export default PersonalInfo;
