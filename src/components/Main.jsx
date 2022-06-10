/*
    main will be the parent of preview and working
    its main task is to sync working and preview componet
    it achives that by geting the data form working componet.
    it gets data from working component when working componet runs the
    update function of main.js which is passed as props to working component
    then is pased the recived data to preview as a props.
*/

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
    // this.updateLastName = this.updateLastName.bind(this);
  }

  // capitalize(sentence) {
  //   if (typeof sentence !== 'string') return ('error');
  //   let capitalizeSentence = '';
  //   const temp = sentence.split(' ');
  //   for (let i = 0; i < temp.length; i += 1) {
  //     temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
  //   }
  //   let incompleteSentence = '';
  //   for (let i = 0; i < temp.length; i += 1) {
  //     capitalizeSentence = `${incompleteSentence} ${temp[i]}`;
  //     incompleteSentence = capitalizeSentence;
  //   }
  //   return capitalizeSentence;
  // }

  handelFirstName(e) {
    this.setState((previousState) => ({
      info: {
        firstName: e.target.value,
        lastName: previousState.info.lastName,
      },
    }));
  }

  render() {
    const { info } = this.state;

    return (
      <div id="main">
        <WorkingArea
          handelFirstName={this.handelFirstName}

        />
        <PreviewArea info={info} />
      </div>
    );
  }
}

export default Main;
