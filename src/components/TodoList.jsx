import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, toggleTodo, deleteToDo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteToDo={deleteToDo}
          />
        );
      })}
    </ul>
  );
};
