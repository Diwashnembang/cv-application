import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PersonalInfo extends PureComponent {
  render() {
    const {
      getFirstName, getLastName, getAddress, getContact, getDescription, getEmail,
    } = this.props;
    return (
      <form id="userInfoForm">
        <section id="userName">
          <label htmlFor="userFirstName">
            First Name
            <input type="text" name="firstName" id="userFirstName" onChange={getFirstName} />
          </label>

          <label htmlFor="userLastName">
            Last Name
            <input type="text" name="lastName" id="userLastName" onChange={getLastName} />
          </label>
        </section>
        <section id="userAddress">

          <label htmlFor="userAddress">
            Address
            <input type="text" name="Address" id="userAddress" onChange={getAddress} />
          </label>
        </section>
        <section id="userEmail">
          <label htmlFor="userEmail">
            Email
            <input type="email" name="Email" id="userEmail" onChange={getEmail} />
          </label>
        </section>
        <section id="userContact">
          <label htmlFor="userContact">
            Contact
            <input type="number" name="Contact" id="userContact" onChange={getContact} />
          </label>

        </section>
        <section id="userDescription">
          <label htmlFor="userDescription">
            Description
            <textarea name="Description" id="userDescription" onChange={getDescription} />
          </label>

        </section>

      </form>
    );
  }
}

PersonalInfo.propTypes = {
  getFirstName: PropTypes.func.isRequired,
  getLastName: PropTypes.func.isRequired,
  getAddress: PropTypes.func.isRequired,
  getContact: PropTypes.func.isRequired,
  getEmail: PropTypes.func.isRequired,
  getDescription: PropTypes.func.isRequired,
};

export default PersonalInfo;
