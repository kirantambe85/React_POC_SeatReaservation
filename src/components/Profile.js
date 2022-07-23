import React, { Component } from 'react';
import Employee from './Employee';

class Profile extends Component {
    constructor(props){
      super(props);
      this.state = {value : 'Demo Display'};
      console.log("state Value", this.state.value);
      this.props.message.forEach(el =>{
          console.log("el", el);
          console.log("Props", props.message1.Name);
      })
    }
    myDemo = () => {
    this.setState({value: 'Demo Updated=============!'})
      }
    render(){
        return (
            <div>
            <Employee  message  = {this.state.value} />
            <h1>{this.props.message1.Name}</h1>
            <button type ="submit" onClick={() => { this.myDemo()}}>Demo</button>
            </div>
        )
    }
}
export default Profile;