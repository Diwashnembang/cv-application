/*
    main will be the parent of preview and working
    its main task is to sync working and preview componet 
    it achives that by geting the data form working componet.
    it gets data from working component when working componet runs the 
    update function of main.js which is passed as props to working component
    then is pased the recived data to preview as a props.
*/

import {Component} from 'react';
import WorkingArea from './WorkingArea';
import PreviewArea from './PreviewArea';
class Main extends Component{
  constructor(props){
    super(props);
    this.state={
        info:{
            firstName:"first Name",
            lastName:"last Name"
        }
    }
    this.updatefirstName=this.updatefirstName.bind(this);
    this.updateLastName=this.updateLastName.bind(this);
  }

  capitalize(sentence) {
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
   updatefirstName(text){
      this.setState({
          info:{
              firstName:this.capitalize(text),
              lastName:this.state.info.lastName,
          }
      })
    };

    updateLastName(text){
         this.setState({
          info:{
              firstName:this.state.info.firstName,
              lastName:this.capitalize(text),
          }
      })
    }

  render(){
    return(
        <div id='main'>
            <WorkingArea workingMode="true"
                updatefirstName={this.updatefirstName}
                updateLastName={this.updateLastName}>
            </WorkingArea>
            <PreviewArea workingMode="false" info={this.state.info}></PreviewArea>
        </div>
    )
  }
}

export default Main;