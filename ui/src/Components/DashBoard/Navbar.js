import React, { useState } from "react";
import "./Dashboard";
import FormSearch from "./FormSearch";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";



const AddButton = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push("/add");
  }
  return (
    <Button variant="default" type="submit" className="addbutton " onClick={handleClick}>
      <i className="tiny material-icons">add</i>  Add
    </Button>
  );
};

function Navbar(props) {
  return (
    <div className="header row">
      <div className="innerheader row">
        <h1>Feature Toggle Dashboard</h1>
        <div className="line"></div>
        <div className="row search">
          <FormSearch handleSubmit={props.addInput} />
          <AddButton />
        </div>
      </div>         
    </div>
  );
}
export default Navbar;
