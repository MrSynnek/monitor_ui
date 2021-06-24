import React from "react";
import ToggleSwitch from "../CommonComponent/ToggleSwitch/ToggleSwitch";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import VerticallyCenteredModal from '../CommonComponent/Modal/Modal'

const handleEdit = () => {
  console.log("edit handling...");
};

const handleDel = () => {
  console.log("del handling...");
};

const IsSearch = ({ input, value }) => {
  const [modal,setModal] = useState(false)
  const history = useHistory();

  const toggleModal = () =>{
        setModal(!modal)
  }

  const handleCallback = (childData) => {
    let tempData = input;
    tempData[childData.id].mode = !childData.mode;
    input = tempData;
    console.log(input);
  };
  const HandleClick = (id) => {
    history.push(`/edit?id=${id}`);
  };

  if (value) {
    const Search = input.filter((item) => item.project === value);
    return Search.map((item) => (
      <>
        {/* <tr style={{ color: "white" }} key={item.id}>
          <td class="pb-4 pt-4 ">{item.project}</td>
          <td class="pb-4 pt-4">{item.service}</td>
          <td class="pb-4 pt-4">{item.feature}</td>
          <td class="pb-4 pt-4">
            <i className="tiny material-icons">
              {item.target === "Global" ? "language" : "group"}
            </i>
          </td>
          <td class="pb-4 pt-4">
            <ToggleSwitch
              parentCallback={handleCallback}
              initMode={item.mode}
              id={item.id}
            />
          </td>
          <td class="pb-4 pt-4 ">
            <span onClick={handleEdit}>
              <i class="fas fa-edit" style={{ "padding-right": "15px" }}></i>
            </span>

            <span onClick={handleDel}>
              <i class="far fa-trash-alt"></i>
            </span>
          </td>
        </tr>
        <tr style={{ height: "10px" }}></tr>
      
         */}
      </>
    ));
  } else {
    return input.map((item) => (
      <>
        <div className="controlcard row container-fluid">
          <div className="col-2 text-break cardtext" >
            <p>{item.project}</p>
          </div>
          <div className="col-2 text-break cardtext" >
            <p>{item.service}</p>
          </div>
          <div className="col-4 cardtext-2" >
            <p className="text2">{item.feature}</p>
          </div>
          <div className="col-1 cardtext" > <i className="tiny material-icons">{item.target==="Global"? "language" : "group"}</i> </div>
          <div className="col-2 cardtext-3" >
                <ToggleSwitch parentCallback={handleCallback} initMode={item.mode} id={item.id} />    
          </div>
          <div className="col-1 cardtext" >
            <i className="tiny material-icons editicon" onClick={() => HandleClick(item.id)}>edit</i>  <i className="tiny material-icons deleteicon" onClick={toggleModal}>delete</i>
          </div>  
        </div>
        <VerticallyCenteredModal 
                show={modal}
                onHide={() => toggleModal()}
                message="Do you want to delete this control?"
                head="Delete this control"
        />
      </>
    ));
  }
};

export default IsSearch;
