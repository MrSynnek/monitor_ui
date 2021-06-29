import React, { useEffect, useState } from "react";
import IsSearch from "./ValidateSearch";
import "./Dashboard.css";

function Body(props) {
  const [input, setInput] = useState([]);
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
    try{
    const response = await fetch('http://localhost:11114/v1/toggle/flags',requestOption)
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
