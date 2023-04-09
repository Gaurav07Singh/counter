import './App.css';
import React from 'react';
import Count from './Count';

function App() {
  const[count , setCount] = React.useState(0);

  function add()
  {
    //  setCount(count +1);
    // Optimized Way
    setCount(prevCount => prevCount + 1);
  }

  function minus()
  {
    // setCount(count-1);

    setCount(prevCount => prevCount - 1);

  }
  return (
    <div className="counter">
        <button className="counter--minus" onClick={minus}>-</button>
	      <Count number={count} />
	      <button className="counter--plus" onClick={add}>+</button>
    </div>
  );
}

export default App;
