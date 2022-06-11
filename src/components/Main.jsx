import React, { Component } from 'react';
import WorkingArea from './WorkingArea';
import PreviewArea from './PreviewArea';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        firstName: 'first Name',
        lastName: 'last Name',
      },
    };
    this.handelFirstName = this.handelFirstName.bind(this);
    this.handelLastName = this.handelLastName.bind(this);
  }

  handelFirstName(e) {
    this.setState((previousState) => ({
      info: {
        firstName: e.target.value,
        lastName: previousState.info.lastName,
      },
    }));
  }

  handelLastName(e) {
    this.setState((previousState) => ({
      info: {
        firstName: previousState.info.firstName,
        lastName: e.target.value,
      },
    }));
  }

  render() {
    const { info } = this.state;
    console.log("this is from main",info);
    return (
      <div id="main">
        <WorkingArea
          handelFirstName={this.handelFirstName}
          handelLastName={this.handelLastName}
        />
        <PreviewArea info={info} />
      </div>
    );
  }
}

export default Main;
