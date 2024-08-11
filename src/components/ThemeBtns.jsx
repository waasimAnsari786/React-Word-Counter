import React from "react";

export default function ThemeBtns(props) {
  return (
    <>
      <button
        style={props.thBtnObj}
        className="theme-btn"
        onClick={() => {
          props.changeThemeFunc(
            props.parameter1,
            props.parameter2,
            props.parameter3,
            props.parameter4
          );
          props.themBtnFunc();
        }}
      >
        {props.btnText}
      </button>
    </>
  );
}
