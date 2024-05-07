import React, {useState} from "react";
import {useTodo} from "../../../Context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const {addTodo} = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({todo, completed: false});
    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex shadow rounded-lg overflow-hidden mb-4"
    >
      <input
        type="text"
        value={todo}
        name="text"
        onChange={(e) => setTodo(e.target.value)}
        className="py-3 px-4 block w-full border-gray-200 rounded-l-lg text-sm "
        placeholder="text"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-medium px-4 py-3"
      >
        submit
      </button>
    </form>
  );
}

export default TodoForm;
