/* eslint-disable require-jsdoc */

import {React, Component} from 'react';
import CareerInfo from './UserInfo/CareerInfo';
import EducationInfo from './UserInfo/EducationInfo';
import PersonalInfo from './UserInfo/PersonalInfo';
import SkillsInfo from './UserInfo/SkillsInfo';
class Main extends Component {
  constructor(props) {
    super(props);
  }

  capitalize(sentence) {
    if (typeof sentence !== 'string') return ('error');
    let capitalizeSentence = '';
    const temp = sentence.split(' ');
    for (let i = 0; i < temp.length; i += 1) {
      temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
      console.log(temp[i]);
    }
    let incompleteSentence = '';
    for (let i = 0; i < temp.length; i += 1) {
      capitalizeSentence = `${incompleteSentence} ${temp[i]}`;
      incompleteSentence = capitalizeSentence;
    }
    return capitalizeSentence;
  }


  render() {
    return (
      <div id='main'>
        <PersonalInfo></PersonalInfo>
        <EducationInfo></EducationInfo>
        <CareerInfo></CareerInfo>
        <SkillsInfo></SkillsInfo>
      </div>
    );
  }
}

export default Main;
