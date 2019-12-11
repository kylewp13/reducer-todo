import React from 'react';
import Todo from './Todo';

function TodoList(props) {
  console.log(props.task)
  return ( 
    <div>
    {props.task.map(item => (
        <Todo key={item.id} item={item} dispatch={props.dispatch} />
      ))}
    </div>
   );
}
 
export default TodoList;
