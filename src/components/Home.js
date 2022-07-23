import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor(){
        super();
        this.state = {name : "Ashwini", flag : false}
        this.resetState = this.state
        
    }
    change = () => {
        if(this.state.flag) {
            this.setState({flag: false})
        } else {
            this.setState({flag: true})
        }
    }

    render(){
        var nameList = ['abc', 'pqr', 'xyz']
        var numArray = [1,2,3,4,5]
        var arr = Array.from(Array(100));
       
        return (
            <div>
                <h1 className = {this.state.flag ? 'color' : 'color1' }>{this.state.name}</h1>
                <button type= "submit" onClick={() => { this.change()}}>Change</button>
                {nameList.map(function(name){
                        return <li>{name}</li>
                      })}
                      {numArray.map(function(num){
                         return <li>{num}</li>
                          }
                      )} 
                      {arr.map(function(num,index){
                          return <p>{index+1}</p>
                      })}
            </div>
        )
    }
   
}
export default Home

