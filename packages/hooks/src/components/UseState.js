import React, { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>This is a component using React useState hook</p>
      <p>We are rendering the number of clicks of a button => {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default UseState;
