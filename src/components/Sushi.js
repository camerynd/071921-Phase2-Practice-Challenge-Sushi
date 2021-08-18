import React from "react";

function Sushi({sush, eatSushi}) {

  function handleClick() {
    eatSushi(sush)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {sush.eaten ? null : (
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
