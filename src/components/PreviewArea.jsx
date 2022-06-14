import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PreviewPersonalInfo from './previewUserinfo/PreviewPersonalnfo';
import PreviewCareerInfo from './previewUserinfo/PreviewCareerInfo';
import PreviewEducationInfo from './previewUserinfo/PreviewEducationInfo';

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
    const { info, careerHistory, educationHistory } = this.props;

    return (
      <div id="previewArea">
        <PreviewPersonalInfo info={info} capitalize={this.capitalize} />
        <PreviewCareerInfo careerHistory={careerHistory} capitalize={this.capitalize} />
        <PreviewEducationInfo educationHistory={educationHistory} capitalize={this.capitalize} />
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
  careerHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    position: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      },
    ),
    company: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      },
    ),
    city: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      },
    ),
    from: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      },
    ),
    to: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      },
    ),
  })).isRequired,
  educationHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    university: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
    degree: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
    city: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

export default PreviewArea;
