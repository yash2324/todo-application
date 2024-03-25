import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import { useState, useEffect } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  });
  async function getTodos() {
    const data = await fetch("http://localhost:3000/todos");

    const response = await data.json();

    setTodos(response.todos);
  }

  return (
    <>
      <div>
        <p>Hi there</p>
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
