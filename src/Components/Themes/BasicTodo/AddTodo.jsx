import React, {useEffect, useState} from "react";
import TodoList from "./TodoList";
import {TodoProvider} from "../../../Context/TodoContext";
import TodoForm from "./TodoForm";

function AddTodo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(), ...todo}]);
  };
  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? {...prevTodo, completed: !prevTodo.completed}
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}
    >
      <div className="shadow-lg max-w-xl mx-auto p-8 w-full">
        <TodoForm></TodoForm>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoList todo={todo}></TodoList>
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default AddTodo;
