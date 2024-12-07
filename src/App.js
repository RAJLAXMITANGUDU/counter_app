import React,{use, useState} from "react";
export default function CounterApp() {
  const [count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  };
  const decrement=()=>{
    setCount(count-1);
  };
  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Couonter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}