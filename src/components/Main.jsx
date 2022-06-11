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
        address: 'address',
        contact: 'Contact',
        email: 'email',
        description: 'description',
      },
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

  render() {
    const { info } = this.state;
    const personalInfoFunc = {
      handelFirstName: this.handelFirstName,
      handelLastName: this.handelLastName,
      handelAddress: this.handelAddress,
      handelContact: this.handelContact,
      handelEmail: this.handelEmail,
      handelDescription: this.handelDescription,
    };
    return (
      <div id="main">
        <WorkingArea
          personalInfoUtility={personalInfoFunc}
        />
        <PreviewArea info={info} />
      </div>
    );
  }
}

export default Main;
