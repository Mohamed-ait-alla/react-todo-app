import { useRef, useState, useEffect } from 'react';
import './App.css';

function App() {
  // setting the hooks
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // function that addes items to the list
  const addToDoItems = () => {
    const inputItem = inputRef.current.value;
    if (inputItem !== "")
    {
      const newItem = {completed: false, inputItem};
      setTodos([...todos, newItem]);
      inputRef.current.value = "";
    }
  }

  // function that handles successfully completed items
  const handleDoneItems = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    }
  
  // function that handles deleted items
  const handleDeltedItems = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  
  // the web page structure
  return (
      <div className={darkMode ? 'app-dark' : 'app'}>
        <h2 className={darkMode ? 'app-header-dark' : 'app-header'}>To Do List</h2>
        <div className={darkMode ? 'to-do-container-dark' : 'to-do-container'}>
          <ul>
            {
              todos.map((item, index) => {
                return (
                  <div key= {index + Math.random() * 5} className= 'item'>
                    <li key= {index + Math.random() * 5} className= {item.completed ? "done": ""} onClick={() => handleDoneItems(index)}>{item.inputItem}</li>
                    <span key= {index + Math.random() * 7} className= 'remove-item' onClick={() => handleDeltedItems(index)} title='Delete'>❌</span>
                  </div>
                );
              })
            }
          </ul>
          <input ref={inputRef} className={darkMode ? "input-dark" : "input"} placeholder='Enter a Task...' />
          <button onClick={addToDoItems} className={darkMode ? 'add-btn-dark' : 'add-btn'}>Add</button>
        </div>
          <button className='dark-mode-toggle' onClick={() => setDarkMode(!darkMode)} aria-label='Toggle Dark Mode'>{darkMode ? "☀️" : "🌙"}</button>
      </div>
  );
}

export default App;
