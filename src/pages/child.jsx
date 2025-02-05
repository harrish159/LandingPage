import React from "react";
function Child({ name, age }) {
  return (
    <div>
      <h1>
        Greetings {name} and  Age is {age}
      </h1>
    </div>
  );
}

export default Child;