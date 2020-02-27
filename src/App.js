import React from "react";
import { Counter } from "./features/counter/Counter";
import Todo from "./features/todo/Todo";
import Inc from "./Inc.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Redux Toolkit & Easy React State</h2>
      <br />
      <Todo />
      <br />
      <hr style={{ width: "50%" }} />
      <Counter />
      <br />
      <Inc />
    </div>
  );
}

export default App;
