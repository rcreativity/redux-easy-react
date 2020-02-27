import React from "react";
import { store, view } from "react-easy-state";

const counter = store({ num: 0, incrementAmount: 2 });
const increment = () => counter.num++;
const decrement = () => counter.num--;
const inputChange = e => (counter.incrementAmount = e.target.value);
const incrementAmountFunc = () =>
  (counter.num = Number(counter.num + counter.incrementAmount));

export default view(() => (
  <div>
    React Easy State Counter : {counter.num}
    <br />
    <button onClick={increment}>Increment</button> <br />
    <button onClick={decrement}>Decrement</button> <br />
    <input value={counter.incrementAmount} onChange={inputChange} />{" "}
    <button onClick={incrementAmountFunc}>Add Amount</button>
  </div>
));
