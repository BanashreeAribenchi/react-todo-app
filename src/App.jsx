import { useState, useEffect } from "react";
import "./index.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteToDo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  }
  return (
    <>
      <div id="header-section">
        <h1>Things to be Done!!!</h1>
      </div>
      <div id="main-section">
        <TodoForm onSubmit={addTodo} />
        <h2 className="header">Todo List</h2>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteToDo={deleteToDo}
        />
      </div>
      <div id="footer-section">
        <h3>Coded with Passion by Banashree Aribenchi</h3>
      </div>
    </>
  );
}
