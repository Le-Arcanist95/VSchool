const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid')

app.use(express.json());

const todoList = [
    {
        name: "Task One",
        description: "Do this and do that",
        imgUrl: "https://picsum.photos/200",
        completed: false,
        _id: uuidv4()
    }
];

app.route('/')
    .get((req, res) => {
        res.send(todoList);
    })
    .post((req, res) => {
        const newTodo = req.body;
        newTodo._id = uuidv4();
        todoList.push(newTodo);
        res.send(`Successfully added ${newTodo.name} to the list.`)
    })
app.route('/:todoId')
    .get((req, res) => {
        res.send(todoList.find(todo => todo._id === req.params.todoId));
    })
    .put((req, res) => {
        const selectedTodo = todoList.find(todo => todo._id === req.params.todoId);
        const updates = req.body;
        const newTodo = Object.assign(selectedTodo, updates);
        res.send(newTodo);
        console.log(`Successfully updated todo ID# ${req.params.todoId}`);
    })
    .delete((req, res) => {
        const todoId = req.params.todoId;
        const todoIndex = todoList.findIndex(todo => todo._id === todoId);
        todoList.splice(todoIndex, 1);
        res.send('Successfully deleted the selected task.');
    })

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});