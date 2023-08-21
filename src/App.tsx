import React, { useState } from 'react';
import './styles.css'; // Import the styles.css file

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="container">
      <div className="heading">Task List</div>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
