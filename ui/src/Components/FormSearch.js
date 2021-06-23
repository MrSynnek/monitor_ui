import React, { useState } from "react";
import "./component.css";
import  {Search}  from "./Body";
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
      handleSubmit(e.target[0].value);
    }

  return (
    <div style={{ "padding-bottom": "20px", display: "inline-block" }}>
      <form class="d-flex justify-content-center" style={{ width: "32rem" }} onSubmit = {handleSubmit1}>
        <input class="form-control me-2" type="search" placeholder="Search" id="test" onChange = {handleChange} />
        <button class="btn btn-light btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default FormSearch;