import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PreviewPersonalInfo from './previewUserinfo/PreviewPersonalnfo';
import PreviewCareerInfo from './previewUserinfo/PreviewCareerInfo';

class PreviewArea extends PureComponent {
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
    const { info, careerHistory } = this.props;
 
    return (
      <div id="previewArea">
        <PreviewPersonalInfo info={info} capitalize={this.capitalize} />
        <PreviewCareerInfo careerHistory={careerHistory} />
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
  careerHistory: PropTypes.array.isRequired,
};

export default PreviewArea;
