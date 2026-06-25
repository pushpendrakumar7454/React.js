import React, { useState } from "react";


const App = () => {
  const [count, setcount] = useState(0);

  let increase = () => {
  setcount(prev => prev + 1);
   };

    let decrease = () => {
      if (count > 0) {
        setcount(prev => prev - 1);
      }
    };

    let increaseby5 = () => {
      setcount(prev => prev + 5);
    };

    let decreaseby5 = () => {
      if (count > 0) {
        setcount(prev => prev - 5);
      }
    };

  return (
    <div className="container">
      <div className="card">
        <h1>Counter</h1>
        <p>React State Management using useState Hook</p>

        <div className="counter">
          {count}
        </div>

        <div className="buttons">
          <button onClick={increase}>+1</button>
         <button onClick={decrease}>-1</button>
          <button onClick={increaseby5}>+5</button>
          <button onClick={decreaseby5}>-5</button>
        </div>

        <button
          className="reset"
          onClick={() => setCount(0)}
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default App;
