import React from "react";
export default function Alert(props) {
  return (
    <>
      <div
        className="alert alert-success d-flex
        align-items-center"
        role="alert"
      >
        <svg
          className="bi flex-shrink-0 me-2"
          role="img"
          aria-label="Success:"
          style={{ height: "15px", width: "15px", fill: "green" }}
        >
          <use xlinkHref="#check-circle-fill" />
          <symbol id="check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </symbol>
        </svg>
        <div style={{ color: "green", fontSize: "15px" }}>
          <b className="fw-bold">Success : </b>
          {props.alText}
        </div>
      </div>
    </>
  );
}
