import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

class EducationInfo extends PureComponent {
  render() {
    const {
      getEducationHistory, addEducation, handelDeletInArray, handelUpdateInArray,
    } = this.props;
    return (
      <div>
        <ul>
          {getEducationHistory.map((education) => (
            <div key={education.id} data-key={education.id}>
              <li key={education.university.id}>
                <label htmlFor="University-Name">
                  <input
                    placeholder={education.university.text}
                    type="text"
                    name="universityName"
                    onChange={(e) => {
                      handelUpdateInArray(e, education.id, 'educationHistory', 'university');
                    }}
                  />
                </label>
              </li>

              <li key={education.city.id}>
                <input
                  placeholder={education.city.text}
                  type="text"
                  name="cityi"
                  onChange={(e) => {
                    handelUpdateInArray(e, education.id, 'educationHistory', 'city');
                  }}
                />
              </li>

              <li key={education.degree.id}>
                <input
                  placeholder={education.degree.text}
                  type="text"
                  onChange={(e) => {
                    handelUpdateInArray(e, education.id, 'educationHistory', 'degree');
                  }}
                />

              </li>
              <button
                key={uniqid()}
                type="button"
                onClick={(e) => {
                  handelDeletInArray(e, education.id, 'educationHistory');
                }}
              >
                Delet

              </button>
            </div>
          ))}
        </ul>
        <button type="button" onClick={addEducation}>Add More</button>
      </div>

    );
  }
}

EducationInfo.propTypes = {
  getEducationHistory: PropTypes.arrayOf(PropTypes.shape({
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
  handelDeletInArray: PropTypes.func.isRequired,
  handelUpdateInArray: PropTypes.func.isRequired,
  addEducation: PropTypes.func.isRequired,

};

export default EducationInfo;
