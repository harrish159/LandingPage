import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);  //Count is initial Value Setcount Stores the updated Value
  
    const Increment = () =>{
        setcount(count+1);
    }
    const Decrement = () =>{
        if (count>0)
        setcount(count-1);
    }

    
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
