import React from "react";

export default function OptBtns(props) {
  return (
    <>
      <button
        className="wr-count-btns"
        style={props.styleObj}
        onClick={() => {
          props.btnFuncs(props.btnArgm);
          props.btnFuncs2();
        }}
      >
        {props.text}
      </button>
    </>
  );
}
