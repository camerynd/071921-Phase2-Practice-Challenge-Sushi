import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushi, changeSushi, eatSushi}) {

  return (
    <div className="belt">
      {sushi.map((sush) => <Sushi sush={sush} key={sush.id} eatSushi={eatSushi} />)}
      <MoreButton changeSushi={changeSushi} />
    </div>
  );
}

export default SushiContainer;
