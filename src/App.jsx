import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input === "" || input.trim() === "") return;
    const addTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks([...tasks, addTask]);
    setInput("");
  }

  return (
    <>
      <div className="flex flex-col items-center gap-y-5 bg-gray-500 rounded-lg py-6 min-h-screen">
        <h1 className="text-6xl">PowerList</h1>
        <form action="" onSubmit={handleSubmit} className="flex gap-x-3">
          <input
            placeholder="Enter a task"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2 w-96"
          />
          <button className="bg-blue-500 p-2 rounded-lg">Add Task</button>
        </form>

        <div className="flex flex-col gap-y-3">
          {tasks.map((task) => {
            return (
              <div
                key={task.id}
                className="bg-gray-300 p-2 rounded-md flex justify-between items-center w-88"
              >
                <p>{task.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
