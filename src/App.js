import React from 'react';
import './App.css';

function App() {
  console.log("Rendering App Component", new Date().getTime());

  return (
    <div className="App">
      <h3>Quote Generator - React</h3>

      <button type="button">Add Item</button>
      <span>&nbsp;</span>
      <button id="clear" type="button">Clear List</button>

    </div>
  );
}

export default App;
