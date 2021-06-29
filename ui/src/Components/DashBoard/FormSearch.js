import React, { useState } from "react";
import "./Dashboard.css";
import { Button } from "react-bootstrap";
const FormSearch = ({handleSubmit}) => {
    const [input, setInput] = useState(
      {
        input : ""
      }
    )
    const handleChange = (e) => {
      setInput(e.target.value)
    }
    const handleSubmit1 = (e) =>{
      e.preventDefault();
      handleSubmit(input);
    }

  return (
    <>
      <input className="form-control whiteform" type="search" placeholder="Search" id="test" onChange = {handleChange} />
      <Button variant="default" className="searchbutton" type="submit" onClick = {handleSubmit1}>
        <i className="tiny material-icons">search</i>  Search
      </Button>
    </>
  );
};

export default FormSearch;