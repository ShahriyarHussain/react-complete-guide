import React from "react";

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I'm <strong>{props.name}</strong> ! I am <em>{props.age}</em>
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed}></input>
    </div>
  );
};

export default person;
