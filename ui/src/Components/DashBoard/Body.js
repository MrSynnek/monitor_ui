import React, { useEffect, useState } from "react";
import IsSearch from "./ValidateSearch";
// const{ express }= require('express');

// const port = 11072;



function Body(props) {
// const path = require('path');
// const app = express();
// const bodyParser = require("body-parser");
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

  // var express = require('express');
  // const app = express();
  const [input, setInput] = useState([]);
  // console.log("123");
  // app.use(bodyParser.json());
  // app.get('/api2/users', (req, res) => {
  //   console.log('api/users called!')
  //   res.json(null);
  // });
  // console.log("123");

  async function fetching(){
    const requestOption = {
      // mode: 'no-cors',
      method: 'post',
      headers: {"Content-Type":"application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"},
      body: JSON.stringify({
        deviceId: "mfmf",
        userMode: "INDIVIDUAL",
        configVersion: "8"
    })
    };

    
    const requestOption2 = {
      // mode: 'no-cors',
      method: 'get'
    };
    try{
    const response = await fetch('/v1/remittance/cache/refresh/countrychannel',requestOption).then(response => response.json())
    console.log("response");
    console.log(response);

    const response2 = await fetch('/api/greeting',requestOption2).then(response => response)
    console.log("response2");
    console.log(response2);
    const data = await response.json();
    setInput(data)
    }
    catch(error){
      console.log("error while fetching data:",error)
    }
  }
  useEffect(() => {
  fetching();
  },[]);
  
  return (
    <>
        <div class="row bodyTable">
          <div className="tablehead row">
            <div className="col-2 headcol" >Feature</div>
            <div className="col-2 headcol" >Function</div>
            <div className="col-4 headcol" >Feature Name</div>
            <div className="col-1 headcol" >Target</div>
            <div className="col-2 headcol" >Mode</div>
            <div className="col-1 headcol" >Edit</div>
          </div>
          <IsSearch input = {input} value = {props.search}/>
           <div className="footer"></div>
        </div>
    </>
  );
}
export default Body;
