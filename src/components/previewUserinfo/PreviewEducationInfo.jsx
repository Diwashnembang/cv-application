import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

class PreviewEducationInfo extends PureComponent {
  render() {
    const { educationHistory, capitalize } = this.props;
    return (
      <ul>
        {educationHistory.map((education) => (
          <section key={uniqid()}>
            <li key={uniqid()}>{capitalize(education.university.text)}</li>
            <li key={uniqid()}>{capitalize(education.city.text)}</li>
            <li key={uniqid()}>{capitalize(education.degree.text)}</li>
          </section>
        ))}
      </ul>

    );
  }
}

PreviewEducationInfo.propTypes = {
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
  capitalize: PropTypes.func.isRequired,

};

export default PreviewEducationInfo;
