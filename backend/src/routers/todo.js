const express = require('express');
const todoRouter = express.Router();
const TodoRepository = require('../data/repositories/todo-repository');

todoRouter.get('/todo', async (req, res, next) => {
  const todos = await TodoRepository.getAllTodos();
  return res.json(todos);
});

todoRouter.post('/todo', async (req, res) => {
  const { body: payload } = req;
  await TodoRepository.insertTodo({ payload });
  return res.json({});
});

todoRouter.get('/todo/:id', async (req, res) => {
  const { id } = req.params;

  if (id !== undefined) {
    const todo = await TodoRepository.getTodo({ id });
    return res.json(todo);
  }

  return res.status(404).send();
});

todoRouter.patch('/todo/:id', async (req, res) => {
  const { id } = req.params;
  const { body: payload } = req;
  if (id !== undefined) {
    const todo = await TodoRepository.upsertTodo({ id, payload });
    return res.json(todo);
  }

  return res.status(404).send();
});

todoRouter.delete('/todo/:id', async (req, res) => {
  const { id } = req.params;
  if (id !== undefined) {
    const todo = await TodoRepository.deleteTodo({ id });
    return res.status(204).send();
  }
  return res.status(404).send();
});

module.exports = todoRouter;