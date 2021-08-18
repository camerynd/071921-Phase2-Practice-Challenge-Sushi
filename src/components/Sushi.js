import React, {useState} from "react";

function Sushi({sush}) {

  const [eaten, setEaten] = useState(false)

  function eatSushi() {
    setEaten(!eaten)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {eaten ? null : (
          <img
            src={sush.img_url}
            alt={sush.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sush.name} - ${sush.price}
      </h4>
    </div>
  );
}

export default Sushi;
