import {Component} from 'react';


class PersonalInfo extends Component{
  constructor(props){
    super(props);
    this.state={
        info:{
            firstName:"first Name",
            lastName:"last Name",
        }
    }
    this.handelFirstName=this.handelFirstName.bind(this);
    this.handelLastName=this.handelLastName.bind(this);

  }

  //event handlet is asyn so use asunc so that update function doesnot run before the state update
  //otherwise it will create one character lag
  
  async handelFirstName(e){
      await this.setState({
          info:{
              firstName:e.target.value,
              lastName:this.state.info.lastName,
          }
      })
      console.log(this.state.info.firstName)
      this.props.updatefirstName(this.state.info.firstName);
  }
  async handelLastName(e){
      await this.setState({
          info:{
              firstName:this.state.info.firstName,
              lastName: e.target.value,
          }
      })
       this.props.updateLastName(this.state.info.lastName);
    }
    
    isWorking(bool){
        if(bool){
            return <div id="name">
            <label>First Name</label>
            <input type="text" value={this.state.info.firstName} onChange={this.handelFirstName}></input>
            <label>Last Name</label>
            <input type="text" onChange={this.handelLastName}></input>
          </div>
      }else{
          
          return  <div id="prsonalInfo">
              
              {this.props.info.firstName} {this.props.info.lastName}
          </div>
         
      }
  }
  render(){
    return(
        <div id='personalInfo'>
            {this.isWorking(this.props.workingMode)}
        </div>

    )
  }
}

export default PersonalInfo;