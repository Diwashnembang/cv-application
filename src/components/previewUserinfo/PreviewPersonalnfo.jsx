import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PreviewPersonalInfo extends PureComponent {
  render() {
    const { info, capitalize } = this.props;
    return (
      <div>
        <h1>
          <p>
            {capitalize(info.firstName)}
            {capitalize(info.lastName)}
          </p>
          <p>{capitalize(info.address)}</p>
          <p>{capitalize(info.contact)}</p>
          <p>{capitalize(info.email)}</p>
          <p>{capitalize(info.description)}</p>
        </h1>

      </div>
    );
  }
}

PreviewPersonalInfo.propTypes = {
  info: PropTypes.shape(
    {
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      contact: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    },
  ).isRequired,
  capitalize: PropTypes.func.isRequired,
};

export default PreviewPersonalInfo;
