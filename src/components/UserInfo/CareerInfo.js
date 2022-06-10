/* eslint-disable require-jsdoc */
import {React, Component} from 'react';


class CareerInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      info: {
        positon: 'Postion',
        Company: 'Company',
        city: 'City',
        started: 'From',
        quit: 'To',
      },
      jobs: [],
    };
  }


  workingMode() {
    return (

      <button type="button"> Add </button>
    );
  }

  previewMode() {
    return (
      <div></div>
    );
  }
  render() {
    return (
      <div id="carrerInfo">
        {this.workingMode()}
      </div>

    );
  }
}

export default CareerInfo;
