import React, { Component } from "react";
import {useRef, useState, useEffect} from "react";
import Seatbooking from "./Seatbooking";

function Timer({onClickResetBtn} ){
const intervalRef= useRef(null);
const [timer,setTimer] = useState("00:00");



function getTimeremaining(endtime){
const total = Date.parse(endtime) - Date.parse(new Date());
const second = Math.floor((total/1000) % 60);
const minute = Math.floor((total/1000/60) % 60);
const hour = Math.floor((total/1000 *60 * 60) % 24);
const day = Math.floor((total/(1000*60 * 60 *24) ));
return{
    total, day ,hour,minute, second
};

}

function startTimer(deadline){
    let {total, day ,hour,minute, second}= getTimeremaining(deadline);
    if (total>=0){
        setTimer(
            // (hour >9 ? hour : '0' + hour)+ ':' +
          minute >9 ? minute : '0' + minute +':' +
          (second >9 ? second: '0' + second)
        )
    }
    else{
        clearInterval(intervalRef.current);

    }

}
function clearTimer(endtime){
    setTimer('00:60')
    if(intervalRef.current)  clearInterval(intervalRef.current);
    const id = setInterval(()=>{
    startTimer(endtime);
    },1000)
    intervalRef.current=id
}

function getDeadlineTime(){
    let dealine= new Date();
    dealine.setSeconds(dealine.getSeconds()+60);
    return dealine

}
// useEffect(()=>{
// clearTimer(getDeadlineTime())
// return ()=>{if(intervalRef.current) clearInterval(intervalRef.current)};
// },[]);

function onClickResetBtn(){
    if(intervalRef.current) clearInterval(intervalRef.current);
    clearTimer(getDeadlineTime());
}

var timeclick= 0
return(
<div className="timer"  >
   {timer}
    {/* {timeclick > 3 ?  null : timer } */}
   
     
      <button onClick={onClickResetBtn}>Book Seat</button>
</div>


);

}

export  default Timer;