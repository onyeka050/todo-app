const express = require("express");

// CRUD ---- CREATE, READ, UPDATE, DELETE.
// http ----- POST, GET, PATCH/PUT, DELETE

const router = express.Router();

const defaultTodos = [
  {
    item: "Master Javascript",
    difficulty: "high",
  },
  {
    item: "Master HTML",
    difficulty: "low",
  },
];

router.get("/todos", (req, res, next) => {
  res.status(200).send(defaultTodos);
});

router.post("/todos", (req, res, next) => {
  const newTodo = {
    item: req.body.item,
    difficulty: req.body.difficulty,
  };
  defaultTodos.push(newTodo);
  //   const newDefaultTodos = [...defaultTodos, newTodo];
  res.status(200).send(defaultTodos);
});

module.exports = router;
