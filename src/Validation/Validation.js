import React from "react";

const validation = (props) => {
  return (
    <p>{props.textLength > 5 ? "Text is long enough" : "Text too short"}</p>
  )
};

export default validation