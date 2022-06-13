import React, { Component } from 'react';
import uniqid from 'uniqid';
import WorkingArea from './WorkingArea';
import PreviewArea from './PreviewArea';

class Main extends Component {
  constructor(props) {
    super(props);
    this.career = {
      id: uniqid(),
      position: {
        id: uniqid(),
        text: 'Position',
      },
      company: {
        id: uniqid(),
        text: 'company',
      },
      city: {
        id: uniqid(),
        text: 'city',
      },
      from: {
        id: uniqid(),
        text: 'from',
      },
      to: {
        id: uniqid(),
        text: 'to',
      },
    };
    this.state = {
      info: {
        firstName: 'first Name',
        lastName: 'last Name',
        address: 'address',
        contact: 'Contact',
        email: 'email',
        description: 'description',
      },
      career: {},
      careerHistory: [this.career],
    };
  }

  // to avoid bindinding using
  handelFirstName = (e) => {
    this.setState((previousState) => ({
      info: {
        firstName: e.target.value,
        lastName: previousState.info.lastName,
        address: previousState.info.address,
        contact: previousState.info.contact,
        email: previousState.info.email,
        description: previousState.info.description,
      },
    }));
  };

  handelLastName = (e) => {
    this.setState((previousState) => ({
      info: {
        firstName: previousState.info.firstName,
        lastName: e.target.value,
        address: previousState.info.address,
        contact: previousState.info.contact,
        email: previousState.info.email,
        description: previousState.info.description,
      },
    }));
  };

  handelAddress = (e) => {
    this.setState((previousState) => ({
      info: {
        firstName: previousState.info.firstName,
        lastName: previousState.info.lastName,
        address: e.target.value,
        contact: previousState.info.contact,
        email: previousState.info.email,
        description: previousState.info.description,
      },
    }));
  };

  handelEmail = (e) => {
    this.setState((previousState) => ({
      info: {
        firstName: previousState.info.firstName,
        lastName: previousState.info.lastName,
        address: previousState.info.address,
        contact: previousState.info.contact,
        email: e.target.value,
        description: previousState.info.description,
      },
    }));
  };

  handelContact = (e) => {
    this.setState((previousState) => ({
      info: {
        firstName: previousState.info.firstName,
        lastName: previousState.info.lastName,
        address: previousState.info.address,
        contact: e.target.value,
        email: previousState.info.email,
        description: previousState.info.description,
      },
    }));
  };

  handelDescription = (e) => {
    this.setState((previousState) => ({
      info: {
        firstName: previousState.info.firstName,
        lastName: previousState.info.lastName,
        address: previousState.info.address,
        contact: previousState.info.contact,
        email: previousState.info.address,
        description: e.target.value,
      },
    }));
  };

  handelUpdateInArray = (e, id, stateKey, toBeUpdated) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (!this.state[stateKey]) console.warn('No key');
    if (!this.state[stateKey][toBeUpdated]) console.warn('No upadate key');

    this.setState((previousState) => ({
      [stateKey]: previousState[stateKey].map((key) => {
        if (key.id === id) {
          key[toBeUpdated].text = e.target.value;
        }
        return key;
      }),
    }));
  };

  addCareer = () => {
    this.setState(() => ({
      career: {
        id: uniqid(),
        position: {
          id: uniqid(),
          text: 'Position',
        },
        company: {
          id: uniqid(),
          text: 'company',
        },
        city: {
          id: uniqid(),
          text: 'city',
        },
        from: {
          id: uniqid(),
          text: 'from',
        },
        to: {
          id: uniqid(),
          text: 'to',
        },
      },
    }));
    this.setState((previousState) => ({
      careerHistory: previousState.careerHistory.concat(previousState.career),
    }));
  };

  render() {
    const { info, careerHistory } = this.state;
    const personalInfoFunc = {
      handelFirstName: this.handelFirstName,
      handelLastName: this.handelLastName,
      handelAddress: this.handelAddress,
      handelContact: this.handelContact,
      handelEmail: this.handelEmail,
      handelDescription: this.handelDescription,
    };

    const careerInfoUtility = {
      handelUpdateInArray: this.handelUpdateInArray,
      careerHistory,
      addCareer: this.addCareer,
    };

    return (
      <div id="main">
        <WorkingArea
          personalInfoUtility={personalInfoFunc}
          careerInfoUtility={careerInfoUtility}
        />
        <PreviewArea info={info} careerHistory={careerHistory} />
      </div>
    );
  }
}

export default Main;
