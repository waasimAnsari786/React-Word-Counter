import React from "react";

export default function TextArea(props) {
  return (
    <>
      <textarea
        style={props.styleObj}
        value={props.tValue}
        onChange={(event) => props.handleOnChangeFunc(event)}
        name="t-area"
        className="p-3 my-5 w-100 inp-filed"
        placeholder="write your text..."
        rows={8}
      ></textarea>
    </>
  );
}
