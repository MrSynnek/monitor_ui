import React, { useEffect, useState } from "react";
//import data from "./data"
import IsSearch from "./ValidateSearch";
import "./Dashboard.css";
import getDashboardData from '../../Adapters/DashboardAPI'
function Body(props) {

  const [input, setInput] = useState([]);

  useEffect(() => {
    getDashboardData().then((response) => {
      console.log(response)
      setInput(response);
      console.log(response)
    })
  });

  return (
    <>
        <div className="row bodyTable">
          <div className="tablehead row">
            <div className="col-2 headcol" >Project</div>
            <div className="col-2 headcol" >Service</div>
            <div className="col-4 headcol" >Feature</div>
            <div className="col-1 headcol" >Target</div>
            <div className="col-2 headcol" >Mode</div>
            <div className="col-1 headcol" >Edit</div>
          </div>
          {/* <IsSearch input={input} value={props.search}/> */}
           <div className="footer"></div>
        </div>
    </>
  );
}
export default Body;
