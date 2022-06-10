/* eslint-disable require-jsdoc */

import {React, Component} from 'react';


class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      info: {
        firstName: 'first Name',
        lastName: 'last Name',
        address: 'Address',
        contact: 'Number',
      },
    };
    this.handelFirstName=this.handelFirstName.bind(this);
    this.handelLastName=this.handelLastName.bind(this);
    this.handelAddress=this.handelAddress.bind(this);
    this.handelContact=this.handelContact.bind(this);
  }

  #capitalize(sentence) {
    if (typeof sentence !== 'string') return ('error');
    let capitalizeSentence = '';
    const temp = sentence.split(' ');
    for (let i = 0; i < temp.length; i += 1) {
      temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
    }
    let incompleteSentence = '';
    for (let i = 0; i < temp.length; i += 1) {
      capitalizeSentence = `${incompleteSentence} ${temp[i]}`;
      incompleteSentence = capitalizeSentence;
    }
    return capitalizeSentence;
  }
  // ! this is ture only when you pass it to other component
  // event handler is asyn
  // so use asunc so that update function doesnot run before the state update
  // otherwise it will create one character lag
  handelFirstName(e) {
    this.setState({
      info: {
        firstName: e.target.value,
        lastName: this.state.info.lastName,
        address: this.state.info.address,
        contact: this.state.info.contact,
      },
    });
  }
  handelLastName(e) {
    this.setState({
      info: {
        firstName: this.state.info.firstName,
        lastName: e.target.value,
        address: this.state.info.address,
        contact: this.state.info.contact,

      },
    });
  }

  handelAddress(e) {
    this.setState({
      info: {
        firstName: this.state.info.firstName,
        lastName: this.state.info.lastName,
        address: e.target.value,
        contact: this.state.info.contact,
      },
    });
  }

  handelContact(e) {
    this.setState({
      info: {
        firstName: this.state.info.firstName,
        lastName: this.state.info.lastName,
        address: this.state.info.address,
        contact: (e.target.validity.valid) ?
                e.target.value : this.state.info.contact,
      },
    });
  }
  getUserName() {
    return <div id="name">
      <label>First Name</label>
      <input type="text" value={this.state.info.firstName}
        onChange={this.handelFirstName}></input>
      <label>Last Name</label>
      <input type="text" onChange={this.handelLastName}></input>
    </div>;
  }

  getUserPhoto() {
    return (
      <div>
        <input type="file" accept="image/png.image/jpg"></input>
      </div>
    );
  }
  getUserAddress() {
    return <div>
      <label>Address</label>
      <input type="text" onChange={this.handelAddress}></input>
    </div>;
  }

  getcontactNo() {
    return (
      <div>
        <label>Contact</label>
        <input type="number" onChange={this.handelContact}></input>
      </div>
    );
  }
  wrokingMode() {
    return (<div>
      {this.getUserName()}
      {this.getUserAddress()};
      {this.getcontactNo()};
      {this.getUserPhoto()}
    </div>
    );
  }
  previewMode() {
    return (
      <div id="prsonalInfo">
        <p>
          {this.#capitalize(this.state.info.firstName)}
          {this.#capitalize(this.state.info.lastName)}
        </p>

        <p>

          {this.#capitalize(this.state.info.address)}
        </p>

        <p>
          {console.log(this.state.info.contact)}
          {this.state.info.contact}
        </p>
      </div>
    );
  }
  render() {
    return (
      <div id='personalInfo'>
        {this.wrokingMode()}
        {this.previewMode()}
      </div>

    );
  }
}

export default PersonalInfo;
