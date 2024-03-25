const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("App started at PORT 3000");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/todos", (req, res) => {});
app.post("/todo", (req, res) => {});
app.post("/completed", (req, res) => {});
