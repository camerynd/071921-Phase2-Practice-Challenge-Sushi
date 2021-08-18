import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  const [start, setStart] = useState(0)
  const [money, setMoney] = useState(100)
  const end = start + 4
  
  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushi(data))
  })

  function sushiStartEnd() {
    setStart(start + 4)
  }

  function eat(piece) {
    setMoney(money - piece.price)
    const newSushi = sushi.map((sush) => sush.id === piece.id ? { ...sushi, eaten: true} : sush)
    setSushi(newSushi)
  }

  const eatenSushi = sushi.filter((sush) => sush.eaten)

  return (
    <div className="app">
      <SushiContainer sushi={sushi.slice(start, end)} changeSushi={sushiStartEnd} eatSushi={eat} />
      <Table plates={eatenSushi} money={money}/>
    </div>
  );
}

export default App;
