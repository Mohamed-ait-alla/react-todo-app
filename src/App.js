import { useRef, useState } from 'react';
import './App.css';

function App() {
  // setting the hooks
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  // function that addes items to the list
  const addToDoItems = () => {
    const inputItem = inputRef.current.value;
    const newItem = {completed: false, inputItem};
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  }

  // function that handles successfully completed items
  const handleDoneItems = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    }

  const handleDeltedItems = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  
  // the web page structure
  return (
    <div className="app">
      <h2 className= 'app-header'>To Do List</h2>
      <div className= 'to-do-container'>
        <ul>
          {
            todos.map((item, index) => {
              return (
                <div key= {index + Math.random() * 5} className= 'item'>
                  <li key= {index + Math.random() * 5} className= {item.completed ? "done": ""} onClick={() => handleDoneItems(index)}>{item.inputItem}</li>
                  <span key= {index + Math.random() * 7} className= 'remove-item' onClick={() => handleDeltedItems(index)}>❌</span>
                </div>
              );
            })
          }
        </ul>
        <input ref={inputRef} placeholder='Enter an Item...'/>
        <button onClick={addToDoItems}>Add</button>
      </div>
    </div>
  );
}

export default App;
