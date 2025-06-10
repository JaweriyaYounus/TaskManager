const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const { title } = req.body;
    const task = { id: tasks.length + 1, title };
    tasks.push(task);
    res.status(201).json(task);
});

app.get('/health', (req, res) => {
    res.send('OK');
});

app.listen(PORT, () => {
    console.log(`Task Service running on port ${PORT}`);
});