import React from "react";
import { useState } from "react";
import ToDOItem from "./Cross_ToDoItem";

function App() {

   const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]); // because the start state is an empty array of items that is what is initialized

  function handleChange(event) {
    const newValue = event.target.value; // getting hold of the value that trigged the event
    setInputText(newValue);
  }

  function addItem() {
    setItems([...items, inputText]); // first putting all the items and then adding the new item in the end through the variable inputText
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => ( // travels the items, and map each item in the li
             <ToDOItem 
             text = {item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
