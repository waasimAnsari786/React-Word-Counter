import React from "react";

export default function ReadingTime(props) {
  return (
    <>
      <p>
        {props.readingTime
          ? `According to google ${props.readingTime} required for read this text.`
          : ""}
      </p>
    </>
  );
}
