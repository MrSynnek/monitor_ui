import React, { useEffect, useState } from "react";
import body from "./Body";
import data from "./data.js";
import BootstrapSwitchButton from "bootstrap-switch-button-react";


const handleEdit = () =>{
  console.log("edit handling...");
}

const handleDel = () =>{
  console.log("del handling...");
}

export const Search = (input1) =>{
  console.log(input1)
}


function Body() {
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
              {input.map((item) => (
                <>
                  <tr style={{ color: "white" }} key={item.id}>
                    <td class="pb-4 pt-4 rounded-start">{item.project}</td>
                    <td class="pb-4 pt-4">{item.service}</td>
                    <td class="pb-4 pt-4">{item.feature}</td>
                    <td class="pb-4 pt-4">{item.target}</td>
                    <td class="pb-4 pt-4">
                      <BootstrapSwitchButton
                        checked={(item.mode) == 0 ? false:true}
                        onstyle="success"
                        offstyle="dark"
                        style="border"
                        onChange={(checked) => {
                          //toggle on 
                        }}
                      />
                    </td>
                    <td class="pb-4 pt-4 rounded-end">
                
                      <span onClick={handleEdit}><i class="fas fa-edit" style={{"padding-right":"15px"}}></i></span>
                    
                      
                    <span onClick={handleDel}><i class="far fa-trash-alt"></i></span>
         
                    </td>
                  </tr>
                  <tr style={{ height: "10px" }}></tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Body;
