import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CareerInfo extends PureComponent {
  render() {
    const { addCareer, getPosition, getCareerHistory } = this.props;
    console.log(addCareer);
    return (
      <div>
        <ul>
          {getCareerHistory.map((career) => (
            <div key={career.id}>
              <li>
                <label htmlFor="postion">
                  postion
                  <input value={career.position.text} type="text" name="position" id="position" key={career.position.id} />
                </label>
              </li>
              <li><input value={career.company.text} type="text" name="position" id="position" key={career.company.id} /></li>
              <li><input value={career.city.text} type="text" name="position" id="position" key={career.city.id} /></li>
              <li><input value={career.from.text} type="text" name="position" id="position" key={career.from.id} /></li>
              <li><input value={career.to.text} type="text" name="position" id="position" key={career.to.id} /></li>
            </div>
          ))}
        </ul>
        <button type="button" onClick={addCareer}>Add More</button>
      </div>

    );
  }
}

CareerInfo.proptype = {

  getPosition: PropTypes.func.isRequired,
  getCareerHistory: PropTypes.array.isRequired,
  addCareer: PropTypes.func.isRequired,
  // handelLastName: PropTypes.func.isRequired,
  // handelAddress: PropTypes.func.isRequired,
  // handelContact: PropTypes.func.isRequired,
  // handelEmail: PropTypes.func.isRequired,
  // handelDescription: PropTypes.func.isRequired,
};

export default CareerInfo;
