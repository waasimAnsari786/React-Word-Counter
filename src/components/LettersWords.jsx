import React from "react";

export default function LettersWords(props) {
  return (
    <>
      <h3>
        {props.charcLength
          ? props.charcLength > 1 || props.charcLength === 0
            ? `${props.charcLength} ${props.charcWord}s`
            : `${props.charcLength} ${props.charcWord}`
          : `0 ${props.charcWord}`}
      </h3>
    </>
  );
}
