import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

class PreviewCareerInfo extends PureComponent {
  render() {
    const { careerHistory, capitalize } = this.props;
    return (
      <ul>
        {careerHistory.map((career) => (
          <section key={uniqid()}>
            <li key={uniqid()}>{capitalize(career.position.text)}</li>
            <li key={uniqid()}>{capitalize(career.company.text)}</li>
            <li key={uniqid()}>{capitalize(career.city.text)}</li>
            <li key={uniqid()}>{capitalize(career.from.text)}</li>
            <li key={uniqid()}>{capitalize(career.to.text)}</li>
          </section>
        ))}
      </ul>

    );
  }
}

PreviewCareerInfo.propTypes = {
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
  capitalize: PropTypes.func.isRequired,
};
export default PreviewCareerInfo;
