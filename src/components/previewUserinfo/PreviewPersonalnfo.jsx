import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PreviewPersonalInfo extends PureComponent {
  render() {
    const { info } = this.props;

    return (
      <div>
        <p>{info.firstName}</p>
        <p>{info.lastName}</p>
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
};

export default PreviewPersonalInfo;
