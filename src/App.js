
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import post from './post.json'
import './App.css';
import Login from './components/Login';
import Timer from './components/Timer';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


window.date = new Date()

class App extends Component {

  constructor(props) {
    super(props);
    this.seatCount = 0
    var count = 0;
    this.baseState = this.state
    this.state = {

      startDate: new Date()

    };

    this.handleChange = this.handleChange.bind(this);
    clearInterval(this.interval);
    this.state.seconds =0;
    this.state = {
      
      currentDate: null,
      seat: [
        'Desk-1', 'Desk-2', 'Desk-3',
        'Desk-4', 'Desk-5', 'Desk-6',
        'Desk-7', 'Desk-8', 'Desk-9'
      ],
      boxData : [
        {
          id: 1,
          title: "box1",
          status: 'Available',
          timing: ''
        },
        {
          id: 2,
          title: "box2",
          status: 'Available',
          timing: ''
        },
        {
          id: 3,
          title: "box3",
          status: 'Available',
          timing: ''
        },
        {
          id: 4,
          title: "box4",
          status: 'Available',
          timing: ''
        },
        {
          id: 5,
          title: "box5",
          status: 'Available',
          timing: ''
        }
      ],
      seatAvailable: [
        'Desk-1', 'Desk-2', 'Desk-3',
        'Desk-4', 'Desk-5', 'Desk-6',
        'Desk-7', 'Desk-8', 'Desk-9'
      ],
      seatReserved: [],
      seatSelected: post
    }
    // this.handleClick = this.handleClick.bind(this);
  }


  // onClickData(seat) {
    
  //   if (this.state.seatReserved.indexOf(seat) >-1 ) {
  //       this.setState({
  //         seatAvailable: this.state.seatAvailable.concat(seat),
  //         seatReserved: this.state.seatReserved.filter(res => res != seat)
  //       })
      
  //   }
  //    else {
  //     this.setState({

  //       seatReserved: this.state.seatReserved.concat(seat),
  //       seatAvailable: this.state.seatAvailable.filter(res => res != seat)
        
  //     })
     
  
  //   }
  // }
  componentWillUnmount() {

    this.onClickData(this.seat) ;

  }

  onClickData(seat) {

    if (this.state.seatReserved.indexOf(seat) > -1) {

      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res != seat),
    })
  setTimeout(()=>{

    this.setState({

      seatAvailable: this.state.seatAvailable.concat(seat),
      seatReserved: this.state.seatReserved.filter(res => res != seat),
  })
        //seatSelected: this.state.seatSelected.filter(res => res != seat)
      },20000);
    } else {


        this.setState({ 
          seatReserved: this.state.seatReserved.concat(seat),

          //seatSelected: this.state.seatSelected.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(res => res != seat)
        });
        setTimeout(()=>{
          
          this.setState({
            seatAvailable: this.state.seatAvailable.concat(seat),
            seatReserved: this.state.seatReserved.filter(res => res != seat),
        })
        },20000)

    }
  }
  
  
   
  
  
  resetForm = () => {this.setState(clearInterval(this.interval))
  console.log("reset")
  }
  
  
  handleChange(date) {
    window.date = date;
    this.resetForm();
    
    clearInterval(this.interval);
    this.state = { seconds: 0 };
    this.state.seconds=0;
    this.setState({
    //  state:{seconds: 0},
    
      startDate: date,
      seat: [
        'Desk-1', 'Desk-2', 'Desk-3',
        'Desk-4', 'Desk-5', 'Desk-6',
        'Desk-7', 'Desk-8', 'Desk-9'
      ],
      seatAvailable: [
        'Desk-1', 'Desk-2', 'Desk-3',
        'Desk-4', 'Desk-5', 'Desk-6',
        'Desk-7', 'Desk-8', 'Desk-9'
      ],

      time : [
        
      ],
      seatReserved: [],
      seatSelected: post

    })

    let selectedDiv = document.querySelectorAll(".selected");
    console.log(this.state.seatAvailable)
    console.log(this.state.seatReserved)
    this.state.seatReserved = []
    let makeDivAvailable = document.querySelectorAll(".available")

    console.log(makeDivAvailable)
    for (let i = 0; i < makeDivAvailable.length; i++) {
      makeDivAvailable[i].style.pointerEvents = "";
      makeDivAvailable[i].style.cursor = "";
      makeDivAvailable[i].style.opacity = "";
      console.log(makeDivAvailable[i])
    }
  }



  checktrue(row) {
    if (this.state.seatSelected.indexOf(row) > -1) {
      return false;
    } else {
      return true;
    }
  }

  handleSubmited() {

    this.setState({
      seatSelected: this.state.seatSelected.concat(this.state.seatReserved),

    });
    this.setState({
      seatReserved: []
    });
    this.setState({
      seconds: this.state.seconds.concat(this.state.seconds),
    })
  }
  
  render() {
    this.baseState = this.state
    return (
      <div >
        <div>

          <DatePicker
            placeholderText='Select Date'
            selected={this.state.startDate}
            selectsStart={this.state.startDate}
            onChange={this.handleChange}
            onClick={this.resetForm}
            startDate={new Date()}
            endDate={new Date()}
            minDate={new Date()}
            maxDate={new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)}
            className="dateSel"
            />

        </div>
        <h1>Seat Reservation System</h1>
        <DrawGrid

          seatId={this.state.seatId}
          seat={this.state.seat}
          boxData={this.state.boxData}
          available={this.state.seatAvailable}
          reserved={this.state.seatReserved}
          onClickData={this.onClickData.bind(this)}
          seconds={this.state.seconds}
          selected={this.state.seatSelected}
          checktrue={this.checktrue.bind(this)}
          handleChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}

class DrawGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seconds: 0 }
    this.seatCount = 0;
    var time = false;
  }




  onClickSeat(seat) {
    
    this.seatCount += 1

    const dateElement = document.querySelector(".dateSel")

    const selectedDate = dateElement.value

    if (window.date != selectedDate && selectedDate != null && window.date != null) {

      this.seatCount = 0

      window.date = null

    }

    if (this.seatCount < 3) {

      this.props.onClickData(seat);
      this.interval = setInterval(() => {
        this.setState(prevState => ({
          
            seconds: prevState.seconds + 1
        
          
        }));

      }, 1000);
      if (this.seatCount ) {

        let list = document.querySelectorAll(".reserve");

        for (let i = 0; i < list.length; i++) {

          list[i].style.pointerEvents = "none";

          list[i].style.cursor = "default";

          list[i].style.opacity = 0.6;

        }

      }

    }

  }

  componentWillUnmount() {

    clearInterval(this.interval);

  }
  render() {
    
    return (
      <div className="container">
        <h2></h2>
        <table className="grid">
          <tbody>
            <tr>
            
              {this.props.seat.map(row =>
                <td className={this.props.reserved.indexOf(row) > -1 ? 'reserved' : 'available'}
                  key={row} onClick={e => this.onClickSeat(row)}>
                  {row} 
                  <div ><Timer/></div>
                </td>
              )}
              {/* {this.props.reserved.indexOf(row) > -1 ? this.state.seconds <= 60  ? this.state.seconds:'' : 'available'? "": null} */}
              {/* {this.props.reserved.indexOf(row) > -1 ? this.state.seconds : 'available'? "-": null} */}
              {/* {this.seatCount < 3 ? <Timer  /> : null} */}
              
            </tr>
          </tbody>
        </table>

        <AvailableList available={this.props.available} />
        <ReservedList reserved={this.props.reserved} />
      </div>



      
    )
  }



}

class AvailableList extends React.Component {
  render() {
    const seatCount = this.props.available.length;
    return (
      <div className="left">
        <h4>Available Seats: ({seatCount == 0 ? 'No seats available' : seatCount})</h4>
        <ul>
          {this.props.available.map((res) => <li key={res} >{res} </li>)}
        </ul>
      </div>
    )
  }
}

class ReservedList extends React.Component {
  render() {
    return (
      <div className="right">
        <h4>Reserved Seats: ({this.props.reserved.length})</h4>
        <ul>
          {this.props.reserved.map((res, sec) => <li key={res} >{res}</li>)}

        </ul>
      </div>
    )
  }
}



export default App;
