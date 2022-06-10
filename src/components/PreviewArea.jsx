import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PreviewPersonalInfo from './previewUserinfo/PreviewPersonalnfo';

class PreviewArea extends PureComponent {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
   
    return (
      <div id="previewArea">
        <PreviewPersonalInfo info={info} />
        <p>this is preview area</p>
      </div>

    );
  }
}

PreviewArea.propTypes = {
  info: PropTypes.shape(
    {
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default PreviewArea;
