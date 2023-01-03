const express = require("express");
const todoRouter = express.Router();
const { getAllTodos, addTodo, getTodo, updateTodo, deleteTodo, getTodosByUser } = require("../controllers/TodoController.js");

todoRouter.route("/")
  .get(getAllTodos)
  .post(addTodo);

todoRouter.route("/:todoId")
  .get(getTodo)
  .put(updateTodo)
  .delete(deleteTodo);

todoRouter.route('/user')
  .get(getTodosByUser)

module.exports = todoRouter;