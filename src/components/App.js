import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushi(data))
  }, [])


  return (
    <div className="app">
      <SushiContainer sushi={sushi} setSushi={setSushi}/>
      <Table />
    </div>
  );
}

export default App;
