import React from "react";
import "./Person.css";
import Radium from "radium";

const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}>
        I'm <strong>{props.name}</strong> ! I am <em>{props.age}</em>
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default Radium(person);
