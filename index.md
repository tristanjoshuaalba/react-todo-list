## Overview

In this exercise, we aim to create a to-do list app using ReactJS.

## Our Apps' User Stories

As a user, I can:
- Read a list of tasks
- Add a task using the mouse or keyboard
- Mark any task as completed
- Delete any task
- Edit any task
- View a specific subset of tasks: All tasks, only the active tasks, or only the completed tasks

I added the following chunks of code to the `App.js` file that corresponds to different `components` of the application:

ToDo List Form
```jsx 
    <form>
    <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
        What needs to be done?
        </label>
    </h2>
    <input 
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
        Add
        </button>
    </form>
```

Button Group for Toggling All/Active/Completed Tasks
```jsx
    <div className = "filters btn-group stack-exception">
    <button type="button" clasName="btn toggle-btn" aria-pressed="true">
        <span className="visually-hidden"> Show </span>
        <span> all </span>
        <span className="visually-hidden"> tasks</span>
    </button>

    <button type="button" clasName="btn toggle-btn" aria-pressed="false">
        <span className="visually-hidden"> Show </span>
        <span> Active </span>
        <span className="visually-hidden"> tasks</span>
    </button>

    <button type="button" clasName="btn toggle-btn" aria-pressed="false">
        <span className="visually-hidden"> Show </span>
        <span> Completed </span>
        <span className="visually-hidden"> tasks</span>
    </button>
    </div>
```

List Counter
```jsx
    <h2 id = "list-heading">
    3 tasks remaining
    </h2>
```

ToDo List Items
```jsx
    <ul 
    role="list"
    className="todo-list stack-large stack-exception"
    aria-labelledby="list-heading"
    >
    <li className="todo stack-small">
        <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true}/>
        <label className="todo-label" htmlFor="todo-0">
            Eat
        </label>
        </div>

        <div className="btn-group">
        <button type="button" className="btn">
            Edit <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">Eat</span>
        </button>
        </div>
    </li>
    </ul>

````

After styling, the app should look like this:


## Useful references:
[React Todo List - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)