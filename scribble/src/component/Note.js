import React, { useState } from "react";

const Note = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const expandParagraph = () => {
        setExpanded(!isExpanded);   // (!isExpanded) It will toggle the card when click on title content will expand , when again click it content will shrink..
    };
  return (
    <>
      <h1 onClick={expandParagraph}>{props.title}</h1>
       {isExpanded ? <p>{props.content}</p> : null}
    </>
  );
};

export default Note;
