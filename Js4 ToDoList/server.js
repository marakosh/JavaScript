const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));
app.use(express.json());

app.get('/tasks', (req, res) => {
  try {
    const data = fs.readFileSync('tasks.json', 'utf8');
    const tasks = JSON.parse(data);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load tasks' });
  }
});

app.post('/tasks', (req, res) => {
  try {
    const tasks = req.body;
    fs.writeFileSync('tasks.json', JSON.stringify(tasks));
    res.json({ message: 'Tasks saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save tasks' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
