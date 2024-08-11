import React from "react";

export default function Heading(props) {
  return (
    <>
      <h1 className="text" style={{ textAlign: props.property }}>
        {props.text}
      </h1>
    </>
  );
}
