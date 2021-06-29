import React, { useEffect, useState } from "react";
import data from "./data"
import IsSearch from "./ValidateSearch";
import "./Dashboard.css";

function Body(props) {
  const [input, setInput] = useState([]);
  useEffect(() => {
    setInput(data);
  });

  return (
    <>
        <div class="row bodyTable">
          <div className="tablehead row">
            <div className="col-2 headcol" >Project</div>
            <div className="col-2 headcol" >Service</div>
            <div className="col-4 headcol" >Feature</div>
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
