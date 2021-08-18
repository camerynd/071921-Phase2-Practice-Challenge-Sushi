import React from "react";

function MoreButton({start, setStart, end , setEnd}) {

  function handleClick() {
    setStart(start + 4)
    setEnd(end + 4)
  }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
