import {Component} from 'react';
import CareerInfo from './UserInfo/CareerInfo';
import EducationInfo from './UserInfo/EducationInfo';
import PersonalInfo from './UserInfo/PersonalInfo';
import SkillsInfo from './UserInfo/SkillsInfo';

class PreviewArea extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
        <div id="previewArea">
            <PersonalInfo workingMode={false} info={this.props.info}></PersonalInfo>
            <EducationInfo></EducationInfo>
            <CareerInfo></CareerInfo>
            <SkillsInfo></SkillsInfo>
        </div>

    )
  }
}

export default PreviewArea;