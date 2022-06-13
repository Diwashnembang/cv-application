import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PreviewCareerInfo extends PureComponent {
  render() {
    const { careerHistory } = this.props;
    return (
      <div>
        {careerHistory.map((career) => (
          <section>
            <h1>

              <p>{career.position.text}</p>
              <p>{career.company.text}</p>
              <p>{career.city.text}</p>
              <p>{career.from.text}</p>
              <p>{career.to.text}</p>

            </h1>
          </section>
        ))}
      </div>

    );
  }
}

PreviewCareerInfo.proptype = {
  careerHistory: PropTypes.array.isRequired,
};
export default PreviewCareerInfo;
