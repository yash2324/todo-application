const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const { todo } = require("./db");
app.listen(3000, () => {
  console.log("App started at PORT 3000");
});
const { createTodo, updateTodo } = require("./types");

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos: todos,
  });
});

app.post("/todo", async (req, res) => {
  const createData = req.body;
  const parsedData = createTodo.safeParse(createData);
  if (!parsedData.success) {
    res.status(411).json({
      message: "You sent the wrong input data",
    });
    return;
  }
  await todo.create({
    title: createData.title,
    description: createData.description,
    completed: false,
  });
  res.json({
    message: "todo created",
  });
});

app.put("/completed", async (req, res) => {
  const updatedData = req.body;
  const parsedData = updateTodo.safeParse(updatedData);
  if (!parsedData.success) {
    res.status(411).json({
      message: "You sent the wrong input",
    });
    return;
  }
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    message: "marked as completed",
  });
});

app.delete("/delete", async (req, res) => {
  const deletedData = req.body;
  const parsedData = updateTodo.safeParse(deletedData);
  if (!parsedData.success) {
    res.status(411).json({
      message: "You sent the wrong input",
    });
    return;
  }
  await todo.deleteOne({
    _id: req.body.id,
  });
  res.json({
    message: "todo has been deleted",
  });
});
