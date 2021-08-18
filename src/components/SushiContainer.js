import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushi, setSushi}) {

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(4)

  return (
    <div className="belt">
      {sushi.slice(start, end).map((sush) => <Sushi sush={sush} key={sush.id} />)}
      <MoreButton start={start} setStart={setStart} end={end} setEnd={setEnd} />
    </div>
  );
}

export default SushiContainer;
