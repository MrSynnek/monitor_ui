import React, { useState } from "react";
import "./component.css";
import FormSearch from "./FormSearch";
import { useHistory } from "react-router-dom";



const AddButton = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push("/add");
  }
  return (
    <div
      class="float-end"
      style={{ "padding-bottom": "20px", display: "inline-block" }}
    >
      <button class="btn btn-light btn-outline-success " type="submit" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

function Navbar(props) {
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
          <FormSearch handleSubmit={props.addInput} />
          <AddButton />
        </div>
      </div>
    </>
  );
}
export default Navbar;
