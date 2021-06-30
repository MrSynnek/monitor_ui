import React from "react";
import ToggleSwitch from "../CommonComponent/ToggleSwitch/ToggleSwitch";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import VerticallyCenteredModal from '../CommonComponent/Modal/Modal'

const IsSearch = ({ input, value=""}) => {
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

  return input.filter((inp) => {
    return inp.project.toLowerCase().match(String(value).toLowerCase())||inp.service.toLowerCase().match(String(value).toLowerCase());
  }).map((item) => (
    <>
      <div className="controlcard row container-fluid" key={item.id}>
        <div className="col-2 text-break cardtext" >{item.project}</div>
        <div className="col-2 text-break cardtext" >{item.service}</div>
        <div className="col-4 cardtext-2" >
          <p className="text2">{item.feature}</p>
        </div>
        <div className="col-1 cardtext" > <i className="tiny material-icons">{item.target==="Global"? "language" : "group"}</i> </div>
        <div className="col-2 cardtext-3" >
              <ToggleSwitch parentCallback={handleCallback} initMode={item.mode} id={item.id} />    
        </div>
        <div className="col-1 cardtext" >
          <i className="tiny material-icons editicon"  onClick={() => HandleClick(item.id)}>edit</i>  <i className="tiny material-icons deleteicon" onClick={toggleModal}>delete</i>
        </div>  
      </div> 
      <VerticallyCenteredModal show={modal} onHide={() => toggleModal()} message="Do you want to delete this control?" head="Delete this control"/>
    </>
  ));
};

export default IsSearch;