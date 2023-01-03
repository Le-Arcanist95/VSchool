const Todo = require('../models/Todo.js')

// Get All Todos
exports.getAllTodos = (req, res, next) => {
    Todo.find((err, todos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todos)
    })
}

// Add new Todo
exports.addTodo = (req, res, next) => {
    req.body.user = req.auth._id
    const newTodo = new Todo(req.body)
    newTodo.save((err, savedTodo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedTodo)
    })
}

// Get Todo
exports.getTodo = (req, res, next) => {
    Todo.findOne(
        { _id: req.params.todoId },
        (err, foundTodo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(foundTodo)
        }
    )
}

// Update Todo
exports.updateTodo = (req, res, next) => {
    Todo.findOneAndUpdate(
        { _id: req.params.todoId, user: req.auth._id },
        req.body,
        { new: true },
        (err, updatedTodo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedTodo)
        }
    )
}

// Delete Todo
exports.deleteTodo = (req, res, next) => {
    Todo.findOneAndDelete(
        { _id: req.params.todoId, user: req.auth._id },
        (err, deletedTodo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully delete todo: ${deletedTodo.title}`)
        }
    )
}

// Get Todos by User
exports.getTodosByUser = (req, res, next) => {
    Todo.find({ user: req.auth._id }, (err, todos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todos)
    });
};