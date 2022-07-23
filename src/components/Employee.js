
import React, { Component } from 'react'
import { useParams } from 'react-router-dom';

class Employee extends Component{
    constructor(props){
        super(props);
        console.log("Message from Profile", this.props);

        console.log("Execute First");
        this.state = {favoritecolor: "red", city: "Pune"};
       
    }
    sampleDemo = () => {
        this.setState({city : "Hyderabad"})
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("Execute Second");
        console.log("state.favoritecolor", state.favoritecolor);
        console.log("state.city", state.city);
        return {favoritecolor: state.favoritecolor , city: state.city};
       
      }
   

    render(){
        return(
            <div>
            <h1>{this.props.message}</h1>
            <h1>{this.state.favoritecolor}</h1>
            <h1 onClick={()=> {this.sampleDemo()}}>{this.state.city}</h1>
            </div>
        
        )
        
    }
}

export default Employee;
