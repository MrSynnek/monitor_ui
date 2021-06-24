import React, { useEffect, useState } from "react";
import body from "./Body";
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
      <div class="container" style={{ "padding-top": "20px" }}>
        <div
          class="container"
          style={{ padding: "15px 0px 15px 0px", color: "white" }}
        >
          <table class="table table-borderless text-center">
            <thead
              style={{
                background:
                  "linear-gradient(to right, #6600cc 46%, #cc33ff 100%)",
                "border-style": "none",
                "border-radius": "8px",
              }}
            >
              <tr
                style={{
                  color: "white",
                  border: "none",
                }}
              >
                <th class="col pb-3 pt-3 rounded-start ">Project</th>
                <th class="col pb-3 pt-3 ">Service</th>
                <th class="col pb-3 pt-3 ">Feature Name</th>
                <th class="col pb-3 pt-3 ">Target</th>
                <th class="col pb-3 pt-3 ">Mode</th>
                <th class="col pb-3 pt-3 rounded-end ">Edit</th>
              </tr>
            </thead>
            <tr style={{ height: "10px" }}></tr>
            <tbody style={{ backgroundColor: "#393939" }}>
              <IsSearch input = {input} value = {props.search}/>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Body;
