import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PreviewPersonalInfo extends PureComponent {
  render() {
    const { info, capitalize } = this.props;
    return (
      <div>
        <p>{capitalize(info.firstName)}</p>
        <p>{capitalize(info.lastName)}</p>
      </div>
    );
  }
}

PreviewPersonalInfo.propTypes = {
  info: PropTypes.shape(
    {
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    },
  ).isRequired,
  capitalize: PropTypes.func.isRequired,
};

export default PreviewPersonalInfo;
