import React from "react";

const Todos = ({ todos }) => {
  const handleUpdate = async (id) => {
    const response = await fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
  };
  const handleDelete = async (id) => {
    const response = await fetch("http://localhost:3000/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
  };
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.title}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={() => {
                handleUpdate(todo._id);
              }}
            >
              {todo.completed == true ? "Completed" : "Mark as Completed"}
            </button>
            <button
              onClick={() => {
                handleDelete(todo._id);
              }}
            >
              Delete the task
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
