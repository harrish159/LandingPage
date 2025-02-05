import React from "react";
import Child from "./child";

function Parent() {
  const name = "Harrish";
  const age=20;
  return (
    <div>
      <Child name={name} age={age}/>
    </div>
  );
}

export default Parent;
