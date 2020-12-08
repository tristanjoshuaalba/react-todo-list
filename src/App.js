import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import React, {useState} from "react";
import {nanoid} from "nanoid";



function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const addTask = (name) => {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
    // FILTERING AND COUNTING REMAINING TASKS
    const remainingTasks = tasks.filter(task => task.completed==false);
    const tasksNoun = remainingTasks.length!== 1 ? 'tasks' : 'task';
    const headingText = `${remainingTasks.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>📝 Todo List </h1>
      <Form addTask={addTask}/>

      <h2 id = "list-heading">
        {headingText}
      </h2> 

      <br>
      </br>

      <ul 
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}

      </ul>
    </div>
  );
}

export default App;
