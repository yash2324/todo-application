import React from "react";
import { useState } from "react";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, description: desc }),
      });

      if (!response.ok) {
        throw new Error("Failed to create todo");
      }

      setTitle("");
      setDesc("");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        id="desc"
        placeholder="Description"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <br />
      <button type="submit">Add a Todo</button>
    </form>
  );
}
