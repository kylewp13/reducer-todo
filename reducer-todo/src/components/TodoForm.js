import React from "react";

export function TodoForm(props) {

  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.newTask}
        name="task"
        placeholder="Add Task"
        onChange={props.handleChange}
      />
      <button>Add Task</button>
      <button onClick={() => props.dispatch({ type: 'CLear_Task' })}>Done</button>
    </form>
  );
}
