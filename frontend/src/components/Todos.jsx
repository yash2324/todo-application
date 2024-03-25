import React from "react";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.title}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
