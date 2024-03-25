import React from "react";

export default function CreateTodo() {
  async function onClickHandler({ title, desc }) {
    const send = await fetch("http://localhost:3000/todo", {
      method: "POST",
      body: {
        title: title,
        description: desc,
      },
    });
  }
  return (
    <div>
      <input type="text" id="title" placeholder="Title" />
      <br />
      <input type="text" id="desc" placeholder="Description" />
      <br />
      <button onClick={(title, desc) => onClickHandler(title, desc)}>
        Add a Todo
      </button>
    </div>
  );
}
