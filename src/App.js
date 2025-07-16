import { useRef, useState } from 'react';
import './App.css';

function App() {
  // setting the hooks
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const addToDoItems = () => {
    const inputItem = inputRef.current.value;
    setTodos([...todos, inputItem]);
    inputItem.current.value = "";
  }

  // the web page structure
  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className='to-do-container'>
        <ul>
          {
            todos.map((item) => {
              return <li>{item}</li>;
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
