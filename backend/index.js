const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("App started at PORT 3000");
});
require("dotenv").config();
const { createTodo, updateTodo } = require("./types");

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/todos", (req, res) => {});
app.post("/todo", (req, res) => {
  const createData = req.body;
  const parsedData = createData.safeParse(createData);
  if (!parsedData.success) {
    res.status(411).json({
      message: "You sent the wrong input data",
    });
    return;
  }
});

app.put("/completed", (req, res) => {
  const updatedData = req.body;
  const parsedData = updateTodo.safeParse(updatedData);
  if (!parsedData.success) {
    res.status(411).json({
      message: "You sent the wrong input",
    });
    return;
  }
});
