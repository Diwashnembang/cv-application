import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PreviewPersonalInfo from './previewUserinfo/PreviewPersonalnfo';

class PreviewArea extends PureComponent {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  // eslint-disable-next-line class-methods-use-this
  capitalize(sentence) {
    if (typeof sentence !== 'string') return ('error');
    let capitalizeSentence = '';
    const temp = sentence.split(' ');
    for (let i = 0; i < temp.length; i += 1) {
      temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
    }
    let incompleteSentence = '';
    for (let i = 0; i < temp.length; i += 1) {
      capitalizeSentence = `${incompleteSentence} ${temp[i]}`;
      incompleteSentence = capitalizeSentence;
    }
    return capitalizeSentence;
  }

  render() {
    const { info } = this.props;
    return (
      <div id="previewArea">
        <PreviewPersonalInfo info={info} capitalize={this.capitalize} />
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
