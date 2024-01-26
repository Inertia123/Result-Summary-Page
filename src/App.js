import { useState } from "react";
import data from "./data.json";

export default function App(){
  const [items] = useState(data);
  return (
    <main>
      <section>
      <div className="top">
        <h2 className="your">Your Result</h2>
        <div className="bigcircle">
          <div className="circle">
            <span>76</span>
            <p>of 100</p>
          </div>
        </div>
        <h1>Great</h1>
        <p className="bpara">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <div className="bottom">
        <h2>Summary</h2>

        <div>
          {items.map((item, index) =>(
            <div key={index} style={
              {backgroundColor: `${item.color}10`, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", borderRadius: "0.5rem", marginTop: "1rem"}
            }>
              <div className="left">
                <img src={item.icon} alt="image"></img>
                <h2 style={{color: item.color}}>{item.category}</h2>
              </div>
              <p className="hundred"><span className="score">{item.score}</span> / 100</p>
            </div>
          ))}
        </div>
        <button>Continue</button>
      </div>
    </section>
    </main>
  )
}