import {Component} from 'react';
import CareerInfo from './UserInfo/CareerInfo';
import EducationInfo from './UserInfo/EducationInfo';
import PersonalInfo from './UserInfo/PersonalInfo';
import SkillsInfo from './UserInfo/SkillsInfo';

class WorkingArea extends Component{
  constructor(props){
    super(props);
   

  }


  render(){
    return(
        <div id="workingArea">
            <PersonalInfo workingMode={true} 
                updatefirstName={this.props.updatefirstName} 
                updateLastName={this.props.updateLastName}>
            </PersonalInfo>

            
            <EducationInfo></EducationInfo>
            <CareerInfo></CareerInfo>
            <SkillsInfo></SkillsInfo>
        </div>

    )
  }
}

export default WorkingArea;