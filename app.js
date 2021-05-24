const express = require("express");
const todosRoute = require("./routes/todo");

const app = express();

app.use(express.json());
// app.use(express.urlencoded())

app.use(todosRoute);

app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

app.listen(1000, () => {
  console.log("Port running on 1000");
});
