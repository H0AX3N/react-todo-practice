import React, { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if(input === '') alert('Please enter a task');
    if(input.trim() === '') alert('Please enter a task');
    const addTask = {
      id : Date.now(),
      text : input,
      completed : false
    }
    setTasks([...tasks, addTask]);
    setInput('');
  }

  return (
    <>
      <h1>PowerList</h1>
      <form action="" onSubmit={handleSubmit}>
        <input 
          placeholder='Enter a task' 
          type="text" 
          value = {input}
          onChange={e => setInput(e.target.value)}
          
        />
        <button>Add Task</button>
      </form>

      <div>
        {tasks.map(task => {
          return (
            <div key={task.id}>
            <p>{task.text}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App;
