import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todolist() {
  let [todos, SetTodos] = useState([{ task: "simple task", id: uuidv4() }]); //state for todo | uuid4 is method use use unique id
  let [newTodo, SetNewTodo] = useState(""); //state for show newtodo when click on button
  let addNewTask = () => {
    //use spread op and call back to add new value
    SetTodos((preTodos) => {
      return [...preTodos, { task: newTodo, id: uuidv4() }];
    }); //pass with id and task
    SetNewTodo(""); //reset input blank
    console.log("added");
  };
  let updateTodoValue = (event) => {
    //get input value
    console.log(event.target.value);
    SetNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    SetTodos((preDel) => todos.filter((preDel) => preDel.id != id));
    //create a new array which not have that id that is filtered
    console.log(copy);
  };
  return (
    <>
      <center style={{ marginTop: "50px" }}>
        <input
          type="text"
          placeholder="add task"
          value={newTodo}
          onChange={updateTodoValue}
        />
        <button onClick={addNewTask}>add</button>
        <hr />
        <h3>Todo items</h3>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <span>{todo.task}</span> &nbsp; &nbsp; &nbsp; &nbsp;
                <button
                  style={{ marginBottom: "10px" }}
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            ); // use key to identify unique key
          })}
        </ul>
      </center>
    </>
  );
}
