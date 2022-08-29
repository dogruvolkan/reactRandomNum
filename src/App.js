import "./style.css";
import { useState } from "react";

function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(0);
  const [randomNum, setRandomNum] = useState(0);

  const htmlDom = document.querySelector("html");
  const rgbDom = document.querySelector(".rgb");

  const generateRandNum = () => {
    var rndRed = Math.random() *256 ;
    var rndGreen = Math.random() *256;
    var rndBlue = Math.random() *256;
    htmlDom.style.background= `rgb(${Math.floor(rndRed)} , ${Math.floor(rndGreen)} , ${Math.floor(rndBlue)})`;
    rgbDom.textContent = `${Math.floor(rndRed)}  ${Math.floor(rndGreen)}  ${Math.floor(rndBlue)} `
    var rnd = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
    return setRandomNum(rnd);     
  };

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="random-num">
            <h3>
              Random Number: <span>{randomNum}</span>{" "}
            </h3>
          </div>
          <div className="min-max-area">
            <div className="min">
              <h3>Min: </h3>
              <input
                type="number"
                value={minVal}
                onChange={(e) => setMinVal(Number(e.target.value))}
              />
            </div>
            <div className="max">
              <h3>Max:</h3>
              <input
                type="number"
                value={maxVal}
                onChange={(e) => setMaxVal(Number(e.target.value))}
              />
            </div>
          </div>
          <button onClick={generateRandNum}>Get Random Number</button>
          <h4>RGB <span className="rgb"></span>  </h4>
        </div>
      </div>
    </>
  );
}

export default App;
