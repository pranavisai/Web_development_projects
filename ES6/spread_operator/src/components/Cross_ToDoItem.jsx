import React from "react";
import { useState } from "react";

function ToDOItem(props) {

    const [isDone, setIsDone] = useState(false);

    function handleClick() {
        setIsDone(prevValue => !prevValue);
    }

    // here none is given in "" because this is the value being set for text-decoration in case of false.

  return (<li onClick={handleClick}
  style={{textDecoration: isDone ? "line-through" : "none"}} > 
    {props.text}
    </li>);
}

export default ToDOItem;