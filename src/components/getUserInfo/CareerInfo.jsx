import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

class CareerInfo extends PureComponent {
  render() {
    const {
      addCareer, handelUpdateInArray, getCareerHistory, handelDeletInArray,
    } = this.props;
    return (
      <div>
        <ul>
          {getCareerHistory.map((career) => (
            <div key={career.id} data-key={career.id}>
              <li key={career.position.id}>
                <label htmlFor="postion">
                  <input
                    placeholder={career.position.text}
                    type="text"
                    name="position"
                    id="position"
                    onChange={(e) => {
                      handelUpdateInArray(e, career.id, 'careerHistory', 'position');
                    }}
                  />
                </label>
              </li>
              <li key={career.company.id}>
                <input
                  placeholder={career.company.text}
                  type="text"
                  name="position"
                  id="position"
                  onChange={(e) => {
                    handelUpdateInArray(e, career.id, 'careerHistory', 'company');
                  }}
                />

              </li>
              <li key={career.city.id}>
                <input
                  placeholder={career.city.text}
                  type="text"
                  name="position"
                  id="position"
                  onChange={(e) => {
                    handelUpdateInArray(e, career.id, 'careerHistory', 'city');
                  }}
                />

              </li>
              <li key={career.from.id}>
                <input
                  placeholder={career.from.text}
                  type="text"
                  name="position"
                  id="position"
                  onChange={(e) => {
                    handelUpdateInArray(e, career.id, 'careerHistory', 'from');
                  }}
                />

              </li>
              <li key={career.to.id}>
                <input
                  placeholder={career.to.text}
                  type="text"
                  name="position"
                  id="position"
                  onChange={(e) => {
                    handelUpdateInArray(e, career.id, 'careerHistory', 'to');
                  }}
                />

              </li>
              <button
                key={uniqid()}
                type="button"
                onClick={(e) => {
                  handelDeletInArray(e, career.id, 'careerHistory');
                }}
              >
                Delet

              </button>
            </div>
          ))}
        </ul>
        <button type="button" onClick={addCareer}>Add More</button>
      </div>

    );
  }
}

CareerInfo.propTypes = {

  handelUpdateInArray: PropTypes.func.isRequired,
  getCareerHistory: PropTypes.arrayOf(PropTypes.shape({
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
  addCareer: PropTypes.func.isRequired,
  handelDeletInArray: PropTypes.func.isRequired,

};

export default CareerInfo;
