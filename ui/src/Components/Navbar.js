import React, { useState } from "react";
import "./component.css";
import  {Search}  from "./Body";

const handleAdd = () =>{
  console.log("add")
}

const FormSearch = ({handleSubmit,handleChange}) => {
  return (
    <div style={{ "padding-bottom": "20px", display: "inline-block" }}>
      <form class="d-flex justify-content-center" style={{ width: "32rem" }} onSubmit = {handleSubmit}>
        <input class="form-control me-2" type="search" placeholder="Search" onChange = {handleChange} />
        <button class="btn btn-light btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

const AddButton = ({handleAdd}) => {
  return (
    <div
      class="float-end"
      style={{ "padding-bottom": "20px", display: "inline-block" }}
    >
      <button onClick={handleAdd} class="btn btn-light btn-outline-success " type="submit">
        Add
      </button>
    </div>
  );
};

function Navbar() {
  const [submit, setSubmit] = useState(false);
  const [input, setInput] = useState({
      input : ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true)
    if(input != ""){
    {Search(input)}
    }
    else{
      alert("Please type something");
    }
  }
  
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <>
      <div
        class="container-fluid"
        style={{ backgroundColor: "#4C0099", height: "100%" }}
      >
        <div class="container">
          <p
            class="navbar-brand font-A"
            style={{
              "padding-top": "50px",
              "margin-left": "20px",
              color: "white",
              fontSize: "40px",
            }}
          >
            Feature Toggle Dashboard
          </p>
          <hr
            style={{
              opacity: "1",
              "margin-top": "0",
              color: "#FFFFFF",
              backgroundColor: "#FFFFFF",
              height: 1,
            }}
          />
          <FormSearch handleSubmit={handleSubmit} handleChange = {handleChange} />
          <AddButton handleAdd={handleAdd}/>
        </div>
      </div>
    </>
  );
}
export default Navbar;
