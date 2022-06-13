import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CareerInfo extends PureComponent {
  render() {
    const { addCareer, handelUpdateInArray, getCareerHistory } = this.props;
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
            </div>
          ))}
        </ul>
        <button type="button" onClick={addCareer}>Add More</button>
      </div>

    );
  }
}

CareerInfo.proptype = {

  handelUpdateInArray: PropTypes.func.isRequired,
  getCareerHistory: PropTypes.array.isRequired,
  addCareer: PropTypes.func.isRequired,
  // handelLastName: PropTypes.func.isRequired,
  // handelAddress: PropTypes.func.isRequired,
  // handelContact: PropTypes.func.isRequired,
  // handelEmail: PropTypes.func.isRequired,
  // handelDescription: PropTypes.func.isRequired,
};

export default CareerInfo;
